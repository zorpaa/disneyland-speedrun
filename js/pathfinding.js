// ====================
// Disneyland Pathfinding
// ====================

// Finds the shortest path between two nodes
// Returns:
// {
//   path: ["hub", "fantasyland", "peterPan"],
//   distance: 3
// }

function findPath(start, target) {

  const distances = {};
  const previous = {};
  const unvisited = new Set();

  // Initialize nodes
  for (const node in nodes) {
    distances[node] = Infinity;
    previous[node] = null;
    unvisited.add(node);
  }

  distances[start] = 0;


  while (unvisited.size > 0) {

    // Find closest unvisited node
    let current = null;

    for (const node of unvisited) {

      if (
        current === null ||
        distances[node] < distances[current]
      ) {
        current = node;
      }

    }


    // Stop if unreachable
    if (current === null) {
      break;
    }


    // Stop once target is reached
    if (current === target) {
      break;
    }


    unvisited.delete(current);


    // Check connected nodes
    for (const connection of nodes[current].connections) {

      const distance =
        distances[current] + connection.time;


      if (distance < distances[connection.node]) {

        distances[connection.node] = distance;

        previous[connection.node] = current;

      }

    }

  }


  // Rebuild path
  const path = [];

  let current = target;


  while (current !== null) {

    path.unshift(current);

    current = previous[current];

  }


  return {
    path: path,
    distance: distances[target]
  };

}
