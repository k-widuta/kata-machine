export class AVLNode<T> {
    val: T;
    height: number;
    left: AVLNode<T> | null;
    right: AVLNode<T> | null;

    constructor(value: T) {
        this.val = value;
        this.height = 1;
        this.left = this.right = null
    }
}

export class AVLTree<T> {
    root: AVLNode<T> | null

    constructor() {
        this.root = null;
    }

    insert(value: T): void {
        const node = new AVLNode(value);
        if (this.root === null) {
            this.root = node;
            return
        }

        this.walkTree(node, this.root, null);
        return;
    }

    delete(value: T): T | undefined {
        if (!this.root) {
            return undefined;
        }
        if (value === this.root.val && !this.root.left && !this.root.right) {
            // const node = this.root;
            this.root = null;

            return value;
        }

        const node = this.find(value, this.root);

        this.walkToDelete(value, this.root, null);

        return node;

    }

    private find(value: T, curr: AVLNode<T> | null): T | undefined {
        if (!curr) {
            return undefined;
        }

        if (curr.val === value) {
            return curr.val;
        }

        if (value < curr.val) {
            return this.find(value, curr.left);
        }

        return this.find(value, curr.right);
    }

    private findTheSmallestOnLargerSideAndReplace(curr: AVLNode<T>, parent: AVLNode<T> | null, nodeToDelete: AVLNode<T>, nodeToDeleteParent: AVLNode<T> | null): void {
        if (!curr.left) {
            return
        }
        const child = curr.left;
        if (child.left === null) {
            if (child.right !== null) {
                curr.left = child.right;
            } else {
                curr.left = null;
            }
            if ( !nodeToDeleteParent ) {
                this.root = curr
            } else {
                if (nodeToDelete.val < nodeToDeleteParent.val) {
                    nodeToDeleteParent.left = curr;
                } else {
                    nodeToDeleteParent.right = curr
                }
            }
            child.left = nodeToDelete.left;
            child.right = nodeToDelete.right;


            child.height = 1 + Math.max(this.getHeight(child.left), this.getHeight(child.right))

            this.balanceTree(curr, parent)

            return;
        }

        this.findTheSmallestOnLargerSideAndReplace(curr.left, curr, nodeToDelete, nodeToDeleteParent);

        return;
    }

    private findTheLargestOnSmallerSideAndReplace(curr: AVLNode<T>, parent: AVLNode<T> | null, nodeToDelete: AVLNode<T>, nodeToDeleteParent: AVLNode<T> | null): void {
        if (!curr.right) {
            return
        }
        const child = curr.right;
        if (child.right === null) {
            if (child.left !== null) {
                curr.right = child.left;
            } else {
                curr.right = null;
            }
            if ( !nodeToDeleteParent ) {
                this.root = curr
            } else {
                if (nodeToDelete.val < nodeToDeleteParent.val) {
                    nodeToDeleteParent.left = curr;
                } else {
                    nodeToDeleteParent.right = curr
                }
            }
            child.left = nodeToDelete.left;
            child.right = nodeToDelete.right;


            child.height = 1 + Math.max(this.getHeight(child.left), this.getHeight(child.right))

            this.balanceTree(curr, parent)

            return;
        }

        this.findTheLargestOnSmallerSideAndReplace(curr.right, curr, nodeToDelete, nodeToDeleteParent);

        return;
    }

    private walkToDelete(value: T, curr: AVLNode<T> | null, parent: AVLNode<T> | null): undefined | T{
        if (!curr) {
            return;
        }

        if (curr.val === value) {

            if (curr.left === null && curr.right === null) {
                if (!parent) {
                    return;
                }
                if (curr.val < parent.val) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }

            } else {
                if (this.getBalanceFactor(curr) > 0) {
                    this.findTheSmallestOnLargerSideAndReplace(curr.right as AVLNode<T>, parent, curr, parent)
                } else {
                    this.findTheLargestOnSmallerSideAndReplace(curr.left as AVLNode<T>, parent, curr, parent);
                }
            }
        }

        if (value < curr.val) {
            this.walkToDelete(value, curr.left, curr);
        }

        this.walkToDelete(value, curr.right, curr);
        this.balanceTree(curr, parent);

        return;
    }


    private walkTree(node: AVLNode<T>, curr: AVLNode<T>, parent: AVLNode<T> | null): void {
        if (node.val < curr.val) {
            if (!curr.left) {
                curr.left = node;
            } else {
                this.walkTree(node, curr.left, curr);
            }
        }
        if (node.val > curr.val) {
            if (!curr.right) {
                curr.right = node;
            } else {
                this.walkTree(node, curr.right, curr);
            }
        }


        curr.height = 1 + Math.max(this.getHeight(curr.left), this.getHeight(curr.right))

        this.balanceTree(curr, parent);

        return;
    }

    private balanceTree(curr: AVLNode<T>, parent: AVLNode<T> | null): void {
        const balance = this.getBalanceFactor(curr)

        if (balance < -1) {
            // LR rotation
            if (this.getBalanceFactor(curr.left) > 0) {
                this.RRRotate(curr.left, curr);
                this.LLRotate(curr, parent);
                return;
            }
            this.LLRotate(curr, parent);
            return;
        }

        if (balance > 1) {
            // RL rotation 
            if (this.getBalanceFactor(curr.right) < 0) {
                this.LLRotate(curr.right, curr);
                this.RRRotate(curr, parent);
                return;
            }
            this.RRRotate(curr, parent);
            return;
        }

        return;
    }

    RRRotate(node: AVLNode<T> | null, parent: AVLNode<T> | null): void {
        if (!node || node.right === null) {
            return;
        }
        const rightChild = node.right;
        if (rightChild.left !== null) {
            const temp = rightChild.left;
            rightChild.left = node;
            node.right = temp;
        } else {
            rightChild.left = node;
            node.right = null;
        }

        if (parent !== null) {
            if (node.val < parent.val) {
                parent.left = rightChild
            } else {
                parent.right = rightChild;
            }
        } else {
            this.root = rightChild;
        }

        node.height = 1 + Math.max(this.getHeight(node.right), this.getHeight(node.left));
        rightChild.height = 1 + Math.max(this.getHeight(rightChild.right), this.getHeight(rightChild.left));

        return
    }

    LLRotate(node: AVLNode<T> | null, parent: AVLNode<T> | null): void {
        if (!node || node.left === null) {
            return;
        }
        const leftChild = node.left;
        if (leftChild.right !== null) {
            const temp = leftChild.right;
            leftChild.right = node;
            node.left = temp;
        } else {
            leftChild.right = node;
            node.left = null;
        }

        if (parent !== null) {
            if (node.val < parent.val) {
                parent.left = leftChild
            } else {
                parent.right = leftChild;
            }
        } else {
            this.root = leftChild;
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        leftChild.height = 1 + Math.max(this.getHeight(leftChild.left), this.getHeight(leftChild.right));

        return
    }

    private getHeight(node: AVLNode<T> | null): number {
        if (node === null) {
            return 0
        }

        return node.height
    }

    getBalanceFactor(node: AVLNode<T> | null | undefined): number {
        if (!node) {
            return 0
        }

        let rightFactor = 0;
        let leftFactor = 0;

        if (node.right !== null) {
            rightFactor = node.right.height;
        }

        if (node.left !== null) {
            leftFactor = node.left.height;
        }

        return rightFactor - leftFactor
    }
}


