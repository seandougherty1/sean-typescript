import Stack from 'comp-sci-maths-lib/dist/dataStructures/stack/Stack'

test('Stack', () => {
    let myStack: Stack<number> = new Stack<number>(); 

    myStack.push(3)
    myStack.push(4)

    let pop1 = myStack.pop();

    expect(pop1).toBe(4);
})
