class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  contains(data) {
    // stop condition null or val == data
    console.log('It is: ');
    if(data === this.data){
      return data;
    }

    if(data < this.data && this.left) {
      return this.left.contains(data);
    } else if(data > this.data && this.right) {
      return this.right.contains(data);
    } 
    
    return null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  insertRecursive(data) {
    let node = this;
    let previousNode = null;

    while(node) {
      previousNode = node;

      if( data < node.data) {
        node = node.left;
      }else if (data > node.data) {
        node = node.right;
      }
    }

    if(data < previousNode.data) {
      previousNode.left = new Node(data);
    } else if( data > previousNode.data) {
      previousNode.right = new Node(data);
    }
  }
} // End Node

module.exports = Node;
