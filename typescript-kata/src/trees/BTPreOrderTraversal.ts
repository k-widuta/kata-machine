import { BinaryNode } from "./BTnode";

function walk(curr: BinaryNode<number> | undefined, path: number[]): number[] {
    if (curr == undefined) {
        return path
    }
    // Pre
    path.push(curr.val)

    // Recursive
    walk(curr.left, path)
    walk(curr.right, path)

    // Post
    return path

}

export default function PreOrderTraversal(head: BinaryNode<number>): number[] {
    return walk(head, [])
}
