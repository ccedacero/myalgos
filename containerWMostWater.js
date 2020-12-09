// Container With Most Water
// Medium

// 7699

// 639

// Add to List

// Share
// Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).n vertical lines are drawn such that the two endpoints of the line i is at(i, ai) and(i, 0).Find two lines, which, together with the x - axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

var maxArea = function (height) {
    let maxArea = 0;
    // for(let i =0; i< height.length;i++){
    //     for(let j = i+1; j < height.length;j++){
    //         let ht = Math.min(height[i],height[j]);
    //         let width = j-i;
    //         let area = ht * width; 
    //         maxArea = Math.max(area,maxArea);
    //     }
    // }

    let p1 = 0;
    let p2 = height.length - 1;

    while (p1 < p2) {
        let area = (p2 - p1) * Math.min(height[p1], height[p2]);
        maxArea = Math.max(area, maxArea);
        if (height[p1] > height[p2]) {
            p2--;
        } else {
            p1++;
        }
    }
    return maxArea;
};