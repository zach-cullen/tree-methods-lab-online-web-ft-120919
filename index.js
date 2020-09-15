function inOrder(node) {
  // if left go left
  if (node.left !== null) {
    inOrder(node.left)
  }
    console.log(node.data)
  if (node.right !== null) {
    inOrder(node.right)
  }
}

function findOrAdd(thisNode, newNode) {
  // return true if node exists with data
  if (newNode.data === thisNode.data) {
    return true
  }
  
  // compare and go deeper or add new new node
  if (newNode.data < thisNode.data) {
    if (thisNode.left) {
      return findOrAdd(thisNode.left, newNode)
    } else {
      thisNode.left = newNode
    }
  } else {
    if (thisNode.right) {
      return findOrAdd(thisNode.right, newNode)
    } else {
      thisNode.right = newNode
    }
  }
}

function min(node) {
  if (node.left == null) {
    return node
  } else {
    return min(node.left)
  }
}

function max(node) {
  if (node.right == null) {
    return node
  } else {
    return max(node.right)
  }
}