package algorithms_test

import (
	binary_search "go-kata/internal/algorithms/binary_search"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestBinarySearch(t *testing.T) {
	haystack := []int{1, 4, 9, 44, 69, 420, 1997}

	tests := []struct {
		testName string
		haystack []int
		needle   int
		expected bool
	}{
		{testName: "Number exists in the list. ", haystack: haystack, needle: 420, expected: true},
		{testName: "Number DOESN'T exist in the list. ", haystack: haystack, needle: 97, expected: false},
	}

	for _, test := range tests {
		t.Run(test.testName, func(t *testing.T) {
			got := binary_search.BinarySearch(test.haystack, test.needle)

			require.Equal(t, test.expected, got)
		})
	}
}
