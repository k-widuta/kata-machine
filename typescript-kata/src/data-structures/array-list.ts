/*
Array List have under the hood fixed array and they grow when needed. We track 
the length and capacity of an Array List - if they are the same, we need to copy
array into the bigger array.

This implementation is based on Uint8Array and has only chosen properties. 
To add string we will need to use Encoder (UTF-8)
*/

export class ArrayList {
    private array: Uint8Array
    private length: number
    private capacity: number

    constructor(capacity: number = 0) {
        // Default capacity will be 5
        // this.capacity = 5
        this.capacity = capacity
        this.array = new Uint8Array(this.capacity)
        this.length = 0
    }

    private copyArray() {
        const currentArray = this.array
        this.capacity *= 2
        this.array = new Uint8Array(this.capacity)
        for (let i = 0; i < this.length; ++i) {
            this.array[i] = currentArray[i]
        }
    }

    push(item: number) {
        if (this.length === this.capacity) {
            this.copyArray()
        }

        this.array[this.length] = item
        this.length++
    }

    pop(): number | undefined{
        if (this.length === 0) {
            return undefined
        }
        const item = this.array[this.length - 1]
        this.length--

        return item
    }

    get(indx: number): number | undefined {
        if (indx >= this.length || indx < -this.length) {
            return undefined
        }

        if (indx < 0) {
            return this.array[this.length + indx]
        }

        return this.array[indx]
    }

    getCapacity(): number {
        return this.capacity
    }

    getLength(): number {
        return this.length
    }

}
