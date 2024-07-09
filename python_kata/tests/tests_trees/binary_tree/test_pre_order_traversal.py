from trees.binary_tree.pre_order_traversal import pre_order_traversal
from tests.tests_trees.binary_tree.binary_tree import tree


class TestPreOrderTraversal:
    def test_should_print_path_in_right_order(self):
        assert pre_order_traversal(tree) == [
            20,
            10,
            5,
            7,
            15,
            50,
            30,
            29,
            45,
            100,
        ]

