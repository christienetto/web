function contourPath(cx: number, cy: number, r: number, seed: number) {
  const steps = 120;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const wobble =
      1 +
      0.1 * Math.sin(3 * t + seed) +
      0.06 * Math.sin(5 * t - seed * 1.3) +
      0.03 * Math.sin(9 * t + seed * 2);
    const x = cx + r * wobble * Math.cos(t);
    const y = cy + r * wobble * 0.78 * Math.sin(t);
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M${points.join("L")}Z`;
}

const levels = Array.from({ length: 22 }, (_, i) => ({
  d: contourPath(960, 150, 34 + i * 36, i * 0.32),
  index: (i + 1) % 5 === 0,
}));

export function Contours({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      fill="none"
    >
      {levels.map((l, i) => (
        <path
          key={i}
          d={l.d}
          stroke="white"
          strokeOpacity={l.index ? 0.14 : 0.06}
          strokeWidth={l.index ? 1.2 : 0.8}
        />
      ))}
    </svg>
  );
}
