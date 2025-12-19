import React, { useMemo } from "react";

type Particle = {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

type Props = {
  count?: number;
};

const Particles: React.FC<Props> = ({ count = 28 }) => {
  const particles = useMemo<Particle[]>(() => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    return Array.from({ length: count }).map((_, i) => {
      const size = Math.round(rand(2, 6));
      return {
        id: i,
        left: `${rand(0, 100).toFixed(2)}%`,
        top: `${rand(0, 100).toFixed(2)}%`,
        size,
        duration: rand(6, 14),
        delay: rand(0, 6),
        opacity: rand(0.15, 0.55),
      };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `floatY ${p.duration}s ease-in-out ${p.delay}s infinite`,
            filter: "blur(0.2px)",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
