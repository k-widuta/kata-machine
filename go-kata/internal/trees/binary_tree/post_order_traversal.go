package binary_tree

func walkPostOrder[T any](curr *BinaryNode[T], path *[]T) []T {
	if curr == nil {
		return *path
	}

	// Pre

	// Recursion
	walkPostOrder(curr.Left, path)
	walkPostOrder(curr.Right, path)

	// Post
	*path = append(*path, curr.Val)
	return *path
}

func PostOrderTraversal[T any](head *BinaryNode[T]) []T {
	return walkPostOrder(head, &[]T{})
}
