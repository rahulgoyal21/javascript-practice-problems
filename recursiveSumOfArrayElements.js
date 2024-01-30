const array = [1, 2, 3, 4, 5];

/**
 * ! slice does not change the original array
 * ! while splice change the original array and return the item removed from array
 */

function recursiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  } else return arr[0] + recursiveSum(arr.slice(1));
}

console.log(recursiveSum(array));
