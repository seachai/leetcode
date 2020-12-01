/*
Find the maximum depth of an array using DFS

array = [3,[6,[7]],2]
output = 3
*/

const array = [3, [6, [7]], 2];

const maxDepth = (arr) => {
  if (!Array.isArray(arr)) return;
  // count the depth
  let depth = 1;

  // loop thru the array
  for (let i = 0; i < arr.length; i++) {
    // if current element is an array
    if (Array.isArray(arr[i])) {
      // add the return value to current depth
      depth += maxDepth(arr[i]);
    }
  }
  // return max depth
  return depth;
};

maxDepth(array);
