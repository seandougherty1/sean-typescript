export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}

const pi:number = 3.142

export function calcAreaCircle(width: number,): number {
    const radius: number = width/2
    return (Math.pow(radius, 2) * pi)
}
