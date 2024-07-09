package algorithms_test

import (
	algorithms "go-kata/internal/algorithms/two_crystal_balls_problem"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestTwoCrystalBallsProblem(t *testing.T) {
	breaksAtLastFloor := []bool{false, false, false, true}

	tests := []struct {
		testName string
		breaks   []bool
		expected int
	}{
		{testName: "Should break at 0 floor", breaks: []bool{true, true, true, true}, expected: 0},
		{testName: "Should break at last floor", breaks: breaksAtLastFloor, expected: len(breaksAtLastFloor) - 1},
		{testName: "Should break at 4 floor", breaks: []bool{false, false, false, false, true, true, true, true}, expected: 4},
	}

	for _, test := range tests {
		t.Run(test.testName, func(t *testing.T) {
			got := algorithms.TwoCrystalBallsProblem(test.breaks)
			require.Equal(t, test.expected, got)
		})
	}
}
