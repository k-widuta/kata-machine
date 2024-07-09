import { BinaryNode } from "src/trees/BTnode";

export const tree: BinaryNode<number> = {
    val: 20,
    right: {
        val: 50,
        right: {
            val: 100,
            right: undefined,
            left: undefined,
        },
        left: {
            val: 30,
            right: {
                val: 45,
                right: undefined,
                left: undefined,
            },
            left: {
                val: 29,
                right: undefined,
                left: undefined,
            }
        },
    },
    left: {
        val: 10,
        right: {
            val: 15,
            right: undefined,
            left: undefined,
        },
        left: {
            val: 5,
            right: {
                val: 7,
                right: undefined,
                left: undefined,
            },
            left: undefined,
        }
    }
};

export const tree2: BinaryNode<number> = {
    val: 20,
    right: {
        val: 50,
        right: undefined,
        left: {
            val: 30,
            right: {
                val: 45,
                right: {
                    val: 49,
                    left: undefined,
                    right: undefined,
                },
                left: undefined,
            },
            left: {
                val: 29,
                right: undefined,
                left: {
                    val: 21,
                    right: undefined,
                    left: undefined,
                },
            }
        },
    },
    left: {
        val: 10,
        right: {
            val: 15,
            right: undefined,
            left: undefined,
        },
        left: {
            val: 5,
            right: {
                val: 7,
                right: undefined,
                left: undefined,
            },
            left: undefined,
        }
    }
};
