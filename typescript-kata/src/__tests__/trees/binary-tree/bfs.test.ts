import { BreadthFirstSearch } from "src/trees/binary-tree/bfs";
import { describe, expect, test } from "vitest";
import { tree } from "./binaryTree";

describe("Tree Breadth First Search test suite", () => {
  test("Number should be in the tree", () => {
    expect(BreadthFirstSearch(tree, 29)).toEqual(true);
  });

  test("Number should not be in the tree", () => {
    expect(BreadthFirstSearch(tree, 69)).toEqual(false);
  });
});
