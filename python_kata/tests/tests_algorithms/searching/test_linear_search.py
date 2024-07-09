from algorithms.searching.linear_search  import linear_search

class TestLinearSearch:
    haystack: list[int] = [1, 420, 69, 27, 44]  

    def test_number_is_be_in_the_list(self):
        needle = 420
        assert linear_search(self.haystack, needle) == True

    def test_number_isnt_in_the_list(self):
        needle = 97
        assert linear_search(self.haystack, needle) == False
