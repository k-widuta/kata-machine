import { describe, expect, test } from "vitest";
import { tree } from "./binaryTree";
import { TreeMaxDepth } from "src/trees/binary-tree/bfsTreeMaxDepth";

describe("Find the depth of the tree using bfs", () => {
  test("Depth of the tree should be 3", () => {
    expect(TreeMaxDepth(tree)).toEqual(3);
  });
});
