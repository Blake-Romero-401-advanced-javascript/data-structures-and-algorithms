'use strict'

const { Graph } = require('../graph/graph')

class DepthFirst extends Graph {
  constructor() {
    super()
  }

  depthFirstTraversal(node, visited = new Set()) {
    visited.add(start)
    let collection = [];

    const destinations = adjacencyList.get(node);
    //looping over the edges of the adjacency list
    for (const destination of destinations) {
      if(!visited.has(destination)) {
        collection.push(destination.value);
        this.depthFirstTraversal(destination, visited);
      }
    }
    return collection;
  }
}

module.exports = DepthFirst;

// thanks to https://www.youtube.com/watch?v=cWNEl4HE2OE