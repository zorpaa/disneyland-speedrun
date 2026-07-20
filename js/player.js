class Player {
  constructor() {
    this.currentNode = "entrance";

    this.x = 0;
    this.y = 0;

    this.speed = 120;

    this.completed = [];

    this.time = 8 * 60;
  }
}

const player = new Player();
