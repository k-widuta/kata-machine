class SNode<T> {
    val: T;
    prev: SNode<T> | undefined;

    constructor(val: T) {
        this.val = val;
        this.prev = undefined;
    }
}

export class Stack<T> {
    head: SNode<T> | undefined;
    length: number;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    peak(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        return this.head.val;
    }

    push(item: T): void {
        const node = new SNode(item);

        if (!this.head) {
            this.head = node;
            this.length++;

            return;
        }

        node.prev = this.head;
        this.head = node;
        this.length++

        return;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const node = this.head;
        this.head = node.prev;

        this.length--;

        // Free the memory
        node.prev = undefined;

        return node.val;
    }
}
