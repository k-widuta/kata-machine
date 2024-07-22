import { BinarySearchNode, BinarySearchTree } from "./binary-search-tree";

function findNodeAndParent(curr: BinarySearchNode<number> | null,parent: BinarySearchNode<number>, needle: number): BinarySearchNode<number>[] | null[] {
    if (curr === null) {
        return [ null, null ]
    }

    if (curr.value === needle) {
        return [curr, parent]
    }

    if (curr.value < needle) {
        return findNodeAndParent(curr.right,curr, needle, )
    }

    return findNodeAndParent(curr.left,curr, needle)

}

function findSmallestOnLargeSide(curr: BinarySearchNode<number>, parent: BinarySearchNode<number>): BinarySearchNode<number> {
    if (curr.left === null) {
        if (curr.right === null) {
            parent.left = null
            return curr
        }
        parent.left = curr.right
        return curr
    }
    return findSmallestOnLargeSide(curr.left, curr)

}

function findLargestOnSmallSide(curr: BinarySearchNode<number>, parent: BinarySearchNode<number>): BinarySearchNode<number> {
    if (curr.right === null) {
        if (curr.left === null) {
            parent.right = null
            return curr
        }
        parent.right = curr.left
        return curr
    }
    return findLargestOnSmallSide(curr.right, curr)
}

function deleteWithOneChild(curr: BinarySearchNode<number>, parent: BinarySearchNode<number>):BinarySearchNode<number> {
    if (curr.left === null) {
        if (parent.value < curr.value) {
            parent.right = curr.right
            return curr
        }
        parent.left = curr.right
        return curr
    }
    if (parent.value < curr.value) {
        parent.right = curr.left
        return curr
    }
    parent.left = curr.left
    return curr
}

export function Delete(tree: BinarySearchTree<number>, needle: number): BinarySearchNode<number> | null {
    if (tree.root.value === needle) {
        const newRoot = findLargestOnSmallSide(tree.root.left as BinarySearchNode<number>, tree.root)
        newRoot.left = tree.root.left
        newRoot.right = tree.root.right
        return tree.root
    }
    const [ nodeToDelete, parentOfNodeToDelete] = findNodeAndParent(tree.root, tree.root, needle)

    if (nodeToDelete === null || parentOfNodeToDelete === null) {
        return null
    }

    if (nodeToDelete.right === null && nodeToDelete.left === null) {
        if (parentOfNodeToDelete.value < nodeToDelete.value) {
            parentOfNodeToDelete.right === null
        }
        parentOfNodeToDelete.left === null
        return nodeToDelete
    }

    if (nodeToDelete.left === null || nodeToDelete.right === null) {
        return deleteWithOneChild(nodeToDelete, parentOfNodeToDelete)
    }

    const nodeToReplace = findSmallestOnLargeSide(nodeToDelete.right, nodeToDelete)
    // We can choose how we want to shape the tree - to make it more complete
    // const nodeToReplace = findLargestOnSmallSide(nodeToDelete.right, nodeToDelete)

    if (parentOfNodeToDelete.value < nodeToDelete.value) {
        parentOfNodeToDelete.right === nodeToReplace
    }
    parentOfNodeToDelete.left === nodeToReplace

    return nodeToDelete
}
