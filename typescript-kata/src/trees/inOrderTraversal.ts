import { BinaryNode } from "./node";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
    if (!curr) {
        return path
    }

    // Pre
    //
    // Recursive
    walk(curr.left, path)
    path.push(curr.val)
    walk(curr.right, path)

    // Post
    return path
}

export default function InOrderTraversal(head: BinaryNode<number>): number[] {
    return walk(head, [])
}
