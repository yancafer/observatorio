import { seededRandom } from "@/lib/random";

export type Star = {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  bright: boolean;
  warm: boolean;
};

export const stars: Star[] = Array.from({ length: 55 }, (_, i) => {
  const bright = seededRandom(i * 91.345) > 0.85;
  return {
    top: seededRandom(i * 12.9898) * 100,
    left: seededRandom(i * 78.233) * 100,
    size: bright ? seededRandom(i * 37.719) * 4 + 8 : seededRandom(i * 37.719) * 3 + 3,
    duration: seededRandom(i * 4.51) * 3 + 2.5,
    delay: seededRandom(i * 9.13) * 4,
    bright,
    warm: seededRandom(i * 63.982) > 0.5,
  };
});

export type Meteor = {
  top: number;
  left: number;
  duration: number;
  delay: number;
  length: number;
  thickness: number;
};

export const meteors: Meteor[] = [
  { top: 4, left: -10, duration: 9, delay: 0.5, length: 56, thickness: 1 },
  { top: -6, left: 15, duration: 12, delay: 5, length: 80, thickness: 1.5 },
  { top: 10, left: 40, duration: 15, delay: 9.5, length: 40, thickness: 1 },
];
