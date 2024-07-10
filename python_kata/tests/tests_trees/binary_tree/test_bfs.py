from trees.binary_tree.bfs import breadth_first_search
from tests.tests_trees.binary_tree.binary_tree import tree


class TestBreadthFirstSearch:
    def test_should_find_the_number_in_tree(self):
        assert breadth_first_search(tree, 29) == True

    def test_should_not_find_the_number_in_tree(self):
        assert breadth_first_search(tree, 69) == False
