export type Position = {
    x: number;
    y: number;
};

export interface ICell {
    isAlive: boolean;
    position: Position;
}

export function equalCells(cell1: ICell, cell2: ICell): boolean {
    return cell1.position.x === cell2.position.x && cell1.position.y === cell2.position.y;
}

export function isAlive(x: number, y: number, aliveCells: ICell[]): boolean {
    let isAlive = false;
    aliveCells.forEach(cell => {
        if (cell.position.x === x && cell.position.y === y) {
            isAlive = true;
            return;
        }
    });

    return isAlive;
}
