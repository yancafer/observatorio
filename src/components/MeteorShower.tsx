import { meteors } from "@/data/sky";

export function MeteorShower() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[38%] overflow-hidden">
      {meteors.map((meteor, i) => (
        <span
          key={i}
          className="animate-meteor absolute"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            width: `${meteor.length}px`,
            height: `${meteor.thickness}px`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`,
            background: "linear-gradient(90deg, rgba(253,246,227,0), rgba(253,246,227,0.9))",
            boxShadow: "1px 0 6px rgba(253,246,227,0.6)",
          }}
        />
      ))}
    </div>
  );
}
