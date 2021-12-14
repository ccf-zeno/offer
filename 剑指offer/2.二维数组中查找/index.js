function findRepeat(arr, target) {
  if (!arr[0]) return false;
  const length = arr[0].length - 1;

  for (let i = length; i >= 0; i--) {
    if (arr[0][i] === target) {
      return true;
    }
    if (arr[0][i] < target) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[j][i] === target) {
          return true;
        }
      }
    }
  }

  return false;
}

const arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
];

console.log(findRepeat(arr, 7));
