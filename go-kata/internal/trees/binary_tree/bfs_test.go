package binary_tree_test

import (
	"go-kata/internal/trees/binary_tree"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestBreadthFirstSearch(t *testing.T) {
	tests := []struct {
		testName string
		root     binary_tree.BinaryNode[int]
		needle   int
		want     bool
	}{
		{"Should find number in the tree", *binary_tree.CreateBinaryTree().Root, 420, true},
		{"Should not find number in the tree", *binary_tree.CreateBinaryTree().Root, 77, false},
	}

	for _, test := range tests {
		t.Run(test.testName, func(t *testing.T) {
			got := binary_tree.BreadthFirstSearch(test.root, test.needle)

			require.Equal(t, test.want, got)
		})
	}
}
