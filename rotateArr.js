//  Complete the rotLeft function below.
function rotLeft(a, d) {
  while (d > 0) {
    let temp = a.shift();
    a.push(temp);
    d--;
  }
  return a;
}
//arr = 1 2 3 4 5
// returns = 5 1 2 3 4
// move left with shift and push
