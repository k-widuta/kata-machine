package binary_tree

func walkPreOrder[T any](curr *BinaryNode[T], path *[]T) *[]T {
	if curr == nil {
		return path
	}

	// Pre
	*path = append(*path, curr.Val)

	// Recursion
	walkPreOrder(curr.Left, path)
	walkPreOrder(curr.Right, path)

	// Post
	return path
}

func PreOrderTraversal[T any](head *BinaryNode[T]) []T {
	path := []T{}
	walkPreOrder(head, &path)

	return path
}
