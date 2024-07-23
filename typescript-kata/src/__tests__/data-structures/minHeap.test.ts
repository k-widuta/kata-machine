import { MinHeap } from "src/data-structures/minHeap";
import { describe, expect, test } from "vitest";

function createMinHeap(...args: number[]): MinHeap {
    const minHeap = new MinHeap();
    for (const val of args) {
        minHeap.insert(val)
    }

    return minHeap
}

describe("MinHeap Test Suite",function () {
    test("Adding to the heap should change the length of the heap", function () {
        const minHeap = createMinHeap(420, 69, 1997, 2, 44);

        expect(minHeap.length).toEqual(5)
    })

    test("Deleting from the heap", function () {
        const minHeap = createMinHeap(420, 69, 1997, 2, 44);
        expect(minHeap.delete()).toEqual(2)
        expect(minHeap.delete()).toEqual(44)
        expect(minHeap.delete()).toEqual(69)
        expect(minHeap.length).toEqual(2)
    })

    test("Deleting from empty heap should return undefined", function () {
        const minHeap = createMinHeap();

        expect(minHeap.delete()).toEqual(undefined)
        expect(minHeap.length).toEqual(0)
    })
    test("Deleting from 1 element heap should return that element", function () {
        const minHeap = createMinHeap(420);

        expect(minHeap.delete()).toEqual(420)
        expect(minHeap.length).toEqual(0)
    })

    test("Deleting from heap till it's empty", function () {
        const minHeap = createMinHeap(420, 69, 1997, 2, 44);
        expect(minHeap.delete()).toEqual(2)
        expect(minHeap.delete()).toEqual(44)
        expect(minHeap.delete()).toEqual(69)
        expect(minHeap.delete()).toEqual(420)
        expect(minHeap.delete()).toEqual(1997)
        expect(minHeap.length).toEqual(0)
        expect(minHeap.delete()).toEqual(undefined)
    })
})
