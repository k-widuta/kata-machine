package binary_tree

func BreadthFirstSearch(root BinaryNode[int], needle int) bool {
	q := []BinaryNode[int]{}

	q = append(q, root)
	for len(q) > 0 {
		var node BinaryNode[int]
		node, q = q[0], q[1:]

		if node.Val == needle {
			return true
		}

		if node.Left != nil {
			q = append(q, *node.Left)
		}

		if node.Right != nil {
			q = append(q, *node.Right)
		}

	}

	return false
}
