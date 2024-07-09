function qs(arr: number[], lo: number, hi: number): void {
    // Base case
    if (lo >= hi) {
        return
    }

    // Pre
    const pivotIndx = partition(arr, lo, hi);

    // Recursion
    qs(arr, lo, pivotIndx - 1);
    qs(arr, pivotIndx + 1, hi);

    // Post 

}

function partition(arr: number[], lo: number, hi: number): number {
    // const pivotIndex = Math.floor((lo + hi) / 2);
    // const pivot = arr[pivotIndex];
    const pivot = arr[hi];

    let indx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            indx++;
            const temp = arr[i];
            arr[i] = arr[indx];
            arr[indx] = temp;
        }
    }

    indx++;
    arr[hi] = arr[indx];
    arr[indx] = pivot;

    return indx
}

export function QuickSort(arr: number[]): void {
    qs(arr, 0, arr.length - 1)
}

