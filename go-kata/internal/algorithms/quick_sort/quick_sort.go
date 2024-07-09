package algorithms

func qs(arr []int, lo int, hi int) {
	// Base case
	if lo >= hi {
		return
	}

	// Pre
	pivotIndx := partition(arr, lo, hi)

	// Recursive
	qs(arr, lo, pivotIndx-1)
	qs(arr, pivotIndx+1, hi)

	// Post
}

func partition(arr []int, lo int, hi int) int {
	pivot := arr[(lo+hi)/2]

	indx := lo - 1

	for i := lo; i < hi; i++ {
		if arr[i] <= pivot {
			indx++
			temp := arr[i]
			arr[i] = arr[indx]
			arr[indx] = temp
		}
	}

	indx++
	arr[hi] = arr[indx]
	arr[indx] = pivot

	return indx
}

func Quick_sort(arr []int) {
	qs(arr, 0, len(arr)-1)
}
