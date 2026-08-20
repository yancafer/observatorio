import { stars } from "@/data/sky";
import { Sparkle } from "./Sparkle";

export function Starfield() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {stars.map((star, i) => (
        <Sparkle
          key={i}
          className={`animate-twinkle absolute ${star.warm ? "text-accent-gold" : "text-[#fdf6e3]"}`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            filter: star.bright
              ? "drop-shadow(0 0 6px currentColor)"
              : "drop-shadow(0 0 2px currentColor)",
            ["--twinkle-min" as string]: star.bright ? 0.25 : 0.1,
            ["--twinkle-max" as string]: 1,
          }}
        />
      ))}
    </div>
  );
}
