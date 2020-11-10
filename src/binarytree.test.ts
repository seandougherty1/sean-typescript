import BinaryTree from "comp-sci-maths-lib/dist/dataStructures/binaryTree/BinaryTree";
import traverseInOrder from "comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traverseInOrder"
import traversePostOrder from "comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePostOrder";
import traversePreOrder from "comp-sci-maths-lib/dist/algorithms/binaryTreeTraversal/traversePreOrder"
test('Binary tree', () => {
    let myTree = new BinaryTree<number>((a,b) => a - b);
    myTree.add(6)
    myTree.add(9)
    myTree.add(7);
    [1,4,8,16].forEach(x => myTree.add)

    expect(myTree.contains(9)).toBeTruthy();
    expect(myTree.contains(17)).toBeFalsy();
})


test('Binary tree in order', () => {
    let myTreeOrder = new BinaryTree<number>((a,b) => a - b);
    myTreeOrder.add(6)
    myTreeOrder.add(9)
    myTreeOrder.add(13)
    myTreeOrder.add(19)
    myTreeOrder.add(21)
    myTreeOrder.add(7);
    [].forEach(x => myTreeOrder.add)

    expect(myTreeOrder.contains(9)).toBeTruthy();
    expect(myTreeOrder.contains(17)).toBeFalsy();
})

