from typing import Generic, TypeVar

T = TypeVar("T")

class QNode(Generic[T]):
    def __init__(self, val: T):
        self.val: T = val
        self.next: QNode[T] | None = None


class Queue(Generic[T]):
    head: QNode[T] | None
    tail: QNode[T] | None
    length: int
    def __init__(self):
        self.head = self.tail = None
        self.length = 0

    def get_length(self) -> int:
        return self.length

    def peak(self) -> T | None:
        if not self.head:
            return None
        return self.head.val

    def enqueue(self, val: T) -> None:
        node_to_enqueue = QNode(val)
        if not self.head or not self.tail:
            self.head = self.tail = node_to_enqueue
            self.length += 1

            return None

        self.tail.next = node_to_enqueue
        self.tail = node_to_enqueue
        self.length += 1

        return None

    def deque(self) -> T | None:
        if not self.head:
            return None

        node_to_deque = self.head

        if self.length == 1:
            self.head = self.tail = None
            self.length -= 1

            # Free the memory
            node_to_deque.next = None

            return node_to_deque.val

        self.head = node_to_deque.next
        self.length -= 1

        # Free the memory
        node_to_deque.next = None

        return node_to_deque.val
