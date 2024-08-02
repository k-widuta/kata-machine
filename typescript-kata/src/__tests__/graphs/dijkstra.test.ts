import { Dijkstra } from "src/graphs/dijkstra";
import { DijkstraAdjList } from "src/graphs/dijkstra-adj-list";
import { list1 } from "src/graphs/graph";
import { describe, expect, test } from "vitest";

describe("Dijkstra Shortest Path test suite", function() {
    const dijkstra = new Dijkstra();

    test("Unoptimized dijkstra algorithm", function() {
        const graph = new Map<string, Map<string, number>>();
        const minasMap = new Map<string, number>();
        minasMap.set("Isengard", 4);
        minasMap.set("Gondor", 1);
        const isenMap = new Map<string, number>();
        isenMap.set("Minas Tirith", 4);
        isenMap.set("Bree", 3);
        isenMap.set("Mirkwood", 8);
        const gonMap = new Map<string, number>();
        gonMap.set("Minas Tirith", 1);
        gonMap.set("Bree", 2);
        gonMap.set("Misty Mountains", 6);
        const breeMap = new Map<string, number>();
        breeMap.set("Gondor", 2);
        breeMap.set("Isengard", 3);
        breeMap.set("Mirkwood", 4);
        const mirMap = new Map<string, number>();
        mirMap.set("Bree", 4);
        mirMap.set("Isengard", 8);
        mirMap.set("Lothlorien", 2);
        const mistyMap = new Map<string, number>();
        mistyMap.set("Gondor", 6);
        mistyMap.set("Lothlorien", 8);
        const lothMap = new Map<string, number>();
        lothMap.set("Misty Mountains", 8);
        lothMap.set("Mirkwood", 2);

        graph.set("Minas Tirith", minasMap);
        graph.set("Isengard", isenMap);
        graph.set("Gondor", gonMap);
        graph.set("Bree", breeMap);
        graph.set("Mirkwood", mirMap);
        graph.set("Misty Mountains", mistyMap);
        graph.set("Lothlorien", lothMap);

        const source = "Minas Tirith";
        const destination = "Lothlorien";

        expect(dijkstra.dijkstra(graph,source,destination)).toEqual(["Minas Tirith", "Gondor", "Bree", "Mirkwood", "Lothlorien"])
    });
    // test("Get minimum distance node", function() {
    //     const distances = new Map<string, number>();
    //     distances.set("Minas Tirith", 4);
    //     distances.set("Isengard", 3);
    //     distances.set("Gondor", 2);
    //     distances.set("Mirkwood", 1);
    //
    //     const unvisited = new Set<string>();
    //     unvisited.add("Minas Tirith");
    //     unvisited.add("Gondor");
    //
    //     expect(dijkstra.getMinDistanceNode(distances, unvisited)).toEqual("Gondor");
    // })

    // test("Get a path to the destination", function() {
    //     const destination: string = "Minas Tirith";
    //     const predecessors = new Map<string, string>();
    //     predecessors.set("Minas Tirith", "Rivendell");
    //     predecessors.set("Isengard", "Gondor");
    //     predecessors.set("Rivendell", "Isengard");
    //
    //     expect(dijkstra.getPath(predecessors, destination)).toEqual(["Gondor", "Isengard", "Rivendell", "Minas Tirith"]);
    // })

    test("Dijsktra on adjacency list", function() {
        expect(DijkstraAdjList(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
    })
})
