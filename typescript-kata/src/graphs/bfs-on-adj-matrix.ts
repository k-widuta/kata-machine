import { WeightedAdjacencyMatrix } from "./graph";

export function BFS(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    // Lords loop
    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        // Get adjacency nodes list
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; ++i) {
            // If node has no connection to that node - continue
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            // Current is where we came from
            prev[i] = curr;
            q.push(i);
        }
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }

    // Build the graph backwards
    //
    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    };

    // We need to add source to the result becasue source has no parent (prev)
    return [source].concat(out.reverse());
}
