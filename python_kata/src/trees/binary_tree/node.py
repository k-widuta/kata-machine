from __future__ import annotations
from typing import TypeVar


T = TypeVar("T")

class BinaryNode[T]:
    val: T
    left: BinaryNode[T] | None
    right: BinaryNode[T] | None

    def __init__(self, value: T):
        self.val = value
        self.left = self.right = None
