import { BinaryNode, BinaryTree } from "./node";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // Pre
  //
  // Recursive
  walk(curr.left, path);
  path.push(curr.val);
  walk(curr.right, path);

  // Post
  return path;
}
export default function InOrderTraversal(tree: BinaryTree<number>): number[] {
  if (!tree.root) {
    return [];
  }
  return walk(tree.root, []);
}
