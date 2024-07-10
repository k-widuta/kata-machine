from trees.binary_tree.node import BinaryTree
from data_structures.queue import Queue

def tree_depth(tree: BinaryTree[int]) -> int:
    if not tree.root:
        return -1

    maxDepth = 0
    cache = {}
    q = Queue()

    q.enqueue(tree.root)
    cache[tree.root, 0]

    while q.length:
        node = q.deque()
        if not node:
            continue

        depth = cache[node]
        maxDepth = depth if depth > maxDepth else maxDepth
        
        if node.left:
            q.enqueue(node.left)
            cache[node.left] = depth + 1
        if node.right:
            q.enqueue(node.right)
            cache[node.right] = depth + 1

    return maxDepth


