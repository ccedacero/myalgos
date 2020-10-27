function maxHeight(wallPositions, wallHeights) {
    let height = [];
    let first = 0; 
    let second = 1; 
      while(second < wallPositions.length) {
          let differece = wallPositions[second] - wallPositions[first];
          console.log(differece)
          if(differece === 2) {
            height.push(wallHeights[first]+ 1)
          }
          if(differece === 3) {
            height.push(wallHeights[first],wallHeights[second]-1)
          }
          //     let right = wallHeights.length-1; 
          //     while(wallPositions[left] < wallPositions[second]) {
          //        height.push(wallHeights[left]+wallHeights[right])
          //        left++
              }

        first++;
        second++;
        console.log(height)
      } 
  

    let wall = [1,2,4,7];
    let wallH = [4,6,8,11];

console.log(maxHeight(wall,wallH))