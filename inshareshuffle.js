function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

    let tempValue = 0;
    for (let i = 0; i < array.length; i++) {
        let tempIndx = getRandom(0, array.length - 1);
        tempValue = array[tempIndx];
        array[tempIndx] = array[i];
        array[i] = tempValue;
    }
    return array;
}


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);