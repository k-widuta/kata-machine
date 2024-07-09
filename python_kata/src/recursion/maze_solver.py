from dataclasses import dataclass
from typing import List

@dataclass
class Point:
    X: int
    Y: int


Path = List[Point]
Maze = List[str]
Seen = List[List[int]]

directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

def walk(maze: Maze, wall: str, curr: Point, end: Point, seen: Seen, path: Path):
    if (curr.Y < 0 or curr.Y >= len(maze) or
        curr.X < 0 or curr.X >= len(maze[0])):
        return False

    if maze[curr.Y][curr.X] == wall:
        return False

    if seen[curr.Y][curr.X]:
        return False

    if curr.X == end.X and curr.Y == end.Y:
        path.append(curr)
        return True

    path.append(curr)
    seen[curr.Y][curr.X] = True

    for dir in directions:
        (x, y) = dir
        if walk(maze, wall, Point(curr.X + x, curr.Y + y), end, seen, path):
            return True

    path.pop()
    return False

    

def maze_solver(maze: Maze, wall: str, end: Point, start: Point)-> Path:
    path: Path = []
    seen: Seen = [[False for _ in range(len(maze[0]))] for _ in range(len(maze))]

    walk(maze, wall, start, end, seen, path)

    return path
