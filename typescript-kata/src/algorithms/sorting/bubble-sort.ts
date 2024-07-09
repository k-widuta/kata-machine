export function BubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; ++i) {
        // we subtract here 1 because we add 1 while swapping
        // we subtract here i because on each iteration the last number is the biggest (and on first i === 0)
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] >= arr[j + 1]) {
                // swap(arr[j], arr[j + 1])
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function swap(val1: number, val2: number): void {
    const temp = val1;

    val1 = val2;
    val2 = temp;
}
