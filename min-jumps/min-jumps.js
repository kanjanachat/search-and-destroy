'use strict';

// Complete this algo
const minJumps = arr => {
  let currentIndex = 0
  let counter = 0
  while(currentIndex < arr.length) {
    // let obj = {}
    let biggestNumIndex = 0
    let furthestStep = 0
    for (let i = currentIndex+1; i < (currentIndex + arr[currentIndex]); i++) {
      if ((arr[i] - (arr[currentIndex] - i)) > furthestStep) {
        furthestStep = (arr[i] - (arr[currentIndex] - i))
        biggestNumIndex = i
      }
    }
    currentIndex = biggestNumIndex
    counter++
  }
  return counter
};

module.exports = minJumps