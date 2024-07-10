package binary_tree

func BfsTreeDepth(tree *BinaryTree[int]) int {
	if tree.Root == nil {
		return -1
	}

	maxDepth := 0
	q := []*BinaryNode[int]{}
	cache := make(map[*BinaryNode[int]]int)

	q = append(q, tree.Root)
	cache[tree.Root] = 0

	for len(q) > 0 {
		node := q[0]
		if node == nil {
			continue
		}

		depth := cache[node]

		if depth > maxDepth {
			maxDepth = depth
		}

		if node.Left != nil {
			q = append(q, node.Left)
			cache[node.Left] = depth + 1
		}

		if node.Right != nil {
			q = append(q, node.Right)
			cache[node.Right] = depth + 1
		}
	}

	return maxDepth
}
