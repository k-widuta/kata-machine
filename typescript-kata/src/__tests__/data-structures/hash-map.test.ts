import { HashMap } from "src/data-structures/hash-map";
import { describe, expect, test } from "vitest";

describe("Hash Map test suite", function() {
    test("Inserting into hash map", function() {
        const hashMap = new HashMap<string>();
        hashMap.set("Kacper", "Is the best SE");
        hashMap.set("Marika", "Is the best girlfirend");
        hashMap.set("Morty", "Is the black cat");
        hashMap.set("Piri", "Is the white cat");

        expect(hashMap.length).toEqual(4);
    })

    test("Checking the values stored", function() {
        const hashMap = new HashMap<string>();
        hashMap.set("Kacper", "Is the best SE");
        hashMap.set("Marika", "Is the best girlfirend");
        hashMap.set("Morty", "Is the black cat");
        hashMap.set("Piri", "Is the white cat");

        expect(hashMap.get("Kacper")).toEqual("Is the best SE");
        expect(hashMap.has("Marika")).toEqual(true);
        expect(hashMap.get("Dorota")).toEqual(undefined);
        expect(hashMap.has("Marlenka")).toEqual(false);
    })

    test("Deleting from hash map", function() {
        const hashMap = new HashMap<string>();
        hashMap.set("Kacper", "Is the best SE");
        hashMap.set("Marika", "Is the best girlfirend");
        hashMap.set("Morty", "Is the black cat");
        hashMap.set("Piri", "Is the white cat");

        expect(hashMap.delete("Kacper")).toEqual(true);
        expect(hashMap.delete("Marika")).toEqual(true);
        expect(hashMap.get("Kacper")).toEqual(undefined);
        expect(hashMap.has("Marika")).toEqual(false);
        expect(hashMap.get("Morty")).toEqual("Is the black cat");
        expect(hashMap.has("Piri")).toEqual(true);
        expect(hashMap.length).toEqual(2);
    })

})
