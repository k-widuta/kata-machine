import { BFS } from "src/graphs/bfs-on-adj-matrix";
import { matrix1 } from "src/graphs/graph";
import { describe, expect, test } from "vitest";

describe("Adjacenecy Matrix Graph test suite", function () {
    test("BFS", function() {
        expect(BFS(matrix1, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6,
    ]);

    expect(BFS(matrix1, 6, 0)).toEqual(null);
    })
})
