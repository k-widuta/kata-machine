export class HashMap<V> {
    buckets: {key: string, value: V}[][]
    length: number

    constructor() {
        this.buckets = new Array(100);
        this.length = 0;
    }

    set(key: string, value: V): void {
        const hashKey = this.hash(key);
        this.length += 1;

        if (!this.buckets[hashKey]) {
            this.buckets[hashKey] = [{key: key, value: value}];

            return
        }
        this.buckets[hashKey].push({key: key, value: value});

        return
    }

    get(key: string): V | undefined {
        const hashKey = this.hash(key);

        const bucket = this.buckets[hashKey];
        if (!bucket) {
            return undefined;
        }

        for (let i = 0; i < bucket.length; ++i) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }

        return undefined;
    }

    delete(key: string): boolean {
        const hashKey = this.hash(key);

        let bucket = this.buckets[hashKey];
        if (!bucket) {
            return false;
        }

        for (let i = 0; i < bucket.length; ++i) {
            if (bucket[i].key === key) {
                bucket = bucket.slice(0, i).concat(bucket.slice(i + 1, bucket.length))
                this.buckets[hashKey] = bucket
                this.length -= 1;

                return true;
            }
        }

        return false;
    }

    has(key: string): boolean {
        const hashKey = this.hash(key);

        let bucket = this.buckets[hashKey];
        if (!bucket) {
            return false;
        }

        for (let i = 0; i < bucket.length; ++i) {
            if (bucket[i].key === key) {
                return true;
            }
        }

        return false;
    }

    private hash(key: string): number {
        let hash: number = 0;
        for (let i = 0; i < key.length; ++i) {
            hash += key[i].charCodeAt(0)
        }

        return hash % this.buckets.length
    }
}
