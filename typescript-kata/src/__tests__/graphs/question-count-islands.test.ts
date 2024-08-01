import { CountIslands, map } from "src/graphs/countIslands";
import { describe, expect, test } from "vitest";

describe("Count islands on map", function() {
    test("Should find 3 islands", function() {
        expect(CountIslands(map)).toEqual(3);
    })
})
