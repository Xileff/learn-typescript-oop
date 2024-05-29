class Game {
  constructor(private name: string, private releaseYear: number) {}

  getName(): string {
    return this.name;
  }

  getReleaseYear(): number {
    return this.releaseYear;
  }
}

export default Game;
