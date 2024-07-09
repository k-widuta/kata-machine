class LNode<T> {
    val: T
    prev?: LNode<T>
    next?: LNode<T>

    constructor(val: T) {
        this.val = val
    }
}

export class LinkedList<T> {
    length: number
    head?: LNode<T>
    tail?: LNode<T>

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    getLength(): number {
        return this.length
    }

    prepend(val: T): void {
        const node = new LNode(val)
        if (!this.head) {
            this.head = this.tail = node
            this.length++
            return
        }

        node.next = this.head;
        this.head.prev = node
        this.head = node
        this.length++

        return
    }

    append(val: T):void {
        const node = new LNode(val)
        if (!this.head) {
            this.head = this.tail = node
            this.length++
            return
        }

        node.prev = this.tail
        this.tail!.next = node
        this.tail = node
        this.length++

        return
    }

    get(indx: number): T | undefined {
        if (!this.head || indx >= this.getLength()) {
            return undefined
        }

        let curr: LNode<T> | undefined = this.head
        for (let i = 0; i < indx; ++i) {
            if (curr) {
                curr = curr.next
            }
        }

        return curr ? curr.val : undefined
    }

    private getNode(indx: number): LNode<T> | undefined {
        if (!this.head || indx >= this.getLength()) {
            return undefined
        }

        let curr: LNode<T> | undefined = this.head
        for (let i = 0; i < indx; ++i) {
            if (curr) {
                curr = curr.next
            }
        }

        return curr
    }

    insertAt(val: T, indx: number): void {
        if (indx > this.getLength()) {
            return
        };

        if (indx === 0) {
            this.prepend(val)
        }

        if (indx === this.getLength()) {
            this.append(val)
        }


        const oldNode = this.getNode(indx);
        if (!oldNode || !oldNode.prev || !oldNode.next) {
            return
        }

        const newNode = new LNode(val);

        newNode.next = oldNode
        newNode.prev = oldNode.prev
        oldNode.prev.next = newNode
        oldNode.prev = newNode
        this.length++
    }


    removeAt(indx: number): T | undefined {
        if (indx >= this.getLength() || indx < 0 || !this.head || !this.tail) {
            return
        }

        const nodeToRemove = this.getNode(indx)
        if (!nodeToRemove) {
            return
        }

        if (this.getLength() === 1) {
            this.head = this.tail = undefined
            this.length--
            return nodeToRemove.val
        }

        if (indx === 0) {
            this.head = this.head.next
            this.head!.prev = undefined
            this.length--
            return nodeToRemove.val
        }

        if (indx === this.getLength() - 1) {
            this.tail = this.tail.prev
            this.tail!.next = undefined
            this.length--
            return nodeToRemove.val
        }

        const prevNode = nodeToRemove.prev
        const nextNode = nodeToRemove.next

        if (!prevNode || !nextNode) {
            return
        }

        prevNode.next = nextNode
        nextNode.prev = prevNode


        this.length--

        // free memory
        nodeToRemove.next = undefined
        nodeToRemove.prev = undefined

        return nodeToRemove.val
    }

    remove(item: T): T | undefined {
        let nodeToRemove = this.head
        let indx = 0;
        while (nodeToRemove) {
            if (nodeToRemove.val === item) {
                break
            }
            nodeToRemove = nodeToRemove.next
            indx++
        }
        if (!nodeToRemove || !this.head || !this.tail) {
            return undefined
        }


        if (this.getLength() === 1) {
            this.head = this.tail = undefined
            this.length--
            return nodeToRemove.val
        }

        if (indx === 0) {
            this.head = this.head.next
            this.head!.prev = undefined
            this.length--
            return nodeToRemove.val
        }

        if (indx === this.getLength() - 1) {
            this.tail = this.tail.prev
            this.tail!.next = undefined
            this.length--
            return nodeToRemove.val
        }

        const prevNode = nodeToRemove.prev
        const nextNode = nodeToRemove.next

        if (!prevNode || !nextNode) {
            return
        }

        prevNode.next = nextNode
        nextNode.prev = prevNode


        this.length--

        // Free memory
        nodeToRemove.next = undefined
        nodeToRemove.prev = undefined

        return nodeToRemove.val
    }
}
