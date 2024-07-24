export type LruNode<T> = {
    val: T;
    prev?: LruNode<T>;
    next?: LruNode<T>;
}

export interface ILRU<K,V> {
    update(key: K, value: V): void;
    get(key: K): V | undefined
}

function createLruNode<V>(val: V): LruNode<V> {
    return {val: val}
}

export class LRU<K,V> {
    private length: number;
    private head: LruNode<V> | undefined;
    private tail: LruNode<V> | undefined;
    
    private lookup: Map<K, LruNode<V>>;
    private reverseLookup: Map<LruNode<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, LruNode<V>>();
        this.reverseLookup = new Map<LruNode<V>, K>();
    }

    update(key: K, value: V): void {
        // Does the value exist
        let node = this.lookup.get(key);
        if (!node) {
            // If it doesn't we need to insert it at the front
            node = createLruNode(value);

            // - check the capacity - if it's full, then evict the last element
            this.length++;
            this.prepend(node);
            this.trimCache();

            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        } else {
            // If it dooes - we need to update it to the front.
            this.detach(node);
            this.prepend(node);
            // In this case, we will update the value also. But we can have a rule that we only update position - not the value.
            node.val = value
        }
    }

    get(key: K): V | undefined {
        // Check the cache for existance
        const node = this.lookup.get(key);
        if (!node) {
            return undefined;
        }
        // Update the value that we found and move it to the front
        this.detach(node);
        this.prepend(node);

        // Return the value that we found or undefined
        return node.val;
    }

    private detach(node: LruNode<V>): void {
        if(node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev
        }

        if (this.head === node) {
            this.head = this.head.next;
        }
        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        // Clean memory
        node.prev = undefined;
        node.next = undefined;
    }

    private prepend(node: LruNode<V>): void {
        if (!this.head) {
            this.head = this.tail = node;
            return
        }

        this.head.prev = node;
        node.next = this.head;
        
        this.head = node;
    }

    private trimCache(): void {
        if (this.length <= this.capacity || !this.tail) {
            return;
        }

        const tail = this.tail;
        this.detach(this.tail);

        const key = this.reverseLookup.get(tail) as K;

        this.lookup.delete(key);
        this.reverseLookup.delete(tail);

        this.length--;
    }
}
