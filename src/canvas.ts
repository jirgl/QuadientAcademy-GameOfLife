import { isAlive, ICell } from './model/cell';

export const GridCount: number = 19;
export const GridSize: number = 10;

export function drawGame(parentDivId: string, aliveCells: ICell[]): void {
    const gameElement: HTMLElement = document.getElementById(parentDivId);
    gameElement.innerHTML = '';
    for (let x = 0; x < GridCount; x++) {
        for (let y = 0; y < GridCount; y++) {
            const cellDiv: HTMLElement = document.createElement('div');
            const left = x * GridSize;
            const top = y * GridSize;
            const background = isAlive(x, y, aliveCells) ? 'black' : 'gray';
            cellDiv.style.cssText = 'position:absolute;left:' + left + 'px;top:' + top +
                'px;width:' + GridSize + 'px;height:' + GridSize + 'px;background:' + background;

            gameElement.appendChild(cellDiv);
        }
    }
}
