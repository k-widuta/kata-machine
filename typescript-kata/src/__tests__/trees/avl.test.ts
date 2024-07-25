import { AVLNode, AVLTree } from "src/trees/avl-tree";
import { TreeFormatter } from "src/trees/treeFormatter";
import { describe, expect, test } from "vitest";


describe("AVL Tree test suite", () => {
    const formatter = new TreeFormatter();

    test("Deletion", function() {
        const tree = new AVLTree<number>();

        tree.insert(50);
        tree.insert(69);
        tree.insert(42);
        tree.insert(66);
        tree.insert(75);
        format("Tree after insertions", tree, formatter);

        expect(tree.delete(420)).toEqual(undefined);
        // tree.delete(42);
        expect(tree.delete(42)).toEqual(42);
        format("Tree after deleting 42", tree, formatter);
    })

    test("Insertion", function() {
        const tree = new AVLTree<number>();

        tree.insert(50);
        tree.insert(69);
        tree.insert(42);
        tree.insert(66);
        tree.insert(75);
        tree.insert(59);
        tree.insert(420);
        // format("Tree after insertions", tree, formatter);
        
        expect(tree.root?.height).toBeLessThanOrEqual(4);

    })

    test("LR Rotation", function() {
        const tree = new AVLTree<number>();

        const node1 = new AVLNode(50);
        const node2 = new AVLNode(42);
        const node3 = new AVLNode(75);
        const node4 = new AVLNode(66);
        const node5 = new AVLNode(59);
        const node6 = new AVLNode(69);
        const node7 = new AVLNode(420);

        tree.root = node3;
        node3.left = node1;
        node3.right = node7;
        node1.left = node2;
        node1.right = node4;
        node4.left = node5;
        node4.right = node6;

        node3.height = 4;
        node1.height = 3;
        node4.height = 2;

        // format("Entry tree", tree, formatter);

        tree.RRRotate(node1, node3);
        // format("Tree after RR rotation: \n ", tree, formatter);

        tree.LLRotate(tree.root, null);
        // format("Tree after LL rotation: \n ", tree, formatter);

        expect(tree.root.height).toEqual(3);
        expect(tree.getBalanceFactor(tree.root)).toEqual(0)
        expect(node1.height).toEqual(2);
        expect(node3.height).toEqual(2);
    })

    test("RL Rotation", function() {
        const tree = new AVLTree<number>();

        const node1 = new AVLNode(50);
        const node2 = new AVLNode(42);
        const node3 = new AVLNode(75);
        const node4 = new AVLNode(66);
        const node5 = new AVLNode(59);
        const node6 = new AVLNode(69);
        const node7 = new AVLNode(420);

        tree.root = node1;
        node1.left = node2;
        node1.right = node3;
        node3.left = node4;
        node3.right = node7;
        node4.left = node5;
        node4.right = node6;

        node1.height = 4;
        node3.height = 3;
        node4.height = 2;

        // format("Entry tree", tree, formatter);

        tree.LLRotate(node3, node1);
        // format("Tree after LL rotation: \n ", tree, formatter);

        tree.RRRotate(tree.root, null);
        // format("Tree after RR rotation: \n ", tree, formatter);

        expect(tree.root.height).toEqual(3);
        expect(tree.getBalanceFactor(tree.root)).toEqual(0)
        expect(node1.height).toEqual(2);
        expect(node3.height).toEqual(2);
    })

    test("RR Rotation with children", function() {
        const avlTree = createRRTree(true);

        if (!avlTree.root) {
            throw new Error("No root in the tree");
        }
        
        // const formatter = new TreeFormatter();
        //
        // console.log("Before rotation: \n",formatter.topDown(avlTree.root))
        avlTree.RRRotate(avlTree.root, null);
        // console.log("After rotation: \n",formatter.topDown(avlTree.root))

        expect(avlTree.getBalanceFactor(avlTree.root)).toEqual(0);
        expect(avlTree.root.height).toEqual(3);
        expect(avlTree.root.left?.height).toEqual(2);
        expect(avlTree.root.right?.height).toEqual(2);
        expect(avlTree.root.right?.left?.height).toEqual(1);
        expect(avlTree.root.right?.right?.height).toEqual(1);
    })

    test("RR Rotation", function() {
        const avlTree = createRRTree(false);

        if (!avlTree.root) {
            throw new Error("No root in the tree");
        }

        // const formatter = new TreeFormatter();

        // console.log("Before rotation: \n",formatter.topDown(avlTree.root))
        avlTree.RRRotate(avlTree.root, null);
        // console.log("After rotation: \n",formatter.topDown(avlTree.root))

        expect(avlTree.root.val).toEqual(69);
        expect(avlTree.getBalanceFactor(avlTree.root)).toEqual(0);
        expect(avlTree.root.height).toEqual(2);
        expect(avlTree.root.height).toEqual(2);
        expect(avlTree.root.left?.val).toEqual(42);
        expect(avlTree.root.right?.val).toEqual(420);
        expect(avlTree.root.left?.height).toEqual(1);
        expect(avlTree.root.right?.height).toEqual(1);
    })

    test("LL Rotation with children", function() {
        const avlTree = createLLTree(true);

        if (!avlTree.root) {
            throw new Error("No root in the tree");
        }
        
        //const formatter = new TreeFormatter();

        //console.log("Before rotation: \n",formatter.topDown(avlTree.root))
        avlTree.LLRotate(avlTree.root, null);
        //console.log("After rotation: \n",formatter.topDown(avlTree.root))

        expect(avlTree.getBalanceFactor(avlTree.root)).toEqual(0);
        expect(avlTree.root.height).toEqual(3);
        expect(avlTree.root.left?.height).toEqual(2);
        expect(avlTree.root.right?.height).toEqual(2);
        expect(avlTree.root.right?.left?.height).toEqual(1);
        expect(avlTree.root.right?.right?.height).toEqual(1);
    })

    test("LL Rotation", function() {
        const avlTree = createLLTree(false);

        if (!avlTree.root) {
            throw new Error("No root in the tree");
        }

        avlTree.LLRotate(avlTree.root, null);

        expect(avlTree.root.val).toEqual(69);
        expect(avlTree.getBalanceFactor(avlTree.root)).toEqual(0);
        expect(avlTree.root.height).toEqual(2);
        expect(avlTree.root.height).toEqual(2);
        expect(avlTree.root.left?.val).toEqual(42);
        expect(avlTree.root.right?.val).toEqual(420);
        expect(avlTree.root.left?.height).toEqual(1);
        expect(avlTree.root.right?.height).toEqual(1);
    })

    test("Getting the node balance factor", function() {
        const avlTree = createLLTree(false);
        if (!avlTree.root) {
            throw new Error("No root in the tree");
        }

        expect(avlTree.getBalanceFactor(avlTree.root)).toEqual(-2);
    })

    test("Getting the node height", () => {
        const node = new AVLNode(5);

        expect(node.height).toEqual(1);
    })
})

function format(message: string, tree: AVLTree<number>, formatter: TreeFormatter): void {
    message += ":\n"

    console.log(message, formatter.topDown(tree.root));
}

function createLLTree(hasChildren:boolean): AVLTree<number> {
    const avlTree = new AVLTree<number>();

    if (hasChildren) {
        const node1 = new AVLNode(420);
        const node2 = new AVLNode(69);
        const node3 = new AVLNode(42);
        const node4 = new AVLNode(22);
        const node5 = new AVLNode(46);
        const node6 = new AVLNode(97);
        const node7 = new AVLNode(699);

        avlTree.root = node1;
        node1.left = node2;
        node2.left = node3;
        node3.left = node4;
        node3.right = node5;

        node2.right = node6;
        node1.right = node7;

        node1.height = 4;
        node2.height = 3;
        node3.height = 2;



    } else {
        const node1 = new AVLNode(420);
        const node2 = new AVLNode(69);
        const node3 = new AVLNode(42);

        avlTree.root = node1;
        node1.left = node2;
        node2.left = node3;

        node1.height = 3;
        node2.height = 2;
    }


    return avlTree;
}
function createRRTree(hasChildren:boolean): AVLTree<number> {
    const avlTree = new AVLTree<number>();

    if (hasChildren) {
        const node1 = new AVLNode(42);
        const node2 = new AVLNode(69);
        const node3 = new AVLNode(420);
        const node4 = new AVLNode(9);
        const node5 = new AVLNode(46);
        const node6 = new AVLNode(97);
        const node7 = new AVLNode(699);


        avlTree.root = node1;
        node1.left = node4;
        node1.right = node2;
        node2.right = node3;
        node2.left = node5;
        node3.left = node6;
        node3.right = node7;

        node3.height = 2;
        node2.height = 3;
        node1.height = 4;

    } else {

        const node1 = new AVLNode(42);
        const node2 = new AVLNode(69);
        const node3 = new AVLNode(420);

        avlTree.root = node1;
        node1.right = node2;
        node2.right = node3;

        node1.height = 3;
        node2.height = 2;
    }

    return avlTree;
}
