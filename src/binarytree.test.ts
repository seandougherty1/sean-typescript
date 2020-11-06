import BinaryTree from "comp-sci-maths-lib/dist/dataStructures/binaryTree/BinaryTree";
test('Binary tree', () => {
    let myTree = new BinaryTree<number>((a,b) => a - b);
    myTree.add(6)
    myTree.add(9)
    myTree.add(7);
    [1,4,8,16].forEach(x => myTree.add)

    expect(myTree.contains(9)).toBeTruthy();
    expect(myTree.contains(17)).toBeFalsy();
})


