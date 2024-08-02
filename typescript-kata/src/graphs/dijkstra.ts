/**
   * NOT OPTIMIZED Dijkstra algoritm implementation.
   * O(V^2 + E)
   * @param  {Set<T>} unvisited  We track what are 
   * @param  {String} sep   A period separating the initials.
   * @param  {String} trail A period ending the initials.
   * @param  {String} hyph  A hypen separating double names.
   * @return {String}       Properly formatted initials.
*/
export class Dijkstra {
    constructor() {

    }

    dijkstra(graph: Map<string, Map<string, number>>, source: string, destination: string): string[] {
        const unvisited = new Set<string>;
        const distances = new Map<string, number>();
        const predecessors = new Map<string, string>();

        for (const node of graph.keys()) {
            unvisited.add(node);
            // console.log(unvisited)
        }

        for (const node of graph.keys()) {
            if (node === source) {
                distances.set(source, 0)
            } else {
                distances.set(node, Infinity);
            }
        }



        return this.walk(graph, source, destination, unvisited, distances, predecessors);

    }

    private walk(graph: Map<string, Map<string, number>>, source: string, destination: string, unvisited: Set<string>, distances: Map<string, number>, predecessors: Map<string, string>): string[] {
        if (source === destination) {
            return this.getPath(predecessors, destination);
        }

        let minDistance = Infinity;
        let minNeighbor = source;

        const neighbors: string[] = [];
        graph.get(source)?.forEach((value, key) => {
            neighbors.push(key)
        });

        for (const neighbor of neighbors as string[]) {

            if (unvisited.has(neighbor)) {
                let distanceSoFar = distances.get(source) as number;
                let distanceToNeighbor = graph.get(source)?.get(neighbor) as number;

                const totalDistanceToNeighbor = distanceSoFar + distanceToNeighbor;
                const distanceToNeighborFromDistances = distances.get(neighbor) as number;

                if (totalDistanceToNeighbor < distanceToNeighborFromDistances) {
                    distances.set(neighbor, totalDistanceToNeighbor);
                    predecessors.set(neighbor, source);
                }

                if (totalDistanceToNeighbor < minDistance) {
                    // console.log("CHUUJ", source)
                    minDistance = totalDistanceToNeighbor;
                    minNeighbor = neighbor
                    // console.log("Chuuja min: ", minNeighbor)
                }

            }
        }
        unvisited.delete(source);

        return this.walk(graph, minNeighbor, destination, unvisited, distances, predecessors);

    }



    private getMinDistanceNode(distances: Map<string, number>, unvisited: Set<string>): string | undefined {
        let out: string = "";
        let minVal: number = Infinity;

        if (unvisited.size === 0) {
            return undefined;
        }

        for (const node of unvisited) {
            if (distances.get(node) as number < minVal) {
                out = node;
                minVal = distances.get(node) as number;
            }
        }

        return out
    }

    private getPath(predecessors: Map<string, string>, destination: string) {
        const out: string[] = [];
        out.push(destination);

        while (true) {
            const next = predecessors.get(out[out.length - 1]);

            if (next === undefined) {
                break;
            }

            out.push(next);
        }

        return out.reverse();
    }

}
