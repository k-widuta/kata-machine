import { DijkstraAdjList } from "src/graphs/dijkstra-adj-list";
import { list1 } from "src/graphs/graph";
import { describe, expect, test } from "vitest";

describe("Dijkstra Shortest Path test suite", function() {
    test("Dijsktra on adjacency list", function() {
        expect(DijkstraAdjList(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
    })
})
