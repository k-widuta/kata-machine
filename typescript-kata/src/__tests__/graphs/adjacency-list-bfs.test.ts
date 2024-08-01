import { BFS, graph} from "src/graphs/bfs-on-adj-list";
import { describe, expect, test } from "vitest";


describe("BFS on adjacency list matrix", function() {
    test("Should return an array of nodes and jump amount", function() {
        expect(BFS(graph)).toEqual([
   {
    "jumpAmount": 0,
    "nodeVal": "A",
  },
   {
    "jumpAmount": 1,
    "nodeVal": "C",
  },
   {
    "jumpAmount": 1,
    "nodeVal": "B",
  },
   {
    "jumpAmount": 2,
    "nodeVal": "D",
  },
]
);
    })
})
