class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  
  constructor(){
    this.head = null;
  }

  insert(val){
    //takes any val and adds new node to the head
    this.head = new Node(val, this.head);
  }

  append(value){
    this.head = new Node(value, this.head);
  }

  includes(valExists){
    //checks for value included in t he list
    //loop through all existing heads
    let currentNode = this.head;
    while(currentNode){
      if(currentNode === valExists){
        // console.log('I am in ==========');
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
    //check for value
    //return if boolean
  }

  toString(){
    //returns a string of all the values in the list formatted as "{ a } -> { b } -> { c } -> NULL"
    let currentNode = this.head;
    let string = '';

    while(currentNode){
      string += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    return `${string}NULL`;

  }

}

module.exports = LinkedList;