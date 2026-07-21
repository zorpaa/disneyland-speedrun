// ====================
// Player System
// ====================

class Player {

  constructor() {

    this.currentNode = "entrance";

    this.x = 0;
    this.y = 0;


    // Movement speed in pixels per second

    this.speed = 180;


    // Park time in minutes

    this.time = 8 * 60;


    // Completed rides

    this.completed = [];


    // Movement path

    this.path = [];

    this.pathIndex = 0;


    // Movement state

    this.moving = false;


    // Final destination

    this.destination = null;

  }



  startMovement(path) {

    if (!path || path.length < 2) {

      console.log(
        "No movement required"
      );

      return;

    }


    this.path = path;

    this.pathIndex = 1;

    this.moving = true;

  }



  update() {


    if (!this.moving) {

      return;

    }



    // Check if movement is complete

    if (
      this.pathIndex >= this.path.length
    ) {

      this.moving = false;

      arriveAtDestination();

      return;

    }



    const nextNodeID =
      this.path[this.pathIndex];


    const nextNode =
      nodes[nextNodeID];



    // Safety check

    if (!nextNode) {

      console.error(
        "Missing node:",
        nextNodeID
      );


      this.moving = false;

      this.path = [];

      return;

    }



    const dx =
      nextNode.x - this.x;


    const dy =
      nextNode.y - this.y;



    const distance =
      Math.sqrt(
        dx * dx +
        dy * dy
      );



    // Arrived at this node

    if (
      distance <= this.speed / 60
    ) 
    console.log(
  "Reached node:",
  nextNodeID
);
    {


      this.x =
        nextNode.x;


      this.y =
        nextNode.y;



      this.currentNode =
        nextNodeID;



      this.pathIndex++;


      return;

    }



    // Move toward node

    this.x +=
      (dx / distance) *
      (this.speed / 60);


    this.y +=
      (dy / distance) *
      (this.speed / 60);


  }

}



// Create player

const player = new Player();
