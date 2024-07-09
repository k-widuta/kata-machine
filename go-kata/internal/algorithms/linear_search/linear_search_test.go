package algorithms_test

import (
	linear_search "go-kata/internal/algorithms/linear_search"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestLinearSearch(t *testing.T) {
	haystack := []int{7, 420, 44, 69, 4}

	tests := []struct {
		testName string
		haystack []int
		needle   int
		expected bool
	}{
		{": Number is in the array", haystack, 420, true},
		{": Number is NOT in the array", haystack, 97, false},
	}

	for _, test := range tests {
		t.Run(test.testName, func(t *testing.T) {
			got := linear_search.LinearSearch(test.haystack, test.needle)

			require.Equal(t, test.expected, got)
		})
	}
}
