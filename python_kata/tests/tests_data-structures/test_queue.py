from data_structures.queue import Queue
from typing import TypeVar

T = TypeVar("T")

def create_queue[T](*args: T) -> Queue[T]:
    queue = Queue()

    for arg in args:
        queue.enqueue(arg)

    return queue


class TestQueue:
    def test_peak_should_return_69(self):
        q = create_queue(69, 44, 420)
        
        assert q.peak() == 69

    def test_after_enqueueing_empty_queue_head_should_equal_tail(self):
        q = create_queue()
        q.enqueue(69)

        assert q.head == q.tail

    def test_deque_empty_queue_should_return_None(self):
        q = create_queue()

        assert q.deque() == None

    def test_deque_should_return_69(self):
        q = create_queue(69, 420)

        assert q.deque() == 69

    def test_length_of_queue_should_be_3(self):
        q = create_queue(4, 420, 69)

        assert q.length == 3

    def test_deque_should_reduce_length(self):
        q = create_queue(69, 420)
        q.deque()
        
        assert q.length == 1

    def test_deque_should_increase_length(self):
        q = create_queue(69, 420)
        q.enqueue(44)
        
        assert q.length == 3
