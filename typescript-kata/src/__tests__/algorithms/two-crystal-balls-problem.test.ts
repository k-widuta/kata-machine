import { TwoCrystalBalls } from "src/algorithms/two-crystal-balls-problem";
import { describe, test, expect } from "vitest";

describe("Two Crystal Balls Problem", () => {
  test("Should break at 4 floor", () => {
    const breaks = [false, false, false, false, true, true, true, true];
    expect(TwoCrystalBalls(breaks)).toBe(4);
  });

  test("Should break at 0 floor", () => {
    const breaksAtZero = [true, true, true, true];
    expect(TwoCrystalBalls(breaksAtZero)).toBe(0);
  });

  test("Should break at last floor", () => {
    const lastFloorBreak = [false, false, false, false, false, true];
    const expectedAnswer = lastFloorBreak.length - 1;

    expect(TwoCrystalBalls(lastFloorBreak)).toBe(expectedAnswer);
  });
});
