from trees.binary_tree.in_order_traversal import in_order_traversal
from tests.tests_trees.binary_tree.binary_tree import tree


class TestPreOrderTraversal:
    def test_should_print_path_in_right_order(self):
        assert in_order_traversal(tree) == [
            5,
            7,
            10,
            15,
            20,
            29,
            30,
            45,
            50,
            100,
        ]

