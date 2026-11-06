import { createHash } from "node:crypto";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  const { PORTFOLIO_ORIGIN, PORTFOLIO_ALERT_FROM, PORTFOLIO_ALERT_TO,
    PORTFOLIO_CAMPAIGNS = "{}", RESEND_API_KEY } = process.env;
  if (!PORTFOLIO_ORIGIN || !PORTFOLIO_ALERT_FROM || !PORTFOLIO_ALERT_TO || !RESEND_API_KEY) {
    return res.status(204).end();
  }
  if (req.headers.origin !== PORTFOLIO_ORIGIN || req.headers["sec-fetch-site"] !== "same-origin") {
    return res.status(403).end();
  }
  if (req.headers["sec-gpc"] === "1" || req.headers.dnt === "1") {
    return res.status(204).end();
  }

  const { tag, source } = req.body ?? {};
  let label;
  let channel = "linkedin";
  if (typeof tag === "string" && /^[a-zA-Z0-9_-]{16,64}$/.test(tag)) {
    try {
      const campaigns = JSON.parse(PORTFOLIO_CAMPAIGNS);
      if (campaigns && Object.hasOwn(campaigns, tag)) {
        label = campaigns[tag];
        channel = tag;
      }
    } catch {
      console.error("Invalid portfolio campaign configuration");
      return res.status(503).end();
    }
  } else if (!tag && source === "linkedin") {
    label = "LinkedIn profile link";
  }
  if (typeof label !== "string" || !label.trim() || label.length > 100) {
    return res.status(204).end();
  }

  const hour = new Date();
  hour.setUTCMinutes(0, 0, 0);
  const key = createHash("sha256")
    .update(JSON.stringify([PORTFOLIO_ORIGIN, channel, hour.toISOString()]))
    .digest("hex");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `portfolio-visit/${key}`,
      },
      body: JSON.stringify({
        from: PORTFOLIO_ALERT_FROM,
        to: [PORTFOLIO_ALERT_TO],
        subject: "Portfolio link opened",
        text: [
          `Link: ${label}`,
          "Page: Portfolio home",
          `Visit window beginning: ${hour.toISOString()} (UTC, one hour)`,
          "The link may have been forwarded or opened by an automated preview. The visitor's identity is unknown.",
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(5000),
    });
    if (response.ok) return res.status(204).end();
    if (response.status === 409) {
      const error = await response.json();
      if (error.name === "concurrent_idempotent_requests") return res.status(204).end();
    }
    console.error("Portfolio alert provider returned", response.status);
  } catch {
    console.error("Portfolio alert request failed");
  }
  return res.status(502).end();
}
