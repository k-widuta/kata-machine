import sys
import random
from algorithms.sorting.quick_sort import quick_sort

class TestQuickSort:
    def test_returns_sorted_array(self):
        arr = [random.randint(-100, 100) for _ in range(20)]
        quick_sort(arr)

        print(arr, file=sys.stdout)
        for i in range(0, len(arr) - 1, 1):
            assert arr[i] <= arr[i + 1]
        print(arr)

