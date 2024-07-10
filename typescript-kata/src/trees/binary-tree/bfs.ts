import { Queue } from "src/data-structures/queue";
import { BinaryNode, BinaryTree } from "./node";

export function BreadthFirstSearch(
  tree: BinaryTree<number>,
  needle: number,
): boolean {
  if (!tree.root) {
    return false;
  }
  let queue = new Queue(); // In the interview we can use [] as queue
  queue.enqueue(tree.root);
  while (queue.length) {
    const node = queue.deque() as BinaryNode<number>;
    if (node.val === needle) {
      return true;
    }
    if (node.right) {
      queue.enqueue(node.right);
    }

    if (node.left) {
      queue.enqueue(node.left);
    }
  }

  return false;
}
