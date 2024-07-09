from array import array, ArrayType
class RingBuffer:
    __head: int
    __tail: int
    __capacity: int
    __length: int
    __array: ArrayType[int]

    def __init__(self, __capacity: int = 0):
        self.__head = self.__tail = 0
        self.__capacity = __capacity
        self.__length = 0
        arr = [0 for _ in range(self.__capacity)]
        self.__array = array("I", arr)

        # Free memory
        arr = None

    def __copyArray(self) -> None:
        newArr = [0 for _ in range(self.__capacity * 2)]
        length = 0
        for i in range(self.__head, self.__capacity, 1):
            newArr[i] = self.__array[i]
            length += 1
        for j in range(self.__tail):
            newArr[length] = self.__array[j]
            length += 1

        self.__head = 0
        self.__tail = length
        self.__length = length
        self.__capacity = self.__capacity * 2 
        self.__array = array("I", newArr)

    def push(self, item: int) -> None:
        if self.__tail == self.__head and self.__length != 0:
            self.__copyArray()
        self.__array[self.__tail] = item
        self.__length += 1

        self.__tail = (self.__tail + 1) % self.__capacity

        return None

    def pop(self) -> int | None:
        if self.__length == 0:
            return None
        item = None
        if self.__tail - 1 < 0:
            self.__tail = self.__capacity - 1
            item = self.__array[self.__tail]
        else:
            self.__tail -= 1
            item = self.__array[self.__tail]

        self.__length -= 1

        return item

    def unshift(self, item: int) -> None:
        if self.__length == 0:
            self.push(item)

            return None

        if self.__head == self.__tail and self.__length != 0:
            self.__copyArray()

        if self.__head == 0:
            self.__head = self.__capacity - 1
        else:
            self.__head -= 1

        self.__array[self.__head] = item
        self.__length += 1

        return None

    def shift(self) -> int | None:
        if self.__length == 0:
            return None
        item = self.__array[self.__head]
        self.__head += 1
        if self.__head >= self.__capacity:
            self.__head = self.__head % self.__capacity

        self.__length -= 1
        return item

    def get(self, indx: int) -> int | None:
        if indx >= self.__length or indx < -self.__length:
            return None

        if indx < 0:
            if self.__tail + indx >= 0:
                return self.__array[self.__tail + indx]
            else:
                i = self.__capacity + (self.__tail + indx)
                return self.__array[i]
        
        trueIndex = (self.__head + indx) % self.__capacity
        if (trueIndex < self.__head and trueIndex >= self.__tail):
            return None

        return self.__array[trueIndex]


    def getLength(self) -> int:
        return self.__length

    def getCapacity(self) -> int:
        return self.__capacity

    def getHead(self) -> int:
        return self.__head

    def getTail(self) -> int:
        return self.__tail
