import type { CSSProperties } from "react";

type SparkleProps = {
  className?: string;
  style?: CSSProperties;
};

export function Sparkle({ className, style }: SparkleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 0c.6 4.6 1.4 7.6 2.9 9.1S19.4 11.4 24 12c-4.6.6-7.6 1.4-9.1 2.9S12.6 19.4 12 24c-.6-4.6-1.4-7.6-2.9-9.1S4.6 12.6 0 12c4.6-.6 7.6-1.4 9.1-2.9S11.4.6 12 0Z" />
    </svg>
  );
}
