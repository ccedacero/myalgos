function countSmileys(arr) {
  let chars = arr.toString();
  let smileys = chars.split(",");
  let smallSet = [];
  let largeSet = [];

  if (arr.length === 0) {
    return 0;
  }
  for (let key of smileys) {
    if (key.length === 2) {
      smallSet.push(key);
    } else {
      largeSet.push(key);
    }
  }
  let smallCount = 0;
  for (let i = 0; i < smallSet.length; i++) {
    let eyes = smallSet[i][0] === ":" || smallSet[i][0] === ";";
    let smile = smallSet[i][1] === ")" || smallSet[i][1] === "D";
    if (eyes === smile) {
      smallCount++;
    }
  }

  let largeCount = 0;
  for (let j = 0; j < largeSet.length; j++) {
    let eyes = largeSet[j][0] === ":" || largeSet[j][0] === ";";
    let nose = largeSet[j][1] === "-" || largeSet[j][1] === "~";
    let smile = largeSet[j][2] === ")" || largeSet[j][2] === "D";
    if (eyes === nose && eyes === smile) {
      largeCount++;
    }
  }
  return smallCount + largeCount;
}
