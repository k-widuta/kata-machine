export class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(val: number): void {
        this.data[this.length] = val;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return undefined;
        }

        const result = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];

            return result;
        }

        const lastElement = this.data[this.length];
        this.data[0] = lastElement;
        this.heapifyDown(0);

        return result

    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const val = this.data[idx];
        const parentIdx = this.getParentIndex(idx);
        const parentVal = this.data[parentIdx];

        if (parentVal > val) {
            this.data[parentIdx] = val;
            this.data[idx] = parentVal;
            this.heapifyUp(parentIdx);
        }

        return
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const leftChildIndex = this.getLeftChildIndex(idx);
        const rightChildIndex = this.getRightChildIndex(idx);

        if (leftChildIndex >= this.length) {
            return;
        }

        const val = this.data[idx];
        const leftChildValue = this.data[leftChildIndex];
        const rightChildValue = this.data[rightChildIndex];

        if (leftChildValue > rightChildValue && val > rightChildValue) {
            this.data[rightChildIndex] = val;
            this.data[idx] = rightChildValue;
            this.heapifyDown(rightChildIndex);
        } else if (rightChildValue > leftChildValue && val > leftChildValue) {
            this.data[leftChildIndex] = val;
            this.data[idx] = leftChildValue;
            this.heapifyDown(leftChildIndex);
        }
    }

    private getParentIndex(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private getLeftChildIndex(idx: number): number {
        return idx * 2 + 1;
    }

    private getRightChildIndex(idx: number): number {
        return idx * 2 + 2;
    }
}
