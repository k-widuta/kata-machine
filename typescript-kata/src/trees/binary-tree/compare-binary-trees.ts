import { BinaryNode } from "./node";

function compare(a: BinaryNode<number> | undefined, b:BinaryNode<number> | undefined): boolean {
    if (a === undefined && b === undefined) {
        return true
    }

    if (a === undefined || b === undefined) {
        return false
    }

    if (a.val !== b.val) {
        return false
    }

    return compare(a.left, b.left) && compare(a.right, b.right)
}
