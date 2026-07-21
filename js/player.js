// ====================
// Player System
// ====================

class Player {

  constructor() {

    this.currentNode = "entrance";

    this.x = 0;
    this.y = 0;


    this.speed = 180;


    this.time = 8 * 60;


    this.completed = [];


    this.path = [];

    this.pathIndex = 0;


    this.moving = false;


    this.destination = null;

  }


  startMovement(path) {

    this.path = path;

    this.pathIndex = 1;

    this.moving = true;

  }


  update() {

    if (!this.moving) {
      return;
    }


    const nextNode =
      nodes[this.path[this.pathIndex]];


    const dx = nextNode.x - this.x;
    const dy = nextNode.y - this.y;


    const distance =
      Math.sqrt(dx * dx + dy * dy);


    if (distance < this.speed / 60) {

      this.x = nextNode.x;
      this.y = nextNode.y;


      this.currentNode =
        nextNode.id;


      this.pathIndex++;


      if (this.pathIndex >= this.path.length) {

        this.moving = false;

        arriveAtDestination();

      }


      return;

    }


    this.x +=
      (dx / distance) *
      (this.speed / 60);


    this.y +=
      (dy / distance) *
      (this.speed / 60);

  }

}


const player = new Player();
