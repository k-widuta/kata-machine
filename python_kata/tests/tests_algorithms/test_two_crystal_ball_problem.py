from algorithms.two_crystal_ball_problem import two_crystal_balls

class TestTwoCrystalBalls:

    def test_should_break_at_4_floor(self):
        breaks: list[bool] = [False, False, False, False, True, True, True, True]

        assert two_crystal_balls(breaks) == 4

    def test_should_break_at_0_floor(self):
        breaks: list[bool] = [True, True, True, True, True, True, True, True]

        assert two_crystal_balls(breaks) == 0

    def test_should_break_at_last_floor(self):
        breaks: list[bool] = [False, False, False, False, False, False, False, True]
        last_floor: int = len(breaks) - 1

        assert two_crystal_balls(breaks) == last_floor
