import { Board } from '../../src/model/board';

describe('Board', () => {
    let board: Board;

    beforeEach(() => {
        board = new Board(3, [{ position: { x: 1, y: 0 }, isAlive: true }]);
    });

    it('init board', () => {
        expect(board.cells).toEqual([
            [
                { position: { x: 0, y: 0 }, isAlive: false },
                { position: { x: 0, y: 1 }, isAlive: false },
                { position: { x: 0, y: 2 }, isAlive: false }
            ],
            [
                { position: { x: 1, y: 0 }, isAlive: true },
                { position: { x: 1, y: 1 }, isAlive: false },
                { position: { x: 1, y: 2 }, isAlive: false }
            ],
            [
                { position: { x: 2, y: 0 }, isAlive: false },
                { position: { x: 2, y: 1 }, isAlive: false },
                { position: { x: 2, y: 2 }, isAlive: false }
            ]
        ]);
    });

    it('get alive cells', () => {
        const aliveNeighbours = board.getNeighbours({ x: 1, y: 1 }, true);
        expect(aliveNeighbours).toEqual([{ position: { x: 1, y: 0 }, isAlive: true }]);
    });

    it('get dead cells', () => {
        const deadNeighbours = board.getNeighbours({ x: 1, y: 1 }, false);
        expect(deadNeighbours).toEqual([
            { position: { x: 0, y: 0 }, isAlive: false },
            { position: { x: 0, y: 1 }, isAlive: false },
            { position: { x: 0, y: 2 }, isAlive: false },
            { position: { x: 1, y: 2 }, isAlive: false },
            { position: { x: 2, y: 0 }, isAlive: false },
            { position: { x: 2, y: 1 }, isAlive: false },
            { position: { x: 2, y: 2 }, isAlive: false }
        ]);
    });

});
