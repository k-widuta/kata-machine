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
	Root *BinaryNode[T]
}

func newBinaryTree[T any](head *BinaryNode[T]) *BinaryTree[T] {
	return &BinaryTree[T]{
		Root: head,
	}
}

func CreateBinaryTree() *BinaryTree[int] {
	head := newBinaryNode(69)
	tree := newBinaryTree(head)

	tree.Root.Left = newBinaryNode(420)
	tree.Root.Right = newBinaryNode(97)

	tree.Root.Left.Left = newBinaryNode(44)
	tree.Root.Left.Right = newBinaryNode(2)

	tree.Root.Right.Left = newBinaryNode(100)
	tree.Root.Right.Right = newBinaryNode(7)

	return tree
}
