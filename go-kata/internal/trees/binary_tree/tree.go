package binary_tree

type BinaryNode[T any] struct {
	Val   T
	Left  *BinaryNode[T]
	Right *BinaryNode[T]
}

func newBinaryNode[T any](value T) *BinaryNode[T] {
	return &BinaryNode[T]{
		Val:   value,
		Left:  nil,
		Right: nil,
	}
}

type BinaryTree[T any] struct {
	Head *BinaryNode[T]
}

func newBinaryTree[T any](head *BinaryNode[T]) *BinaryTree[T] {
	return &BinaryTree[T]{
		Head: head,
	}
}

func CreateBinaryTree() *BinaryTree[int] {
	head := newBinaryNode(69)
	tree := newBinaryTree(head)

	tree.Head.Left = newBinaryNode(420)
	tree.Head.Right = newBinaryNode(97)

	tree.Head.Left.Left = newBinaryNode(44)
	tree.Head.Left.Right = newBinaryNode(2)

	tree.Head.Right.Left = newBinaryNode(100)
	tree.Head.Right.Right = newBinaryNode(7)

	return tree
}
