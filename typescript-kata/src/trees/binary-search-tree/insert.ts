import { BinarySearchNode, BinarySearchTree } from "./binary-search-tree";

function walk(curr: BinarySearchNode<number>, val: number): void {
    if (curr.value < val) {
        if (curr.right === null) {
            const node = new BinarySearchNode(val)
            curr.right = node
            return
        }

        walk(curr.right, val)
    }
    
    if (curr.left === null) {
        const node = new BinarySearchNode(val)
        curr.left = node
        return
    }

    walk(curr.left, val)

}

export function Insert(tree: BinarySearchTree<number>, val: number): void {
    walk(tree.root, val)

}
