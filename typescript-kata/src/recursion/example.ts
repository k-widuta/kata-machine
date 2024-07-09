/*
- always know base case - it stops recursion. But all stoping things there.
Do not think about it doing recursive cases.
- recursive case
    1. Pre recursion - do something before recursion
    2. Recursion - do something during recursion
    3. Post recursion - do somethin after recursion
*/
// Example function which should sum the numbers
function sum(n: number): number {
    // Base case
    if (n === 1) {
        return 1
    }

    //pre
    console.log("pre recursion")
    //recursive
    let result = n + sum(n - 1)
    //post
    console.log("post recursion")
    return result
}
// You can return from recrusion data or mutate external data - it's only
// your preferance.
//
// Recursion that mutates passed data (passed by referance)
type MYNode<T> = {
    val: T
    left: MYNode<T> | null
    right: MYNode<T> | null
}
function recursionMutatingData(curr: MYNode<number> | null, path: number[]): void {
    // Base
    if (!curr) {
        return
    }

    // Pre 
    path.push(curr.val)

    // Recurse
    recursionMutatingData(curr.left, path)
    recursionMutatingData(curr.right, path)

    //Post
}
function main(head: MYNode<number>) {
    const path: number[] = [];
    recursionMutatingData(head, path)

    return path
}

// Recursion that returns data
function recursionThatReturnsData(curr: MYNode<number> | null, path: number[]): number[] {
    // Base
    if (!curr) {
        return path
    }

    // Pre 
    path.push(curr.val)

    // Recurse
    recursionMutatingData(curr.left, path)
    recursionMutatingData(curr.right, path)

    //Post
    return path
}
function main2(head: MYNode<number>) {
    return recursionThatReturnsData(head, [])
}
