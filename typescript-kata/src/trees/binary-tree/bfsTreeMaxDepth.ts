import { BinaryTree, BinaryNode } from "./node";
import { Queue } from "../../data-structures/queue";

export function TreeMaxDepth(tree: BinaryTree<number>): number {
  if (!tree.root) {
    return -1;
  }
  const cache = new Map();
  let maxDepth = 0;
  const q = new Queue<BinaryNode<number>>();

  q.enqueue(tree.root);
  cache.set(tree.root, 0);
  while (q.length) {
    const node: BinaryNode<number> | undefined = q.deque();
    if (!node) {
      continue;
    }

    const depth = cache.get(node);
    maxDepth = Math.max(maxDepth, depth);

    if (node.left) {
      q.enqueue(node.left);
      cache.set(node.left, depth + 1);
    }

    if (node.right) {
      q.enqueue(node.right);
      cache.set(node.right, depth + 1);
    }
  }

  return maxDepth;
}
