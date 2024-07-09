import { BubbleSort } from "src/algorithms/sorting/bubble-sort";
import { describe, test, expect } from "vitest";

describe("Bubble Sort", () => {
    test("Should sort the array", () => {
        const expected = [0, 1, 4, 69, 420, 1997];
        expect(BubbleSort([4, 420, 69, 1997, 1, 0])).toEqual(expected)
    })
})
