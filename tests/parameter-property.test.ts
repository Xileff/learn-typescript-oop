import Game from '../src/Game';

describe('Parameter Property', () => {
  it('should support parameter property on constructor', () => {
    const game: Game = new Game('Genshin Impact', 2020);
    expect(game.getName()).toBe('Genshin Impact');
    expect(game.getReleaseYear()).toBe(2020);
  });
});
