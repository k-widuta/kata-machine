from typing import List
from recursion.maze_solver import Point, maze_solver
maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];

maze_result = [
    Point(  10,  0 ),
    Point(  10,  1 ),
    Point(  10,  2 ),
    Point(  10,  3 ),
    Point(  10,  4 ),
    Point(  9,  4 ),
    Point(  8,  4 ),
    Point(  7,  4 ),
    Point(  6,  4 ),
    Point(  5,  4 ),
    Point(  4,  4 ),
    Point(  3,  4 ),
    Point(  2,  4 ),
    Point(  1,  4 ),
    Point(  1,  5 ),
];

def draw_path(data: List[str], path: List[Point]):
    data2 = []
    for row in data:
        new_row = [*row]
        data2.append(new_row) 


    for point in path:
        if data2[point.Y] and data2[point.Y][point.X]:
            data2[point.Y][point.X] = "*"

    for row in data2:
        "".join(row)

    return data2

result = maze_solver(maze, "x", Point(10,0), Point(1,5) )

assert draw_path(maze, result) == draw_path(maze, maze_result)
