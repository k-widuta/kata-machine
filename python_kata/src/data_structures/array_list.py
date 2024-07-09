from array import array, ArrayType

"""
This implementation is only for Unassigned int. If you want to check other 
possible arrays - look here:
https://realpython.com/python-array/#choose-the-type-of-your-array-elements

Basic implementation.
"""

class ArrayList:
    __length: int
    __capacity: int
    __array: ArrayType[int]

    def __init__(self, capacity: int = 0):
        self.__length = 0
        self.__capacity = capacity
        arr = []
        for _ in range(self.__capacity):
            arr.append(0)
        self.__array = array("I", arr)
        # Free memory
        arr = None

    def __copy_array(self) -> None: 
        self.__capacity *= 2
        arr = [0 for _ in range(self.__capacity)]
        for i in range(self.__capacity):
            if i < self.__length:
                arr[i] = self.__array[i]
            else:
                continue
        self.__array = array("I", arr)
        
        # Free memory
        arr = None

    def push(self, item: int) -> None:
        if self.__length == self.__capacity:
            self.__copy_array()

        self.__array[self.__length] = item
        self.__length += 1

    def pop(self) -> int | None:
        if self.__length == 0:
            return None
        val = self.__array[self.__length - 1]
        self.__length -= 1

        return val

    def get(self, indx: int) -> int | None:
        if indx >= self.__length or indx < -self.__length:
            return None

        if indx < 0:
            return self.__array[self.__length + indx]

        return self.__array[indx]

    def get_length(self) -> int:
        return self.__length

    def get_capacity(self) -> int:
        return self.__capacity
