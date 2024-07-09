export type Point = {
    x: number
    y: number
}

const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // Base cases
    // We are off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false;
    }
    // We are on the wall
    if (maze[curr.y][curr.x] === wall) {
        return false
    }
    // We have seen that place
    if (seen[curr.y][curr.x]) {
        return false
    }
    // We found the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr)
        return true
    }

    // Pre
    path.push(curr)
    seen[curr.y][curr.x] = true;

    // Recursion
    for (let i = 0; i < directions.length; ++i) {
        const [x,y] = directions[i]
        if (walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y,
        }, end, seen, path)) {
            return true
        }
    }
    
    // Post
    path.pop()
    return false
}

export function MazeSolver(maze: string[],wall: string, start: Point, end: Point): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];
    
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
