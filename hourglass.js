let arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// the key to solving hour glass is to note that we have 16 hour glasses
// and to realize that we can sum each hour glass at each iteration
// we can make it dynamic by making our row and column values dynamic based
// on the 4 hour glasses that we find at each row set of the 2nd, 6 item array
function hourglassSum(arr) {
  let sumArr = [];
  let row = 0;
  let column = 0;
  let x = 0;
  while (x < 16) {
    if (x === 4 || x === 8 || x === 12) {
      row++;
      column = 0;
    }
    let sum =
      arr[row][column] +
      arr[row][column + 1] +
      arr[row][column + 2] +
      arr[row + 1][column + 1] +
      arr[row + 2][column] +
      arr[row + 2][column + 1] +
      arr[row + 2][column + 2];
    sumArr.push(sum);
    x++;
    column++;
  }
  return Math.max(...sumArr);
}

console.log(hourglassSum(arr));
