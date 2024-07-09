export function BinarySearch(haystack: number[], needle: number): boolean {
  let lo: number = 0;
  let hi: number = haystack.length;

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const val = haystack[mid];

    if (val === needle) {
      return true;
    } else if (val > needle) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return false;
}
