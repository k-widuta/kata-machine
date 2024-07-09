from data_structures.stack import Stack
from typing import TypeVar

T = TypeVar("T")

def create_stack[T](*args: T) -> Stack[T]:
    stack = Stack()

    for arg in args:
        stack.push(arg)

    return stack

class TestStackSuite:
    def test_stack_push(self):
        stack = create_stack(69, 420)

        assert stack.peak() == 420

    def test_stack_pop(self):
        stack = create_stack(420, 69)

        assert stack.pop() == 69

    def test_stack_pop_from_empty_stack_should_return_None(self):
        stack = create_stack()

        assert stack.pop() == None

    def test_stack_pop_from_empty_stack_should_stop_at_zero_length(self):
        stack = create_stack()
        stack.pop()
        stack.pop()

        assert stack.length == 0
