import Node from "./node.js";

// Class linked list
class LinkedList {
  headNode = null;

  prepend(value) {
    // New node reference headNode node
    const node = new Node(value, this.headNode);

    // HeadNode node reference new node
    this.headNode = node;
  }
  
  // adds a new node containing value to the end of the list
  append(value) {
    const node = new Node(value);

    // If head == null. Prepend node as first list item
    if (this.headNode === null) {
      this.prepend(value);
      return;
    }
        
    let tmp = this.headNode;

    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    // node by default references null
    tmp.nextNode = node;
  }

  // returns the total number of nodes in the list
  size() {
    // Declare variables for number of nodes and node iterator
    let i = 0;
    let tmp = this.headNode;

    // Excecute while tmp is not null, i.e. end of list
    while (tmp !== null) {
      tmp = tmp.nextNode;
      i++;
    }

    return i;
  }

  // returns the first node in the list
  head() {
    return this.headNode;
  }

  // returns the last node in the list
  tail() {
    // If head is null, there is no list. Throw error
    let tmp = this.headNode;

    // If node reference null, it is the last node
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    return tmp;
  }

  // returns the node at the given index
  at(index) {
    let tmp = this.headNode;
    let i = 0;

    while (tmp !== null && i !== index) {
      tmp = tmp.nextNode;
      i++;
    }
  }

  // removes the last element from the list
  pop() {
    // If head is null, there is no list. Throw error
    let cur = null;
    let tmp = this.headNode;

    // If node reference null, it is the last node
    while (tmp !== null) {
      cur = tmp;
      tmp = tmp.nextNode;
    }

    // Do not reference last node in list anymore
    cur.nextNode = null;
    // Return removed node
    return tmp;
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let tmp = this.headNode;

    while (tmp !== null) {
      if (tmp === value) return true;

      tmp = tmp.nextNode;
    }

    return false;
  }

  // returns the index of the node containing value, or null if not found.
  find(value) {
    let i = 0;
    let tmp = this.headNode;

    while (tmp !== null) {
      if (tmp === value) return i;

      tmp = tmp.nextNode;
      i++;
    }

    return null;
  }

  // represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let str = "";
    let tmp = this.headNode;

    while (tmp !== null) {
      str += `(${tmp.value}) -> `;

      tmp = tmp.nextNode;
    }

    str += "null";

    return str;
  }
}

export default LinkedList;