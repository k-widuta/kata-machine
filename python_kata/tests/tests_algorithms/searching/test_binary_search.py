from algorithms.searching.binary_search import binary_search

class TestBinarySearch:
     
    sorted_haystack: list[int] = [1, 4, 9, 44, 69, 420, 1997]  

    def test_number_is_be_in_the_list(self):
        needle = 420
        assert binary_search(self.sorted_haystack, needle) == True

    def test_number_isnt_in_the_list(self):
        needle = 97
        assert binary_search(self.sorted_haystack, needle) == False
