from data_structures.ring_buffer import RingBuffer


def create_ring_buffer(capacity: int = 0, *args: int) -> RingBuffer:
    ring_buffer = RingBuffer(capacity)
    for arg in args:
        ring_buffer.push(arg)

    return ring_buffer

class TestRingBuffer:
    def test_pushing_into_buffer_should_update_tail_and_length(self):
        rg = create_ring_buffer(3, 69)

        assert rg.getLength() == 1
        assert rg.getCapacity() == 3
        assert rg.getHead() == 0
        assert rg.getTail() == 1

    def test_expanding_buffer_when_tail_equals_head(self):
        rg = create_ring_buffer(3, 4, 69, 44)
        rg.push(97)

        assert rg.getCapacity() == 6

    def test_pop(self):
        rg = create_ring_buffer(3, 4, 69, 44)

        assert rg.pop() == 44
        assert rg.getLength() == 2
        assert rg.getTail() == 2

    def test_unshift_should_change_head_to_last_index(self):
        rg = create_ring_buffer(9, 4, 69, 44)
        rg.unshift(97)

        assert rg.getHead() == 8

    def test_shift_on_buffer_where_head_is_at_last_place_should_move_head_at_index_zero(self):
        rg = create_ring_buffer(3, 4, 69, 44)
        rg.unshift(97)

        assert rg.shift() == 97
        assert rg.getHead() == 0
        assert rg.getCapacity() == 6

    def test_getting_from_empty_buffer_should_return_None(self):
        rg = create_ring_buffer(3)

        assert rg.get(0) == None
        
    def test_getting_index_out_of_range_should_return_None(self):
        rg = create_ring_buffer(3, 1, 2, 3)

        assert rg.get(3) == None
        assert rg.get(-4) == None

    def test_get_when_buffer_is_linear(self):
        rg = create_ring_buffer(3, 4, 69, 44)

        assert rg.get(0) == 4
        assert rg.get(-3) == 4
        assert rg.get(1) == 69
        assert rg.get(-2) == 69
        assert rg.get(2) == 44
        assert rg.get(-1) == 44

    def test_get_when_buffer_is_circular(self):
        rg = create_ring_buffer(7, 1, 2, 3, 4, 5, 6, 7)
        rg.shift()
        rg.shift()
        rg.shift()
        rg.push(11)
        rg.push(12)

        assert rg.get(0) == 4
        assert rg.get(-6) == 4
        assert rg.get(1) == 5
        assert rg.get(-5) == 5
        assert rg.get(2) == 6
        assert rg.get(-4) == 6
        assert rg.get(3) == 7
        assert rg.get(-3) == 7
        assert rg.get(4) == 11
        assert rg.get(-2) == 11
        assert rg.get(5) == 12
        assert rg.get(-1) == 12
        assert rg.get(6) == None
        assert rg.get(-7) == None
        assert rg.get(7) == None
        assert rg.get(-8) == None


    
