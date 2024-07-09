import { LinkedList } from "src/data-structures/linked-list";
import { describe, expect, test } from "vitest";

function createLinkedList<T>(...args: T[]): LinkedList<T> {
    let linkedList = new LinkedList();

    for (const arg  of args) {
        linkedList.append(arg)
    }


    return linkedList as LinkedList<T>
}

describe("Linked list test suite", () => {
    test("Length should be 0", () => {
        const linked_list = new LinkedList()
        expect(linked_list.getLength(), "Empty list has length of 0").toEqual(0)
    })

    test("Length should be 3", () => {
        const linked_list = createLinkedList(69,44,420)
        expect(linked_list.getLength(), " Length of 3").toEqual(3)
    })

    test("After prepend, first value should be 97", () => {
        const linked_list = createLinkedList(69,44,420)
        linked_list.prepend(97)
        expect(linked_list.get(0)).toEqual(97)
    })
    
    test("The last value should be 420", () => {
        const linked_list = createLinkedList(69,44,420)
        expect(linked_list.get(linked_list.getLength() - 1)).toEqual(420)
    })

    test("After inserting at head, head should be equal to 4", () => {
        const linked_list = createLinkedList(69,44,420)
        linked_list.insertAt(4, 0)
        expect(linked_list.get(0)).toEqual(4)
    })

    test("After inserting at tail in 1 length list, tail should be equal to 69", () => {
        const linked_list = createLinkedList(420)
        linked_list.insertAt(69, 1)
        expect(linked_list.get(1)).toEqual(69)
    })

    test("After inserting at tail, tail should be equal to 6", () => {
        const linked_list = createLinkedList(69,44,420)
        linked_list.insertAt(6, linked_list.getLength())
        expect(linked_list.get(linked_list.getLength() - 1)).toEqual(6)
    })
    test("After appending to empty list, head should equal tail", () => {
        const linked_list = createLinkedList()
        linked_list.append(69)
        expect(linked_list.head).toEqual(linked_list.tail)
    })

    test("After prepending to empty list, head should equal tail", () => {
        const linked_list = createLinkedList()
        linked_list.prepend(69)
        expect(linked_list.head).toEqual(linked_list.tail)
    })

    test("Removing index out of range, should return undefined", () => {
        const linked_list = createLinkedList(69, 44, 420)
        expect(linked_list.removeAt(10)).toEqual(undefined)
    })

    test("Removing value that doesnt exist should return undefined", () => {
        const linked_list = createLinkedList(69, 44, 420)
        expect(linked_list.remove(10)).toEqual(undefined)
    })

    test("After removing value at head, head should equal 44", () => {
        const linked_list = createLinkedList(69, 44, 420)
        linked_list.removeAt(0)
        expect(linked_list.get(0)).toEqual(44)
    })

    test("After removing value at tail, tail should equal 44", () => {
        const linked_list = createLinkedList(69, 44, 420)
        linked_list.removeAt(linked_list.length - 1)
        expect(linked_list.get(linked_list.length - 1)).toEqual(44)
    })

    test("After removing head, head should equal to 44", () => {
        const linked_list = createLinkedList(69, 44, 420)
        linked_list.remove(69)
        expect(linked_list.get(0)).toEqual(44)
    })

    test("After removing tail, tail should equal to 420", () => {
        const linked_list = createLinkedList(69, 44, 420)
        linked_list.remove(69)
        expect(linked_list.get(0)).toEqual(44)
    })

    test("After removing at head when list length is 1, head and tail should be undefined", () => {
        const linked_list = createLinkedList(69)
        linked_list.removeAt(0)
        expect(linked_list.head).toEqual(undefined)
        expect(linked_list.tail).toEqual(undefined)
    })

    test("After removing at tail when list length is 2, head should equal tail", () => {
        const linked_list = createLinkedList(69, 420)
        linked_list.removeAt(linked_list.getLength() - 1)
        expect(linked_list.head).toEqual(linked_list.tail)
    })

    test("After removing tail when list length is 2, head should equal tail", () => {
        const linked_list = createLinkedList(69, 420)
        linked_list.remove(420)
        expect(linked_list.head).toEqual(linked_list.tail)
    })

    test("After removing head, head and tail should equal undefined", () => {
        const linked_list = createLinkedList(69)
        linked_list.remove(69)
        expect(linked_list.head).toEqual(undefined)
        expect(linked_list.tail).toEqual(undefined)
    })


})
