import InOrderTraversal from "src/trees/inOrderTraversal";
import { describe, expect, test } from "vitest";
import { tree } from "./binary-tree";

describe("Binary Tree In Order Traversal test suite", () => {
    test("Should return path of the same order", () => {
        expect(InOrderTraversal(tree)).toEqual([
            5,
            7,
            10,
            15,
            20,
            29,
            30,
            45,
            50,
            100,
        ]);
    })
})
