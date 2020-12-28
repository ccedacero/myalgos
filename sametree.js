var isSameTree = function (p, q) {
    const quequeQ = [q];
    const quequeP = [p];
    while (quequeP.length && quequeQ.length) {
        const pnode = quequeP.shift();
        const qnode = quequeQ.shift();
        if (pnode === null && qnode === null) continue;
        if (pnode === null || qnode === null) return false;
        if (pnode.val !== qnode.val) return false;
        quequeP.push(pnode.left);
        quequeP.push(pnode.right);
        quequeQ.push(qnode.left);
        quequeQ.push(qnode.right);
    }
    if (quequeQ.length !== quequeP.length) return false;
    return true
};