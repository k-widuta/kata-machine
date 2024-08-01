from typing import List


def merge(left_array, right_array) -> List[int]:
    j, k = 0, 0
    result = []

    while j < len(left_array) and k < len(right_array):
        if left_array[j] < right_array[k]:
            result.append(left_array[j])
            j += 1
        else:
            result.append(right_array[k])
            k += 1

    while j < len(left_array):
        result.append(left_array[j])
        j += 1

    while k < len(right_array):
        result.append(right_array[k])
        k += 1


    return result


def merge_sort(arr):
    if len(arr) < 2:
        return arr

    mid = len(arr) // 2

    left_array = merge_sort(arr[:mid])
    right_array = merge_sort(arr[mid:])

    return merge(left_array, right_array)
