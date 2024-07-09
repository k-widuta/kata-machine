import { describe, expect, test } from "vitest";
import { tree } from "./binary-tree";
import PreOrderTraversal from "src/trees/BTPreOrderTraversal";

describe("Binary Tree Pre Order Traversal test suite", () => {
    test("Should return path of the same order", () => {
        expect(PreOrderTraversal(tree)).toEqual([
            20,
            10,
            5,
            7,
            15,
            50,
            30,
            29,
            45,
            100,
        ]);
    })
})
