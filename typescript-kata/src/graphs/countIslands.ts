/* 
 Count the number of islands on the map. 
 Island is 1 surrounded by water (0)
 */

type Point = {
    x: number;
    y: number;
}

const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
]

function walk(map: number[][], curr: Point, seen: boolean[][], islands: number): number {
    // Base cases
    if (curr.y < 0 || curr.y >= map.length) {
        return islands;
    }
    if (curr.x < 0 || curr.x >= map[0].length) {
        return islands;
    }

    if (seen[curr.y][curr.x] === true) {
        return islands;
    }


    seen[curr.y][curr.x] = true;

    for (let r = 0; r < map.length; r++) {
        for (let c = 0; c < map[r].length; c++) {
            if (map[r][c] === 1 && seen[r][c] === false) {
                for (const dir of directions) {
                    const [x,y] = dir;

                    const newStart = {x: c + x, y: r+ y}
                    walk(map, newStart, seen, islands);
                }
                islands += 1;
            }
        }
    }


    return islands;
}

export function CountIslands(map: number[][]): number {
    const seen: boolean[][] = [];
    for (let i = 0; i < map.length; i++) {
        seen.push(new Array(map[i].length).fill(false));
    }

    return walk(map, {x: 0, y:0}, seen, 0);

}

export const map: number[][] = [
    [0,0,0,1],
    [1,1,0,0],
    [1,0,0,0],
    [0,1,0,0]
]
