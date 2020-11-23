// Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.
//
// Examples:
//
// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2
//
// input: arr = [-1,0,3,6]
// output: -1 # since no index in arr satisfies arr[i] == i.
//
// Constraints:
//
//     [time limit] 5000ms
//
//     [input] array.integer arr
//         1 ≤ arr.length ≤ 100
//
//     [output] integer

/*
Input: Array of unique integers
Output: Element in the array else -1
Constraints: Sorted or unsorted
Edge: Empty array

arr = [-8,0,2,5] ? arr[2] == 2 : -1
idx = [ 0,1,2,3]
dif = [-8,-1,0,2]
dif = arr - idx

TC: (log n)
SC: O(n)
BS, target = 0;
const diff = [-8,-1,0,2];


return the lowest index i?

iterate thru array
  if current element === index
    return element
return -1
*/

const array = [-8, 0, 2, 5];

function indexEqualsValueSearch(arr) {
  // TC: O(n)
  // SC: O(1)
  // if (!arr) return -1;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === i) {
  //     return arr[i];
  //   }
  // }
  // return -1;

  // TC: O(log n)
  // SC: O(n) || O(1)

  const diff = [];
  // Get the difference between the elements and index
  for (let i = 0; i < arr.length; i++) {
    diff[i] = arr[i] - i;
  }

  // Create a helper function to binary search
  const binarySearch = (start, end) => {
    const mid = Math.floor((start + end) / 2);
    if (diff[mid] === 0) return arr[mid];
    if (end === start) return false;
    // Search the left side
    if (diff[mid] > 0) {
      return binarySearch(start, mid - 1);
    }
    // Search the right side
    if (diff[mid] < 0) {
      return binarySearch(mid + 1, end);
    }
  };
  return binarySearch(0, diff.length - 1);
}

indexEqualsValueSearch(array);
