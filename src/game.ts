import { World } from './model/world';
import { drawGame, GridCount, GridSize } from './canvas';

export type Position = {
    x: number;
    y: number;
};

export class Game {
    private world: World;

    constructor(gameId: string, initCellPositions: Position[], interval: number) {
        this.world = new World(GridCount, initCellPositions.map(initPosition => {
            return {
                position: initPosition,
                isAlive: true
            };
        }));

        const size = GridCount * GridSize;
        const gameDiv: HTMLElement = document.createElement('div');
        gameDiv.id = gameId;
        Object.assign(gameDiv.style, {
            position: 'relative',
            margin: '20px',
            width: size + 'px',
            height: size + 'px'
        });

        document.body.appendChild(gameDiv);
        drawGame(gameId, this.world.getAliveCells());
        setInterval(() => { this.update(gameId); }, interval);
    }

    update(gameId: string): void {
        this.world.createNextGeneration();
        drawGame(gameId, this.world.getAliveCells());
    }
}
