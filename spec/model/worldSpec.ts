import { World } from '../../src/model/world';

describe('World', () => {
    let world: World;

    beforeEach(() => {
        world = new World(5, [
            { position: { x: 1, y: 2 }, isAlive: true },
            { position: { x: 2, y: 2 }, isAlive: true },
            { position: { x: 3, y: 2 }, isAlive: true }
        ]);
    });

    it('create correct next generation', () => {
        world.createNextGeneration();
        expect(world.getAliveCells()).toEqual([
            { position: { x: 2, y: 2 }, isAlive: true },
            { position: { x: 2, y: 1 }, isAlive: true },
            { position: { x: 2, y: 3 }, isAlive: true }
        ]);

        world.createNextGeneration();
        expect(world.getAliveCells()).toEqual([
            { position: { x: 2, y: 2 }, isAlive: true },
            { position: { x: 1, y: 2 }, isAlive: true },
            { position: { x: 3, y: 2 }, isAlive: true }
        ]);
    });

});
