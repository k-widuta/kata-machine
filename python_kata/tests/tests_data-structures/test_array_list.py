from data_structures.array_list import ArrayList


def create_array_list(capacity: int = 0, *args: int) -> ArrayList:
    array_list = ArrayList(capacity)

    for arg in args:
        array_list.push(arg)

    return array_list


class TestArrayList: 
    def test_array_list_should_have_length_of_zero_and_capacity_of_6(self):
        arr = create_array_list(6)

        assert arr.get_length() == 0
        assert arr.get_capacity() == 6

    def test_popping_from_empty_list_should_return_None(self):
        arr = create_array_list(1)

        assert arr.pop() == None

    def test_pop_should_return_69(self):
        arr = create_array_list(2, 44, 69)

        assert arr.pop() == 69

    def test_length_and_capacity_should_be_equal(self):
        arr = create_array_list(3, 69, 97, 44)

        assert arr.get_capacity() == arr.get_length()

    def test_after_pushing_to_full_list_capacity_should_double(self):
        arr = create_array_list(3, 69, 97, 44)
        arr.push(2)
        
        assert arr.get_capacity() == 6

    def test_get_first_value_should_return_69(self):
        arr = create_array_list(3, 69, 97, 44)

        assert arr.get(-3) == 69
        assert arr.get(0) == 69

    def test_get_last_value_should_return_44(self):
        arr = create_array_list(3, 69, 97, 44)

        assert arr.get(-1) == 44
        assert arr.get(2) == 44
        assert arr.get(arr.get_length() - 1) == 44

    def test_get_out_of_index_should_return_None(self):
        arr = create_array_list(3, 69, 97, 44)

        assert arr.get(3) == None
        assert arr.get(-4) == None

