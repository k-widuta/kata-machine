def dijkstra(graph, src, dest):
    unvisited = set()
    for node in graph:
        unvisited.add(node)
    distances = {}
    for node in graph:
        if node == src:
            distances[node] = 0
        else:
            distances[node] = float("inf")
    return dijkstra_r(graph, src, dest, unvisited, distances, {})


def dijkstra_r(graph, src, dest, unvisited, distances, predecessors):
    if src == dest:
        path = []
        pred = dest
        while pred != None:
            path.append(pred)
            pred = predecessors.get(pred, None)
        path.reverse()
        return path
    min_dist = float("inf")
    min_neighbor = src
    for neighbor in graph[src]:
        print(f"neighbor: ", neighbor)
        if neighbor in unvisited:
            distance_so_far = distances[src]
            distance_to_neighbor = graph[src][neighbor]
            total_distance_to_neighbor = distance_so_far + distance_to_neighbor
            if total_distance_to_neighbor < distances.get(neighbor):
                distances[neighbor] = total_distance_to_neighbor
                predecessors[neighbor] = src
            if total_distance_to_neighbor < min_dist:
                min_dist = total_distance_to_neighbor
                min_neighbor = neighbor
    unvisited.remove(src)
    return dijkstra_r(graph, min_neighbor, dest, unvisited, distances, predecessors)
