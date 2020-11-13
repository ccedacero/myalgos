const canFormArray = function (arr, pieces) {
    let x = 0;
    let newArr = [];
    while (x < arr.length) {
        let n1 = arr[x];
        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i][x] === n1 || pieces[i][0] === n1) {
                newArr.push(pieces[i])
                x += pieces[i].length - 1;
            }
        }
        x++;
    }
    return JSON.stringify(arr) === JSON.stringify(newArr.flat());
};