import { Game } from '../src/game';

describe('Game', () => {
    let game: Game;

    describe('With async/await', () => {

        beforeEach(() => {
            game = new Game('g1', [], 1000);
        });

        function delay(interval: number): Promise<number> {
            return new Promise<number>(resolve => {
                setTimeout(
                    () => { resolve(); },
                    interval);
            });
        }

        it('call update in correct interval', async () => {
            const updateSpy = spyOn(game, 'update');
            await delay(2500);
            expect(updateSpy).toHaveBeenCalledTimes(2);
        });

    })

    describe('With jasmine clock', () => {

        beforeEach(() => {
            jasmine.clock().install();
            game = new Game('g1', [], 1000);
        });

        afterEach(() => {
            jasmine.clock().uninstall();
        });

        it('call update in correct interval', () => {
            const updateSpy = spyOn(game, 'update');
            jasmine.clock().tick(2500);
            expect(updateSpy).toHaveBeenCalledTimes(2);
            jasmine.clock().uninstall();
        });

    });

});
