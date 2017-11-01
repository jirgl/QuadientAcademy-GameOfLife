import { isAlive, ICell, Position } from './cell';

export class Board {
    cells: ICell[][] = [];
    size: number;

    constructor(size: number, aliveCells: ICell[]) {
        this.size = size;
        this.build(aliveCells);
    }

    getNeighbours(position: Position, aliveNeighbor: boolean): ICell[] {
        if (position.x < 1 || position.y < 1 || position.x > this.size - 2 || position.y > this.size - 2) {
            return [];
        }

        const neighbours: ICell[] = [];
        for (let x = position.x - 1; x <= position.x + 1; x++) {
            for (let y = position.y - 1; y <= position.y + 1; y++) {
                if (x === position.x && y === position.y)
                    continue;

                const isAlive = this.cells[x][y].isAlive;
                if (isAlive === aliveNeighbor)
                    neighbours.push({
                        position: { x, y },
                        isAlive: isAlive
                    });
            }
        }

        return neighbours;
    }

    build(aliveCells: ICell[]): void {
        this.cells = [];
        for (let x = 0; x < this.size; x++) {
            const row: ICell[] = [];
            for (let y = 0; y < this.size; y++) {
                row.push({
                    position: { x, y },
                    isAlive: isAlive(x, y, aliveCells)
                });
            }
            this.cells[x] = row;
        }
    }
}
