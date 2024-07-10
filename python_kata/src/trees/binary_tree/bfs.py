from data_structures.queue import Queue
from trees.binary_tree.node import BinaryNode


def breadth_first_search(root: BinaryNode[int], needle: int) -> bool:
    q = Queue() # In the interview use []
    q.enqueue(root)

    while q.length:
        node = q.deque()
        if not node:
            continue

        if node.val == needle:
            return True

        q.enqueue(node.left)
        q.enqueue(node.right)


    return False
