## Maps
> its too easy to think of {} or new Map() and just assume we know them. The reality is that we know how to use them, most of the time we don't actually know they work.
(we wont demistify {}, those are different data structures than a hash map)

- load factor: The amount of data points vs the amount of storage (data.len / storage.capacity) - best one is `0.7`
- key: a value that is hashable and is used to look up data. The hash has to be consistent.
- value: a value that is associated with a key
- collision: when 2 keys map to the same cell.
