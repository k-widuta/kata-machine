enum COLORS {
    BLACK,
    RED
}

export class RBNode<T> {
    val: T | null;
    left: RBNode<T | null>
    right: RBNode<T | null>
    color: COLORS;

    constructor(value: T | null = null) {
        this.val = value;
        const nilNode = new RBNode<null>();
        nilNode.color = COLORS.BLACK;
        this.left = this.right = nilNode
        this.color = COLORS.RED;
    }
}

//TODO:
//- add insertion
//- add insertion fixup
//- add deletion
//- add deletion fixup

export class RedBlackTree<T> {
    root: RBNode<T | null>;
    nil: RBNode<null>

    constructor() {
        const nilNode = new RBNode<null>();
        nilNode.color = COLORS.BLACK;

        this.root = nilNode;
        this.nil = nilNode;
    }

    leftRotate(value: T): void {
        const [curr, parent] = this.walk(value, this.root, this.nil);
        if (curr === this.nil || curr.val === null || curr.val === undefined) {
            return;
        }
        if (curr.right === this.nil) {
            return;
        }

        const temp = curr.right;
        curr.right = temp.left

        if (parent === this.nil || parent.val === null || parent.val === undefined) {
            this.root = temp;
        } else if (curr.val < parent.val) {
            parent.left = temp;
        } else {
            parent.right = temp;
        }

        temp.left = curr;
    }

    rightRotate(value: T): void {
        const [curr, parent] = this.walk(value, this.root, this.nil);
        if (curr === this.nil || curr.val === null || curr.val === undefined) {
            return;
        }
        if (curr.left === this.nil) {
            return;
        }

        const temp = curr.left;
        curr.left = temp.right

        if (parent === this.nil || parent.val === null || parent.val === undefined) {
            this.root = temp;
        } else if (curr.val < parent.val) {
            parent.left = temp;
        } else {
            parent.right = temp;
        }

        temp.right = curr;
    }

    walk(value: T, curr: RBNode<T | null>, parent: RBNode<T | null>): (RBNode<T | null>)[] {
        if (curr === this.nil || curr.val === null || curr.val === undefined) {
            return [this.nil, this.nil];
        }

        if (curr.val === value) {
            return [curr, parent]
        }

        if (value < curr.val) {
            return this.walk(value, curr.left, curr)
        }

        return this.walk(value, curr.right, curr)
    }
}
