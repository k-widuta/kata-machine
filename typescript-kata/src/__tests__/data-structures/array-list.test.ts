import { ArrayList } from "src/data-structures/array-list";
import { describe, expect, test } from "vitest";

function createArrayList(capacity: number, ...args: number[]): ArrayList {
    const arrayList = new ArrayList(capacity)

    for (const arg of args) {
        arrayList.push(arg)
    }

    return arrayList
}

describe("Array List test suite", () => {
    test("Empty Array List should have length of 0", () => {
        const arr = createArrayList(3)
        expect(arr.getLength()).toEqual(0)
    })

    test("Empty Array List should have capacity of 3", () => {
        const arr = createArrayList(3)
        expect(arr.getCapacity()).toEqual(3)
    })

    test("After pushing till capacity, capacity should equal length", () => {
        const arr = createArrayList(3, 69, 42, 97)
        expect(arr.getCapacity()).toEqual(arr.getLength())
    })

    test("After pushing over capacity, capacity should double", () => {
        const arr = createArrayList(3, 69, 42, 97, 44)
        expect(arr.getCapacity()).toEqual(6)
    })

    test("Popping should return 97", () => {
        const arr = createArrayList(3, 69, 42, 97)
        expect(arr.pop()).toEqual(97)
    })

    test("The last element should be 42", () => {
        const arr = createArrayList(3, 69, 42) 

        expect(arr.get(1)).toEqual(42)
        expect(arr.get(-1)).toEqual(42)
    })

    test("The first element should be 69", () => {
        const arr = createArrayList(3, 69, 42) 

        expect(arr.get(-2)).toEqual(69)
        expect(arr.get(0)).toEqual(69)
    })


    test("Getting element out of range should return undefined", () => {
        const arr = createArrayList(3, 69, 42) 

        expect(arr.get(-3)).toEqual(undefined)
        expect(arr.get(2)).toEqual(undefined)
    })
})
