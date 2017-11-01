import { equalCells, ICell } from '../../src/model/cell';

describe('Cell', () => {

    describe('Equal cells', () => {

        it('same position', () => {
            const cell1: ICell = { position: { x: 0, y: 0 }, isAlive: true };
            const cell2: ICell = { position: { x: 0, y: 0 }, isAlive: true };
            expect(equalCells(cell1, cell2)).toBe(true);
        });

        it('same position with different alive', () => {
            const cell1: ICell = { position: { x: 0, y: 0 }, isAlive: true };
            const cell2: ICell = { position: { x: 0, y: 0 }, isAlive: false };
            expect(equalCells(cell1, cell2)).toBe(true);
        });

        it('different position', () => {
            const cell1: ICell = { position: { x: 0, y: 0 }, isAlive: true };
            const cell2: ICell = { position: { x: 0, y: 1 }, isAlive: true };
            expect(equalCells(cell1, cell2)).toBe(false);
        });

    });

});
