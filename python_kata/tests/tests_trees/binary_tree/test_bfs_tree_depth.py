from trees.binary_tree.bfs_tree_depth import tree_depth
from tests.tests_trees.binary_tree.binary_tree import tree

class TestBFSTreeDepth:
    def test_tree_depth_should_be_3(self):
        assert tree_depth(tree) == 3
