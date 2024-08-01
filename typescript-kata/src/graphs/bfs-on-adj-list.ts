import { Queue } from "src/data-structures/queue";

type GraphEdge<T> = {
    from: T;
    to: number;
}

type AdjacencyListGraph = GraphEdge<string>[][]

type JumpAmount = {
    nodeVal: string;
    jumpAmount: number;
}

export function BFS (graph: AdjacencyListGraph): JumpAmount[] {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const q: Queue<GraphEdge<string>[]> = new Queue<GraphEdge<string>[]>();
    const out: JumpAmount[] = [];
    // const cache: Map<

    q.enqueue(graph[0]);
    seen[0] = true;
    let jumps = 0;
    out.push({nodeVal: graph[0][0].from, jumpAmount: jumps});
    jumps++;

    while (q.length) {
        const nodes: GraphEdge<string>[] | undefined = q.deque();

        if (nodes === undefined) {
            break;
        }

        for (const node of nodes) {
            if (seen[ node.to ] === true) {
                continue;
            }
            
            seen[node.to] = true;
            const nodeTo = graph[node.to];
            q.enqueue(nodeTo);
            out.push({nodeVal: nodeTo[0].from, jumpAmount: jumps});
        }

        jumps++;
    }


    return out;
}

export const graph: AdjacencyListGraph = [];
graph[0] = [
    {from: "A", to: 2},
    {from: "A", to: 1}
];

graph[1] = [
    {from: "B", to: 3},
];

graph[2] = [
    {from: "C", to: 3},
];

graph[3] = [
    {from: "D", to: 0},
];
