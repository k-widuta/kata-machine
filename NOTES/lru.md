## Least Recently Used
- is using `doubly linked list` and `hash map`
- we store `key` and `node` as a value in `hash map` so we do not have to traverse `linked list`
- we have second `hash map` to store `node` as a `key` and `key to the previous hashmap` as a `value`
- running time is `O(1)`
