package binary_tree_test

import (
	"go-kata/internal/trees/binary_tree"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestPreOrderTraversal(t *testing.T) {
	tree := binary_tree.CreateBinaryTree()

	expected := []int{69, 420, 44, 2, 97, 100, 7}
	got := binary_tree.PreOrderTraversal(tree.Head)

	require.Equal(t, expected, got)
}
