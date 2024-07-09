from algorithms.sorting.bubble_sort import bubble_sort


class TestBubbleSort:

    def test_should_sort_array(self) -> None:
        arr = [420, 44, -10, 4, 1997, 69]

        want = [-10, 4, 44, 69, 420, 1997]
        got = bubble_sort(arr)

        assert want == got

