"use strict";

//Complete this algo
const isLoop = linkedlist => {
  const container = {};
  let result = false;

  let currentNode = linkedlist.head;

  while (currentNode) {
    if (container[currentNode.value]) {
      result = true;
      break;
    }
    container[currentNode.value] = currentNode.value;
    currentNode = currentNode.next;
  }
  return result;
};
/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
