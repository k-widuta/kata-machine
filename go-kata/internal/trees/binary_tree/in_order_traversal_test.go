package binary_tree_test

import (
	"go-kata/internal/trees/binary_tree"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestInOrderTraversal(t *testing.T) {
	tree := binary_tree.CreateBinaryTree()

	expected := []int{44, 420, 2, 69, 100, 97, 7}
	got := binary_tree.InOrderTraversal(tree.Head)

	require.Equal(t, expected, got)
}
