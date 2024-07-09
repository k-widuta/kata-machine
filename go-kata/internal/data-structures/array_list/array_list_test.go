package data_structures_test

import (
	array_list "go-kata/internal/data-structures/array_list"
	"testing"

	"github.com/stretchr/testify/require"
)

func createArrayList(capacity int, args ...int) *array_list.ArrayList[int] {
	arr := array_list.NewIntArrayList(capacity)

	for _, v := range args {
		arr.Push(v)
	}

	return arr
}

func TestArrayListPush(t *testing.T) {
	arr := createArrayList(3, 69, 44)
	firstVal, err := arr.Get(0)
	require.Nil(t, err, "Problems with getting from array")
	firstValNeg, err := arr.Get(-2)
	require.Nil(t, err, "Problems with getting from array")
	lastVal, err := arr.Get(1)
	require.Nil(t, err, "Problems with getting from array")
	lastValNeg, err := arr.Get(-1)
	require.Nil(t, err, "Problems with getting from array")

	require.Equal(t, arr.GetLength(), 2, "Array length should equal 2")
	require.Equal(t, arr.GetCapacity(), 3, "Array capacity should equal 3")
	require.Equal(t, 69, firstVal, "The first value should be 69")
	require.Equal(t, 69, firstValNeg, "The first value (by negative indx) should be 69")
	require.Equal(t, 44, lastVal, "The last value should be 44")
	require.Equal(t, 44, lastValNeg, "The last value (with negative indx) should be 44")
}
