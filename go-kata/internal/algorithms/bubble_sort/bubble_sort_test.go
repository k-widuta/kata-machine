package algorithms_test

import (
    "go-kata/internal/algorithms/bubble_sort"
    "testing"

    "github.com/stretchr/testify/require"
)

func TestBubbleSort(t *testing.T) {
    arr := []int{420, 44, -10, 4, 1997, 69}

    got := algorithms.BubbleSort(arr)
    want := []int{-10, 4, 44, 69, 420, 1997}

    require.ElementsMatch(t, want, got, "Bubble sort: cant sort the array")
}
