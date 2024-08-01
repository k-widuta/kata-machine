from algorithms.sorting.merge_sort import merge_sort

class TestMergeSort:
    def test_sort_array(self):
        arr = [420, 69, 97, 2, 44, 1997, 0, 8]

        assert merge_sort(arr) == [0, 2, 8, 44, 69, 97, 420, 1997]

