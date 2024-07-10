export class BinaryNode<T> {
  val: T;
  left: BinaryNode<T> | undefined;
  right: BinaryNode<T> | undefined;

  constructor(value: T) {
    this.val = value;
    this.left = this.right = undefined;
  }
}

export class BinaryTree<T> {
  root: BinaryNode<T> | undefined;

  constructor(root: BinaryNode<T>) {
    this.root = root;
  }
}
