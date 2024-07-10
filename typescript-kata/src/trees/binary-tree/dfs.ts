import { BinaryNode } from "./node";

function walk(curr: BinaryNode<number> | undefined, path: number[]) {
    if (curr === undefined) {
        return path
    }
    // pre
    // recursive
    walk(curr.left, path)
    path.push(curr.val)
    walk(curr.right, path)
    // post

    return path
}

export function dfs(root: BinaryNode<number>): number[] {
    
    return walk(root, [])
}
