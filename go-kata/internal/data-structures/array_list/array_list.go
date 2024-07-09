package data_structures

import (
	"errors"
)

type ArrayList[T any] struct {
	length   int
	capacity int
	array    []T
}

func NewIntArrayList(capacity int) *ArrayList[int] {
	return &ArrayList[int]{
		length:   0,
		capacity: capacity,
		array:    make([]int, 0, capacity),
	}
}

func (a *ArrayList[T]) copyArray() {
	newArr := make([]T, 0, a.capacity*2)
	for i := 0; i < len(a.array); i++ {
		// newArr[i] = a.array[i]
		newArr = append(newArr, a.array[i])
	}

	a.capacity = a.capacity * 2
	a.array = newArr
	newArr = nil
}

func (a *ArrayList[T]) Push(item T) {
	if a.length == a.capacity {
		a.copyArray()
	}

	a.array = append(a.array, item)
	a.length++
}

func (a *ArrayList[T]) Pop() (T, error) {
	var nilResult T
	if a.length == 0 {
		return nilResult, errors.New("Cannot pop from empty array list")
	}

	lastIndx := len(a.array) - 1

	item := a.array[lastIndx]
	a.array = a.array[:lastIndx]
	a.length--

	return item, nil
}

func (a ArrayList[T]) Get(indx int) (T, error) {
	var nilResult T
	if indx >= a.length || indx < -a.length {
		return nilResult, errors.New("Index out of bound")
	}

	if indx < 0 {
		return a.array[len(a.array)+indx], nil
	}

	return a.array[indx], nil
}

func (a ArrayList[T]) GetLength() int {
	return a.length
}

func (a ArrayList[T]) GetCapacity() int {
	return a.capacity
}

// func (a ArrayList[T]) GetArrayCapacity() int {
// 	return cap(a.array)
// }
