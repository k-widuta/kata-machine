import { BinarySearch } from "src/algorithms/searching/binary-search";
import { describe, test, expect } from "vitest";

describe("Binary Search:", () => {
  const haystack = [1, 4, 9, 44, 69, 420, 1997];

  test("Number exists in the array", () => {
    expect(BinarySearch(haystack, 420)).toBeTruthy();
  });

  test("Number DOESNT't exist in the array", () => {
    expect(BinarySearch(haystack, 97)).toBeFalsy();
  });
});
