import { ICell, equalCells } from './cell';
import { Board } from './board';

export class World {
    private aliveCells: ICell[] = [];
    private board: Board;

    constructor(size: number, aliveCells: ICell[]) {
        this.aliveCells = aliveCells;
        this.board = new Board(size, aliveCells);
    }

    getAliveCells(): ICell[] {
        return this.aliveCells;
    }

    createNextGeneration(): void {
        const nextGenerationAliveCell = [];
        this.aliveCells.forEach((aliveCell) => {
            const numberOfAliveNeighbours = this.board.getNeighbours(aliveCell.position, true).length;
            if (numberOfAliveNeighbours >= 2 && numberOfAliveNeighbours <= 3)
                nextGenerationAliveCell.push({
                    position: aliveCell.position,
                    isAlive: true
                });
        });

        this.getAllDeadNeighbours().forEach((deadCell: ICell) => {
            if (this.board.getNeighbours(deadCell.position, true).length === 3)
                nextGenerationAliveCell.push({
                    position: deadCell.position,
                    isAlive: true
                });
        });

        this.aliveCells = nextGenerationAliveCell;
        this.board.build(this.aliveCells);
    }

    private getAllDeadNeighbours(): ICell[] {
        const deadNeighbors: ICell[] = [];
        this.aliveCells.forEach((aliveCell) => {
            this.board.getNeighbours(aliveCell.position, false).forEach((deadCell) => {
                if (deadNeighbors.filter((deadNeighbour: ICell) => {
                    return equalCells(deadNeighbour, deadCell);
                }).length === 0)
                    deadNeighbors.push(deadCell);
            });
        });
        return deadNeighbors;
    }
}
