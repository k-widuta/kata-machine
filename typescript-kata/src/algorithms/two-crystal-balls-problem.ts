// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way

// That's the one of very few algorithms with O(sqrt(N))

export function TwoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = 0;
  for (jumpAmount; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // We need to get back to the last location where ball didn't break
  i -= jumpAmount;

  for (let j = 0; j <= jumpAmount && i < breaks.length; ++i, ++j) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
