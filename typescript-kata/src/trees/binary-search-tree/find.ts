import { BinarySearchNode, BinarySearchTree } from "./binary-search-tree";

function find(curr: BinarySearchNode<number> | null, needle: number): boolean {
    if (curr === null) {
        return false
    }
    if (curr.value === needle) {
        return true
    }

    if (curr.value < needle) {
        return find(curr.right, needle)
    }

    return find(curr.left, needle)



    
}

export function BSTFind(tree: BinarySearchTree<number>, needle: number):boolean {
    return find(tree.root, needle)
}
