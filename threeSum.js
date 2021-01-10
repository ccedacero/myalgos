var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                arr.push([nums[left], nums[right], nums[i]])
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return arr;
}; i