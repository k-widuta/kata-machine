from typing import List
from trees.binary_tree.node import BinaryNode


def walk(curr: BinaryNode[int] | None, path: List[int]) -> List[int]:
    if not curr:
        return path

    # Pre

    # Recursive
    walk(curr.left, path)
    path.append(curr.val)
    walk(curr.right, path)

    # Post
    return path

def in_order_traversal(head: BinaryNode[int]) -> List[int]:
    return walk(head, [])
