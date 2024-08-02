from graphs.dijkstra import dijkstra

class TestDijkstra:
    def test_unoptimized_dijkstra(self):
        graph = {
            "Minas Tirith": {"Isengard": 4, "Gondor": 1},
            "Isengard": {"Minas Tirith": 4, "Bree": 3, "Mirkwood": 8},
            "Gondor": {"Minas Tirith": 1, "Bree": 2, "Misty Mountains": 6},
            "Bree": {"Gondor": 2, "Isengard": 3, "Mirkwood": 4},
            "Mirkwood": {"Bree": 4, "Isengard": 8, "Lothlorien": 2},
            "Misty Mountains": {"Gondor": 6, "Lothlorien": 8},
            "Lothlorien": {"Misty Mountains": 8, "Mirkwood": 2},
        }

        source = "Minas Tirith"
        destination = "Lothlorien"

        assert dijkstra(graph, source, destination) == ["Minas Tirith", "Gondor", "Bree", "Mirkwood", "Lothlorien"]
