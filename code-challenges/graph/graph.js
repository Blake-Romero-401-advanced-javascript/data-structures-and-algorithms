'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = new Set();
  }
}

class Edge {
  constructor(origin, destination, weight) {
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;
  }
}

// Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:
class Graph {
  constructor() {
    this.vertices = new Set();
    this.edges = {};
    this.numberOfEdges = 0;
  }

//     AddNode()
//         Adds a new node to the graph
//         Takes in the value of that node
//         Returns the added node
  AddNode(node) {
    let newNode = new Node(node.value);
    this.vertices.add(newNode);
    this.edges[newNode] = [];
    return newNode;
  }

//     AddEdge()
//         Adds a new edge between two nodes in the graph
//         Include the ability to have a “weight”
//         Takes in the two nodes to be connected by the edge
//             Both nodes should already be in the Graph
  AddEdge(origin, destination, weight) {
    if(!this.edges[origin] || !this.edges[destination]) {
      return null;
    }
    let edge = new Edge(origin, destination, weight);
    this.edges[origin].push(edge);
    this.numberOfEdges++;
  }

//     GetNodes()
//         Returns all of the nodes in the graph as a collection (set, list, or similar)
  GetNodes() {
    return this.vertices;
  }

//     GetNeighbors()
//         Returns a collection of edges connected to the given node
//         Takes in a given node
//         Include the weight of the connection in the returned collection
  GetNeighbors() {
    return Object.values(this.edges).flat().filter(edge => edge.origin === newNode || edge.destination === newNode);
  }

//     Size()
//         Returns the total number of nodes in the graph
  Size() {
    return this.vertices.length;
  }

}






