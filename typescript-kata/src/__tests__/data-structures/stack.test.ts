import { Stack } from "src/data-structures/stack";
import { describe, expect, test } from "vitest";

function createStack<T>(...args: T[]): Stack<T> {
    const stack = new Stack()

    for (const arg in args) {
        stack.push(arg)
    }

    return stack as Stack<T>
}

describe("Stack test suite", () => {
    test("Peak from empty stack should return undefined", () => {
        const stack = createStack()
        expect(stack.peak()).toEqual(undefined)
    })

    test("Push to empty stack should update the head", () => {
        const stack = createStack()
        stack.push(69)
        expect(stack.peak()).toEqual(69)
    })

    test("Pop from empty stack should return undefined", () => {
        const stack = createStack()
        stack.pop()
        expect(stack.peak()).toEqual(undefined)
    })

    test("After popping, length of stack should always be greater or equal to 0", () => {
        const stack = createStack()
        stack.pop()
        stack.pop()
        expect(stack.length).toEqual(0)
    })
})
