## General Notes
> Notes specific to the language.

## Array vs Slice in Go
In empty array we can access index like this:
```go
arr := [3]int{}
// It will work
arr[0] = 69
```
But in slices it's impossible:
```go
slice := []int{}
// It will throw error
slice[0] = 69
```

## Javascript: cannot use negative indexes in array
> Remember that we cannot use negative indexes in arrays. You implemented it!
- we can use `arr.at(-1)` to use negative indexes
