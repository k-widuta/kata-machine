import { Queue } from "src/data-structures/queue";
import { describe, test,  expect } from "vitest";

function createQueue<T>(...args: T[]): Queue<T> {
    let q = new Queue()

    for (const arg of args) {
        q.enqueue(arg)
    }

    return q as Queue<T>
}

describe("Queue test suite", () => {
    const q = createQueue(69, 44, 420)

    test("Length of queue should be 3", () => {
        expect(q.length).toEqual(3)
    })

    test("Peak should return 69", () => {
        expect(q.peak()).toEqual(69)
    })

    test("Deque should return 69", () => {
        expect(q.deque()).toEqual(69)
    })

    test("After deque length should be 2", () => {
        expect(q.length).toEqual(2)
    })

    test("Peak should return 44", () => {
        expect(q.peak()).toEqual(44)
    })

    test("Deque from empty queue should return undefined", () => {
        q.deque()
        q.deque()
        expect(q.deque()).toEqual(undefined)
    })

    test("Length of empty queue should be 0", () => {
        expect(q.length).toEqual(0)
    })

    test("Head of empty list should be undefined", () => {
        expect(q.head).toEqual(undefined)
    })

    test("Tail of empty list should be undefined", () => {
        expect(q.tail).toEqual(undefined)
    })

    test("After enqueue empty list, head should equal tail", () => {
        q.enqueue(97)
        expect(q.tail).toEqual(q.head)
    })


})
