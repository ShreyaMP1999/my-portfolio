// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        grid:
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.45) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
