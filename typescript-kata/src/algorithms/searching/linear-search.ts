export default function LinearSearch(haystack: number[], needle: number) {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}
