package binary_tree_test

import (
	"go-kata/internal/trees/binary_tree"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestPostOrderTraversal(t *testing.T) {
	tree := binary_tree.CreateBinaryTree()

	expected := []int{44, 2, 420, 100, 7, 97, 69}
	got := binary_tree.PostOrderTraversal(tree.Head)

	require.Equal(t, expected, got)
}
