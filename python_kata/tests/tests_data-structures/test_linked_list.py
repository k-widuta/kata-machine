from data_structures.linked_list import LinkedList
from typing import TypeVar

T = TypeVar('T')

def createLinkedList[T](*args: T) ->  LinkedList[T]:
    linked_list = LinkedList()

    for arg in args:
        linked_list.append(arg)

    return linked_list

class TestLinkedList:

    def test_check_head_value(self):
        linked_list = createLinkedList(1,2,3)
        assert linked_list.head != None
        assert linked_list.head.val == 1

    def test_check_tail_value(self):
        linked_list = createLinkedList(1,2,3)
        assert linked_list.tail != None
        assert linked_list.tail.val == 3

    def test_check_linked_list_length(self):
        linked_list = createLinkedList(1,2,3)
        assert linked_list.get_length() == 3

    def test_prepend_to_empty_list(self):
        linked_list = LinkedList()
        linked_list.prepend(0)

        assert linked_list.get_length() == 1
        assert linked_list.head != None
        assert linked_list.tail != None

        assert linked_list.head.val == 0
        assert linked_list.tail.val == 0

    def test_preppend_to_list_with_one_node(self):
        linked_list = createLinkedList(0)
        linked_list.prepend(1)

        assert linked_list.head != None
        assert linked_list.head.val == 1
        assert linked_list.head.prev == None
        assert linked_list.head.next != None
        assert linked_list.head.next.val == 0

        assert linked_list.tail != None
        assert linked_list.tail.val == 0
        assert linked_list.tail.next == None
        assert linked_list.tail.prev != None
        assert linked_list.tail.prev.val == 1

    def test_prepend(self):
        linked_list = LinkedList()
        linked_list.prepend(0)
        linked_list.prepend(1)
        linked_list.prepend(2)

        assert linked_list.tail != None
        assert linked_list.tail.val == 0

        assert linked_list.tail.prev != None
        assert linked_list.tail.prev.val == 1

    def test_append(self):
        linked_list = createLinkedList(1,2,3,4)

        assert linked_list.tail != None
        assert linked_list.tail.val == 4

        assert linked_list.tail.prev != None
        assert linked_list.tail.prev.val == 3

    def test_get(self):
        linked_list = createLinkedList(1,2,3,4)

        val1 = linked_list.get(0)
        val2 = linked_list.get(1)
        val3 = linked_list.get(2)
        val4 = linked_list.get(3)

        assert val1 != None
        assert val1  == 1

        assert val2 != None
        assert val2  == 2

        assert val3 != None
        assert val3  == 3

        assert val4 != None
        assert val4  == 4



    def test_insert_at(self):
        linked_list = createLinkedList(4)

        linked_list.insert_at(69, 1)
        inserted_node = linked_list.get(1)

        assert inserted_node != None
        assert inserted_node == 69


    def test_remove_at(self):
        linked_list = createLinkedList(44, 4, 69, 420)

        linked_list.remove_at(2)
        new_node_at_place = linked_list.get(2)

        assert new_node_at_place != None
        assert new_node_at_place == 420


    def test_remove_at_head(self):
        linked_list = createLinkedList(69, 420)


        linked_list.remove_at(0)

        assert linked_list.head != None
        assert linked_list.head.val == 420

        assert linked_list.tail != None
        assert linked_list.tail.val == 420

    def test_remove_at_tail(self):
        linked_list = createLinkedList(69, 420)

        linked_list.remove_at(1)

        assert linked_list.tail != None
        assert linked_list.tail.val == 69

        assert linked_list.get_length() == 1

        assert linked_list.head != None
        assert linked_list.head.val == 69

    def test_remove_at_from_1_length_list(self):
        linked_list = createLinkedList(1)

        linked_list.remove_at(0)

        assert linked_list.head == None
        assert linked_list.tail == None
        assert linked_list.get_length() == 0

    def test_remove_from_list(self):
        linked_list = LinkedList()
        linked_list.append(69)
        linked_list.append(420)
        linked_list.append(44)
        linked_list.append(97)

        linked_list.remove(420)
        new_node_at_place = linked_list.get(1)

        assert new_node_at_place == 44

    def test_remove_from_1_length_list(self):
        linked_list = LinkedList()
        linked_list.append(69)

        linked_list.remove(69)
        assert linked_list.head == None
        assert linked_list.tail == None
        assert linked_list.get_length() == 0

    def test_remove_from_head(self):
        linked_list = LinkedList()
        linked_list.append(69)
        linked_list.append(420)


        linked_list.remove(69)

        assert linked_list.head != None
        assert linked_list.head.val == 420

        assert linked_list.tail != None
        assert linked_list.tail.val == 420

    def test_remove_from_tail(self):
        linked_list = LinkedList()
        linked_list.append(69)
        linked_list.append(420)

        linked_list.remove(420)

        assert linked_list.tail != None
        assert linked_list.tail.val == 69

        assert linked_list.get_length() == 1

        assert linked_list.head != None
        assert linked_list.head.val == 69
