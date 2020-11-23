// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// Analyze the time and space complexities of your solution.

// Example:

// input: arr = [4, 6, 10, 15, 16], lim = 21

// output: [3, 1] # since these are the indices of the # weights 6 and 15 whose sum equals to 21

const arr = [4, 4, 1];
const lim = 5;

function getIndicesOfItemWeights(arr, limit) {
  // TC: O(n)
  // SC: O(n)
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let difference = limit - arr[i];
    if (map.has(difference)) {
      return [i, map.get(difference)];
    } else {
      map.set(arr[i], i);
    }
  }
  return [];
}

getIndicesOfItemWeights(arr, lim);
