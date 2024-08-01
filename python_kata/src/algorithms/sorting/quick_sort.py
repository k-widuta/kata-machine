from typing import List

def qs(arr: List[int], lo: int, hi: int) -> None:
    if lo >= hi:
        return

    # Pre
    pivotIndx = partition(arr, lo, hi)

    ## Recursion
    # It's inclusive ending (not exlusive like in many other algos)
    # So we subtract 1 here to make life easier
    qs(arr, lo, pivotIndx - 1)
    qs(arr, pivotIndx + 1, hi)

def partition(arr: List[int], lo: int, hi: int) -> int:
    pivot = arr[(hi + lo) // 2]
    # pivot = arr[hi]

    indx = lo - 1

    for i in range(lo, hi, 1):
        if arr[i] <= pivot:
            indx += 1
            temp = arr[i]
            arr[i] = arr[indx]
            arr[indx] = temp

    indx += 1
    arr[hi] = arr[indx]
    arr[indx] = pivot

    return indx


def quick_sort(array: List[int]) -> None:
    qs(array, 0, len(array) - 1)
