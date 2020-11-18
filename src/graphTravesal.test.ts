import graph from 'comp-sci-maths-lib/dist/dataStructures/graph/Graph';
import { StringGraphVertex} from "comp-sci-maths-lib/dist/types";
import Graph from 'comp-sci-maths-lib/dist/dataStructures/graph/Graph';
import { getStringVertex } from 'comp-sci-maths-lib/dist/common';

test('Simple Graph', () => {
    const myGraph: Graph<StringGraphVertex> = new Graph();

    const vertexA = getStringVertex('A');
    const vertexB = getStringVertex('B');
    const vertexC = getStringVertex('C');
    const vertexD= getStringVertex('D');
    const vertexE= getStringVertex('E');
    const vertexF= getStringVertex('F');
    const vertexH = getStringVertex('H');

    myGraph
        .addBiDirectionalEdge(vertexA, vertexB)
        .addBiDirectionalEdge(vertexA,vertexC)
        .addBiDirectionalEdge(vertexB, vertexD)
        .addBiDirectionalEdge(vertexB, vertexE)
        .addBiDirectionalEdge(vertexC, vertexD)
        .addBiDirectionalEdge(vertexD, vertexF)
        .addBiDirectionalEdge(vertexE, vertexF)
        .addBiDirectionalEdge(vertexF, vertexH)

    const numbers = [1,2,3,4];
    const squareNumbers = numbers.map(x => Math.pow(x, 2)).map(x => x/2 );
    // console.log('Square Numbers', squareNumbers);

    const outfromA = myGraph.getOutgoing(vertexA)
                .map(x => x.to)
                .map(o => o.value);

    ['B', 'C'].forEach(e => {
        expect(outfromA.includes(e)).toBeTruthy()
    })
    expect(outfromA.includes('H')).toBeFalsy()
})










