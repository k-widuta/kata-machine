from typing import List
from trees.binary_tree.node import BinaryNode


def walk(curr: BinaryNode[int] | None, path: List[int]) -> List[int]:
    if not curr:
        return path

    # Pre

    # Recursive
    walk(curr.left, path)
    walk(curr.right, path)

    # Post
    path.append(curr.val)
    return path

def post_order_traversal(head: BinaryNode[int]) -> List[int]:
    return walk(head, [])
