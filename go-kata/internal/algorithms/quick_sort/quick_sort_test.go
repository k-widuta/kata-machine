package algorithms_test

import (
	quick_sort "go-kata/internal/algorithms/quick_sort"
	"math/rand/v2"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestQuickSort(t *testing.T) {
	arr := []int{}

	i := 0
	for i < 50 {
		val := rand.IntN(100)
		arr = append(arr, val)
		i++
	}

	quick_sort.Quick_sort(arr)

	for i := 0; i < len(arr)-1; i++ {
		require.LessOrEqual(t, arr[i], arr[i+1])
	}

	arr = nil
}
