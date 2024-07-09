import { describe, expect, test } from "vitest";
import { tree } from "./binary-tree";
import PostOrderTraversal from "src/trees/postOrderTraversal";

describe("Binary Tree Pre Order Traversal test suite", () => {
    test("Should return path of the same order", () => {
        expect(PostOrderTraversal(tree)).toEqual([
            7,
            5,
            15,
            10,
            29,
            45,
            30,
            100,
            50,
            20,
        ]);
    })
})
