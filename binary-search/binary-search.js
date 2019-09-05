'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  // let result = false;
  let middleIndex = Math.floor(array.length / 2);
  // if (target === array[middleIndex]) {
  //   result = true;
  // } else {
  //   if (target < array[middleIndex]) {
  //     for (let i = 0; i < middleIndex; i++) {
  //       if (target === array[i]) {
  //         result = true;
  //       }
  //     }
  //   } else {
  //     for (let i = middleIndex + 1; i < array.length; i++) {
  //       if (target === array[i]) {
  //         result = true;
  //       }
  //     }
  //   }
  // }
  // return result;

  //base case
  if (array.length === 1) {
    if (target === array[0]) {
      return true;
    } else {
      return false;
    }
  }

  if (target === array[middleIndex]) {
    return true;
  } else {
    if (target < array[middleIndex]) {
      return binarySearch(array.slice(0, middleIndex), target);
    } else {
      return binarySearch(array.slice(middleIndex), target);
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
