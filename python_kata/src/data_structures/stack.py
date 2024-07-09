from typing import Generic, TypeVar

T = TypeVar("T")

class SNode(Generic[T]):
    def __init__(self, val: T):
        self.val: T  = val
        self.prev: SNode[T] | None = None


class Stack(Generic[T]):
    head: SNode[T] | None
    length: int

    def __init__(self):
        self.head = None
        self.length = 0

    def peak(self) -> T | None:
        if not self.head:
            return None

        return self.head.val

    def push(self, item: T) -> None:
        node = SNode(item)
        if not self.head:
            self.head = node
            self.length += 1

            return None

        node.prev = self.head
        self.head = node

        self.length += 1

        return None

    def pop(self) -> T | None:
        if not self.head:
            return None

        node = self.head
        self.head = node.prev

        self.length -= 1

        # Free memory
        node.prev = None

        return node.val
