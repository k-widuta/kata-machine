import { RingBuffer } from "src/data-structures/ring-buffer";
import { describe, expect, test } from "vitest";

function createRingBuffer(capacity: number = 0, ...args: number[]): RingBuffer {
    const ringBuffer = new RingBuffer(capacity);

    for (const arg of args) {
        ringBuffer.push(arg)
    }

    return ringBuffer
}

describe("Ring Buffer test suite", () => {
    test("Pushing to the empty ring buffer, should change the length and tail to 1", () => {
        const rb = createRingBuffer(1, 69)

        expect(rb.getLength()).toEqual(1)
        expect(rb.getCapacity()).toEqual(1)
        expect(rb.getHead()).toEqual(0)
        expect(rb.getTail()).toEqual(0)
        expect(rb.get(0)).toEqual(69)
    })

    test("Pushing to the buffer of full capacity, should double capacity", () => {
        const rb = createRingBuffer(3, 69, 4, 44)
        rb.push(97)

        expect(rb.getLength()).toEqual(4)
        expect(rb.getCapacity()).toEqual(6)
        expect(rb.getHead()).toEqual(0)
        expect(rb.getTail()).toEqual(4)
        expect(rb.get(0)).toEqual(69)
        expect(rb.get(3)).toEqual(97)
    })

    test("Poping from empty buffer should return undefined", () => {
        const rb = createRingBuffer(7)

        expect(rb.pop()).toEqual(undefined)
    })
    
    test("Popping from full capacity buffer should return 44", () => {
        const rb = createRingBuffer(3, 69, 97, 44)

        expect(rb.pop()).toEqual(44)
        expect(rb.getTail()).toEqual(2)
    })

    test("Unshifting empty buffer should behave the same as pushing", () => {
        const rb = createRingBuffer(7)
        rb.unshift(69)

        expect(rb.getHead()).toEqual(0)
        expect(rb.getTail()).toEqual(1)
        expect(rb.get(0)).toEqual(69)
    })

    test("Getting from index out of bound should return undefined", () => {
        const rb = createRingBuffer(7, 69, 44)

        expect(rb.get(2)).toEqual(undefined)
    })

    test("Unshifting when head points to 0, should move head at last spot", () => {
        const rb = createRingBuffer(4, 69)
        rb.unshift(44)

        expect(rb.getTail()).toEqual(1)
        expect(rb.getHead()).toEqual(3)
        expect(rb.getCapacity()).toEqual(4)
        expect(rb.get(0)).toEqual(44)
    })

    test("Unshifting in full capacity buffer, should double capacity and put head at last element", () => {
        const rb = createRingBuffer(4, 69, 44, 1, 2)
        rb.unshift(4)

        expect(rb.getTail()).toEqual(4)
        expect(rb.getHead()).toEqual(7)
        expect(rb.getCapacity()).toEqual(8)
        expect(rb.get(0)).toEqual(4)
    })

    test("Shifting from 0 length buffer should return undefined", () => {
        const rb = createRingBuffer(3)

        expect(rb.shift()).toEqual(undefined)
    })

    test("Shifting should move head", () => {
        const rb = createRingBuffer(3, 69)
        rb.shift()

        expect(rb.getHead()).toEqual(1)
        expect(rb.getTail()).toEqual(1)
    })

    test("Getting value with negative index", () => {
        const rb = createRingBuffer(3, 69, 44, 23)

        expect(rb.get(-1)).toEqual(23)
        expect(rb.get(-2)).toEqual(44)
        expect(rb.get(-3)).toEqual(69)
    })

    test("Pushing and shifting so its circular", () => {
        const rb = createRingBuffer(7, 1, 2, 3, 4, 5, 6, 7)
        rb.shift()
        rb.shift()
        rb.shift()
        rb.push(69)
        rb.push(44)

        expect(rb.getCapacity()).toEqual(7)
        expect(rb.getLength()).toEqual(6)
        expect(rb.get(0)).toEqual(4)
        expect(rb.get(-6)).toEqual(4)
        expect(rb.get(5)).toEqual(44)
        expect(rb.get(-1)).toEqual(44)

    })

    test("Expanding circular ring buffer", () => {
        const rb = createRingBuffer(7, 1, 2, 3, 4, 5, 6, 7)
        rb.shift()
        rb.shift()
        rb.push(69)
        rb.push(44)
        rb.push(45)

        expect(rb.getCapacity()).toEqual(14)
        expect(rb.getLength()).toEqual(8)
        expect(rb.get(0)).toEqual(3)
        expect(rb.get(-8)).toEqual(3)
        expect(rb.get(7)).toEqual(45)
        expect(rb.get(-1)).toEqual(45)

    })

    test("Popping when tail is on the other side", () => {
        const rb = createRingBuffer(7, 1, 2, 3, 4, 5, 6, 7)
        rb.shift()
        rb.shift()
        rb.push(69)
        rb.pop()

        expect(rb.getCapacity()).toEqual(7)
        expect(rb.getLength()).toEqual(5)
        expect(rb.getTail()).toEqual(0)
        expect(rb.get(0)).toEqual(3)
        expect(rb.get(-5)).toEqual(3)
        expect(rb.get(4)).toEqual(7)
        expect(rb.get(-1)).toEqual(7)

    })

    test("Popping test", () => {
        const rb = createRingBuffer(7, 1, 2, 3, 4, 5, 6, 7)
        rb.shift()
        rb.shift()
        rb.push(69)
        rb.pop()
        rb.pop()

        expect(rb.getCapacity()).toEqual(7)
        expect(rb.getLength()).toEqual(4)
        expect(rb.getTail()).toEqual(6)
        expect(rb.get(0)).toEqual(3)
        expect(rb.get(-4)).toEqual(3)
        expect(rb.get(3)).toEqual(6)
        expect(rb.get(-1)).toEqual(6)

    })

})
