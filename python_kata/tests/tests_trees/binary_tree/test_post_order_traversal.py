from trees.binary_tree.post_order_traversal import post_order_traversal 
from tests.tests_trees.binary_tree.binary_tree import tree


class TestPreOrderTraversal:
    def test_should_print_path_in_right_order(self):
        assert post_order_traversal(tree) == [
            7,
            5,
            15,
            10,
            29,
            45,
            30,
            100,
            50,
            20,
        ]

