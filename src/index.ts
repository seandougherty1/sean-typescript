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

import {SimpleStringGraph, depthFirstSearch}
    from "comp-sci-maths-lib/dist/";
import { getStringVertex } from "comp-sci-maths-lib/dist/common";

const myGraph = new SimpleStringGraph();
myGraph.addLink('A', 'B')
myGraph.addLink('B', 'C')
myGraph.addLink('A', 'D')

const dfs: string[] = []
depthFirstSearch(myGraph,
    getStringVertex('A'), x => dfs.push(x.value));

simpleLogger.info(dfs);