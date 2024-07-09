/*
This is simplified implementation of the ring bufer (aka. circular buffer).
If you want to create better implementation think about underlaying data
structure that can accept multiple types of values.
*/

export class RingBuffer {
    private head: number;
    private tail: number;
    private capacity: number;
    private length: number;
    private array: Uint8Array;

    constructor(capacity: number = 0) {
        this.capacity = capacity;
        this.head = this.tail = 0;
        this.length = 0
        this.array = new Uint8Array(this.capacity);
    }

    private copyArray(): void {
        const newArray = new Uint8Array(this.capacity * 2);

        let length = 0;
        for (let i = this.head; i < this.capacity; i++, length++){
            newArray[length] = this.array[i]
        }
        for (let k = 0; k < this.tail; ++k, ++length) {
            newArray[length] = this.array[k]
        }
        this.head = 0
        this.tail = length
        this.capacity *= 2
        this.length = length
        this.array = newArray

    }

    push(item: number): void {
        if (this.tail === this.head && this.length !== 0) {
            this.copyArray()
        }
        this.array[this.tail] = item
        this.length++

        this.tail = (this.tail + 1) % this.capacity

    }

    pop(): number | undefined {
        if (this.length === 0) {
            return undefined
        }

        let item;
        if (this.tail === 0) {
            this.tail = this.capacity - 1
            item = this.array[this.tail]
        } else {
            this.tail--
            item = this.array[this.tail]
        }
        this.length--

        return item
    }

    unshift(item: number): void {
        if (this.length === 0) {
            this.push(item)
            return
        }

        if (this.head === this.tail && this.length !== 0) {
            this.copyArray()
        }
        
        if (this.head - 1 < 0) {
            this.head = this.capacity - 1
        } else {
            this.head--
        }
        this.array[this.head] = item
        this.length++
        return
    }

    shift(): number | undefined {
        if (this.length === 0) {
            return undefined
        }
        const item = this.array[this.head]
        this.head++
        if (this.head >= this.capacity) {
            this.head = this.head % this.capacity
        }
        this.length--

        return item
    }

    get(indx: number): number | undefined {
        if (this.length === 0) {
            return undefined
        }
        if (indx >= this.length || indx < -this.length) {
            return undefined
        }
        if (indx < 0) {
            if (this.tail + indx >= 0) {
                return this.array[this.tail + indx]
            } else {
                const i = this.capacity + (this.tail + indx)
                return this.array[i]
            }
        }
        const trueIndex = (this.head + indx) % this.capacity
        if (trueIndex < this.head && trueIndex >= this.tail) {
            return undefined
        }

        return this.array[trueIndex]
    }

    getLength(): number {
        return this.length
    }

    getCapacity(): number {
        return this.capacity
    }

    getHead(): number {
        return this.head
    }

    getTail(): number {
        return this.tail
    }
}
