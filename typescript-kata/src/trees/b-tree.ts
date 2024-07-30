class BNode {
    values: number[];
    children: BNode[];

    constructor(order: number = 5, value: number) {
        this.values = new Array(order - 1).fill(null);
        this.children = new Array(order).fill(null);

        this.values[0] = value;
    }
}

class BTree {
    private order: number;
    root: BNode | undefined;

    constructor(order: number = 5) {
        this.order = order;
        this.root = undefined;
    }

    private getChildMax() {
        return this.order;
    }

    private getKeyMax() {
        return this.order - 1;
    }

    private getKeyMin() {
        return Math.ceil(this.order / 2) - 1;
    }

    private getChildMin() {
        return this.getKeyMin() + 1;
    }
}
