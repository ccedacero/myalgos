// Compare the Triplets

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let aCount = 0;
  let bCount = 0;
  let count = 0;
  while (count <= 3) {
    if (a[count] > b[count]) aCount++;
    if (b[count] > a[count]) bCount++;
    count++;
  }
  return [aCount, bCount];
}

// A very big sum
// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  let sum = 0;

  for (let num of ar) {
    sum += num;
  }
  return sum;
}
