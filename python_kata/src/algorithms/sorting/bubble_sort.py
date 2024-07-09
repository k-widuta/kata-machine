def bubble_sort(arr: list[int]) -> list[int]:
    for i in range(len(arr)):
        for j in range(0, len(arr) - 1 - i, 1):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

    return arr
