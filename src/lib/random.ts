/** Deterministic pseudo-random generator so server and client markup match. */
export function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
