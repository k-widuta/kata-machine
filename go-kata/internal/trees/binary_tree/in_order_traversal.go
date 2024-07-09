package binary_tree

func walkInOrder[T any](curr *BinaryNode[T], path *[]T) []T {
	if curr == nil {
		return *path
	}

	// Pre

	// Recursion
	walkInOrder(curr.Left, path)
	*path = append(*path, curr.Val)
	walkInOrder(curr.Right, path)

	// Post
	return *path
}

func InOrderTraversal[T any](head *BinaryNode[T]) []T {
	path := []T{}
	return walkInOrder(head, &path)
}
