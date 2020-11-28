var merge = function (nums1, m, nums2, n) {
    let p1 = 0;
    let p2 = 0;
    while (p1 < nums1.length) {
        if (nums1[p1] > nums2[p2]) {
            nums1.splice(p1, 0, nums2[p2])
            nums1.pop();
            nums2.shift();
            p1++
        } else {
            p1++
        }
    }
    if (nums2.length > 0) {
        nums1.splice(nums1.length - nums2.length, nums2.length, ...nums2)
    }
};