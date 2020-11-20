// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.
// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

var distanceBetweenBusStops = function (distance, start, destination) {
    let p1 = 0;
    let p2 = 0;

    if (start > destination) {
        let temp = destination
        destination = start
        start = temp
    }


    for (let i = 0; i < distance.length; i++) {
        if (i >= start && i < destination) {
            p1 += distance[i]
        } else {
            p2 += distance[i]
        }

    }
    if (p1 === 0) return p2;
    if (p2 === 0) return p1;
    return Math.min(p1, p2)
};