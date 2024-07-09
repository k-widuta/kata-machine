import { BinaryNode } from "./node";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
    if (!curr) {
        return path
    }

    // Pre
    //
    // Recursive
    walk(curr.left, path)
    walk(curr.right, path)

    // Post
    path.push(curr.val)
    return path
}

export default function PostOrderTraversal(head: BinaryNode<number>): number[] {
    return walk(head, [])
}
