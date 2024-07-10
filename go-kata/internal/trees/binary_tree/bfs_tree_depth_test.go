package binary_tree_test

import (
	"go-kata/internal/trees/binary_tree"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestBfsTreeDepth(t *testing.T) {
	got := binary_tree.BfsTreeDepth(binary_tree.CreateBinaryTree())

	require.Equal(t, 3, got, "Tree depth should be 3")
}
