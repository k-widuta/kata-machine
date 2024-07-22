export class BinarySearchNode<T> {
    value: T
    left: BinarySearchNode<T> | null
    right: BinarySearchNode<T> | null

    constructor(val: T) {
        this.value = val
        this.left = this.right = null
    }
}

export class BinarySearchTree<T> {
    root: BinarySearchNode<T>

    constructor(root: BinarySearchNode<T>) {
        this.root = root
    }
}

export function CreateBinaryTree() {
    
}
