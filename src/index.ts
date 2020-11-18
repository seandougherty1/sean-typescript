import * as winston from "winston";


const simpleLogger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});

function sayHello(name: string): void {
    simpleLogger.info(`Hello ${name}`)
}

sayHello('Mr Sharp')

import {SimpleStringGraph, depthFirstSearch, breadthFirstSearch}
    from "comp-sci-maths-lib/dist/";
import { getStringVertex } from "comp-sci-maths-lib/dist/common";

const myGraph = new SimpleStringGraph();
myGraph.addLink('A', 'B')
myGraph.addLink('B', 'C')
myGraph.addLink('A', 'D')
myGraph.addLink('C', 'D')

const dfs: string[] = []
depthFirstSearch(myGraph,
    getStringVertex('A'), x => dfs.push(x.value));

simpleLogger.info('DFS:' + dfs);

let bfs: string[] = []
breadthFirstSearch(myGraph, getStringVertex('B'), x => bfs.push(x.value));
simpleLogger.info('BFS:' + bfs);