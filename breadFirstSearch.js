const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// graph
const adjacencyList = new Map();

// add node 
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// add edge, undirected 
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));
// console.log(...routes[0]);
console.log(adjacencyList);

function bfs(start) {
    
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const airport = queue.shift();
        const destionations = adjacencyList.get(airport);

        for (const destination of destionations) {

            if (destination === 'BKK') {
                console.log('found', destination);
            }
            if(!visited.has(destination)){
                visited.add(destination);
                queue.push(destination);
                console.log(destination);
            }
        }
    }

}

bfs('PHX')