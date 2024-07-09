from typing import Generic, TypeVar

T = TypeVar("T")

class Node(Generic[T]):
    def __init__(self, val=None):
        self.val: T | None = val
        self.next: Node[T] | None = None
        self.prev: Node[T] | None = None 


class LinkedList(Generic[T]):
    def __init__(self):
        self.head: Node[T] | None = None 
        self.tail: Node[T] | None = None
        self.length: int = 0

    def get_length(self) -> int:
        return self.length

    def prepend(self, data) -> None:
        new_node = Node(data)

        if not self.head:
            self.head = self.tail = new_node
            self.length += 1
            return

        new_node.next = self.head
        self.head.prev = new_node

        self.head = new_node
        self.length += 1
        return

    def append(self, data) -> None:
        new_node = Node(data)
        if not self.head or not self.tail:
            self.head = self.tail = new_node
            self.length += 1
            return

        self.tail.next = new_node
        new_node.prev = self.tail
        self.tail = new_node

        self.length += 1
        return

    def get(self, indx: int) -> None | T:
        if indx >= self.get_length():
            return

        curr = self.head 
        for _ in range(0, indx, 1):
            if curr:
                curr = curr.next
        if not curr:
            return
        return curr.val

    def __getNode(self, indx: int) -> None | Node[T]:
        if indx >= self.get_length():
            return

        curr = self.head 
        for _ in range(0, indx, 1):
            if curr:
                curr = curr.next
        if not curr:
            return
        return curr

    def insert_at(self, data,  indx: int) -> None:
        if indx == 0:
            return self.prepend(data)

        if indx == self.get_length():
            return self.append(data)

        curr = self.__getNode(indx)

        if not curr or not curr.prev or not curr.next:
            return

        new_node = Node(data)

        new_node.next = curr
        new_node.prev = curr.prev

        curr.prev.next = new_node
        curr.prev = new_node

        self.length += 1

    def remove_at(self, indx: int) -> T | None :
        curr = self.__getNode(indx)
        if not curr:
            return None
        if self.get_length() == 1:
            self.head = None
            self.tail = None
            self.length = 0
            return curr.val 

        if indx == 0:
            if self.head != None and self.head.next != None:
                new_head = self.head.next
                new_head.prev = None
                self.head = new_head

                self.length -= 1
                return curr.val
        if indx == self.get_length() - 1:
            if self.tail != None and self.tail.prev != None:
                new_tail = self.tail.prev
                new_tail.next = None
                self.tail = new_tail

                self.length -= 1
                return


        if not curr or not curr.prev or not curr.next:
            return

        curr.prev.next = curr.next
        curr.next.prev = curr.prev

        # Free memory
        curr.next = None
        curr.prev = None

        return curr.val

    def remove(self, data):
        if not self.head:
            return

        curr = self.head
        while curr:
            if curr.val == data:
                break
            curr = curr.next

        if curr == None:
            return

        if self.length == 1:
            self.head = None
            self.tail = None
            self.length = 0

        if curr == self.head:
            if not curr.next:
                return
            curr.next.prev = None
            self.head = curr.next
            self.length -= 1
            return

        if curr == self.tail:
            if not curr.prev:
                return
            curr.prev.next = None
            self.tail = curr.prev
            self.length -= 1
            return


        if not curr.next or not curr.prev:
            return

        curr.prev.next = curr.next
        curr.next.prev = curr.prev

        # Free memory
        curr.next = None
        curr.prev = None

        return curr.val
