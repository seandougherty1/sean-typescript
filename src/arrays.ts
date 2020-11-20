import { simpleLogger } from "comp-sci-maths-lib/dist/common";

simpleLogger.info('Hello Arrays!')

const myGrid : string[][] = [];

for(let r = 0; r<6; r++){
    const newRow :string[] = []

    for(let c = 0; c<4; c++){
        newRow.push('x')
    }
    myGrid.push(newRow);
}

const row = 1;
const column = 1;

myGrid[row][column] = '0'

gridToString => (grid: any[][]){
    let asString = '[';
    for(let row = 0; row<grid.length; row++){
        asString += '['
        for (let column = 0; column<grid[row].length; column++){
            
        }
    }
}



simpleLogger.info('My Grid:', JSON.stringify(myGrid));


