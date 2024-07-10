import { BinaryNode, BinaryTree } from "./node";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  if (curr == undefined) {
    return path;
  }
  // Pre
  path.push(curr.val);

  // Recursive
  walk(curr.left, path);
  walk(curr.right, path);

  // Post
  return path;
}

export default function PreOrderTraversal(tree: BinaryTree<number>): number[] {
  if (!tree.root) {
    return [];
  }
  return walk(tree.root, []);
}
