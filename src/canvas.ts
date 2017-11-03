import { isAlive, ICell } from './model/cell';

export const GridCount: number = 19;
export const GridSize: number = 10;

export function drawGame(parentDivId: string, aliveCells: ICell[]): void {
    const gameElement: HTMLElement = document.getElementById(parentDivId);
    gameElement.innerHTML = '';
    for (let x = 0; x < GridCount; x++) {
        for (let y = 0; y < GridCount; y++) {
            const cellDiv: HTMLElement = document.createElement('div');
            Object.assign(cellDiv.style, {
                position: 'absolute',
                left: x * GridSize + 'px',
                top: y * GridSize + 'px',
                width: GridSize + 'px',
                height: GridSize + 'px',
                background: isAlive(x, y, aliveCells) ? 'black' : 'gray'
            });

            gameElement.appendChild(cellDiv);
        }
    }
}
