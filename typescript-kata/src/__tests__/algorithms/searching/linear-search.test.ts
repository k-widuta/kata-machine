import LinearSearch from "src/algorithms/searching/linear-search";
import { describe, expect, test } from "vitest";

describe("Linear search", () => {
  const haystack = [1, 69, 420, 6, 27, 33, 44];

  test("Number exists in array", () => {
    expect(LinearSearch(haystack, 420)).toBeTruthy();
  });

  test("Number doesn't exist in array", () => {
    expect(LinearSearch(haystack, 97)).toBeFalsy();
  });
});
