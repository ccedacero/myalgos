var maxDepth = function (root) {
    return maxHeight(root);
};

function maxHeight(node) {
    if (!node) return 0;
    let left = maxHeight(node.left);
    let right = maxHeight(node.right);
    return Math.max(left, right) + 1;
}