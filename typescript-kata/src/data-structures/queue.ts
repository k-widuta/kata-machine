class QNode<T> {
    val: T;
    next?: QNode<T>;

    constructor(val: T) {
        this.val = val;
    }
}

export class Queue<T> {
    length: number;
    head: QNode<T> | undefined;
    tail: QNode<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    peak(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        return this.head.val;
    }

    enqueue(val: T): void {
        let new_node = new QNode(val);
        if (!this.head || !this.tail) {
            this.head = this.tail = new_node;
            this.length++;
            return;
        }

        this.tail.next = new_node;
        this.tail = new_node;

        this.length++;
        return;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const head = this.head;
        this.head = this.head.next;
        if (this.length === 1) {
            this.tail = undefined;
        }
        this.length--;

        // free the memory
        head.next = undefined;

        return head.val;
    }
}
