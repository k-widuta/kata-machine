package algorithms

func BinarySearch(haystack []int, needle int) bool {
	lo := 0
	hi := len(haystack)

	for lo < hi {
		mid := lo + (hi-lo)/2
		val := haystack[mid]

		if val == needle {
			return true
		} else if val > needle {
			hi = mid
		} else {
			lo = mid + 1
		}
	}

	return false
}
