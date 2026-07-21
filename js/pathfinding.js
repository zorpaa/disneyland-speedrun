function findPath(start, goal) {

  if (start === goal) {

    return {
      path: [start],
      distance: 0
    };

  }


  const queue = [start];

  const visited = {};

  const previous = {};

  const distances = {};


  visited[start] = true;

  distances[start] = 0;



  while (queue.length > 0) {


    const current =
      queue.shift();


    const node =
      nodes[current];


    if (!node) {
      continue;
    }



    for (const connection of node.connections) {


      const next =
        connection.node;



      if (!visited[next]) {


        visited[next] = true;


        previous[next] = current;


        distances[next] =
          distances[current] + 1;



        queue.push(next);


      }


    }


  }



  if (!visited[goal]) {


    console.error(
      "No path found:",
      start,
      "to",
      goal
    );


    return {
      path: [],
      distance: Infinity
    };

  }



  const path = [];


  let current = goal;


  while (current) {


    path.unshift(current);


    current =
      previous[current];


  }



  return {

    path: path,

    distance: distances[goal]

  };

}
