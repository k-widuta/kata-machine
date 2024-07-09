import { QuickSort } from "src/algorithms/sorting/quick-sort";
import { describe, expect, test } from "vitest";

describe("Quick Sort test suite", () => {
    test("Should sort the array", () => {
        let arr: number[] = []
        for (let j = 0; j < 50; ++j) {
            arr.push(Math.floor(Math.random() * 100))
        }
        QuickSort(arr)

        for (let i = 0; i < arr.length - 1; ++i) {
            expect(arr[i]).toBeLessThanOrEqual(arr[i + 1])
        }

    })
})
