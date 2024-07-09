def binary_search(haystack: list[int], needle: int) ->bool:
    
    lo = 0
    hi = len(haystack)

    while lo < hi:
        mid = lo + (hi - lo) // 2
        val = haystack[mid]

        if val == needle:
            return True
        elif val > needle:
            hi = mid
        else:
            lo = mid + 1

    return False
