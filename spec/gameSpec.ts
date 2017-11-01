import { Game } from '../src/game';

function delay(interval: number): Promise<number> {
    return new Promise<number>(resolve => {
        setTimeout(
            () => { resolve(); },
            interval);
    });
}

describe('Game', () => {

    it('call update in correct interval', async () => {
        const game = new Game('g1', [], 1000);
        const updateSpy = spyOn(game, 'update');
        await delay(2500);
        expect(updateSpy).toHaveBeenCalledTimes(2);
    });

});
