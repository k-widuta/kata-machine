import { DFS } from "src/graphs/dfs-on-adj-list";
import { list2 } from "src/graphs/graph";
import { describe, expect, test } from "vitest";

describe("Adjacency List Graph test suite", function() {
    test("DFS on graph", function() {
        expect(DFS(list2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(DFS(list2, 6, 0)).toEqual(null);
    })
})
