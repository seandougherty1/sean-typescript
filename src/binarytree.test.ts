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
    
    let inOrderResults: number[] = []
    traverseInOrder(myTreeOrder, x => inOrderResults.push(x))
    expect(inOrderResults).toEqual([6,7,9,13,19,21]);

    let preOrderResults: number[] = []
    traverseInOrder(myTreeOrder, x => preOrderResults.push(x))
    expect(preOrderResults).toEqual([6,9,13,19,21,7]);


})


test('Binary tree in order', () => {
    let myTreePreOrder = new BinaryTree<number>((a,b) => a - b);
    myTreePreOrder.add(6)
    myTreePreOrder.add(9)
    myTreePreOrder.add(13)
    myTreePreOrder.add(19)
    myTreePreOrder.add(21)
    myTreePreOrder.add(7);
    [].forEach(x => myTreePreOrder.add)

    expect(myTreePreOrder.contains(9)).toBeTruthy();
    expect(myTreePreOrder.contains(17)).toBeFalsy();
    expect(myTreePreOrder.contains(13)).toBeTruthy();
})