class WeightedGraph{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[];
    }

    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({node:v2,weight});
        this.adjacencyList[v2].push({node:v1,weight});
    }

    dijkstra(start, end) {
        const node = new PriorityQueue();
        const previous = {};
        const distance = {};
        let smallest;
        let path = [];

        // Build initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distance[vertex] = 0;
                node.enQueue(vertex, 0);
            } else {
                distance[vertex] = Infinity;
                node.enQueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (node.values.length) {
            smallest = node.deQueue().value;
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path.push(start);
                break;
            }
            if (smallest || distance[smallest] !== Infinity) {
                for (let neighbor of this.adjacencyList[smallest]) {
                    let candidate = distance[smallest] + neighbor.weight;
                    if (candidate < distance[neighbor.node]) {
                        distance[neighbor.node] = candidate;
                        previous[neighbor.node] = smallest;
                        node.enQueue(neighbor.node, candidate);
                    }
                }
            }
        }
        return path.reverse();
    }
}


class PriorityQueue{
    constructor(){
        this.values=[]
    }
    enQueue(value,priority){
        this.values.push({value,priority});
        this.sort();
    }
    sort(){
        this.values.sort((a,b)=>a.priority - b.priority);
    }
    deQueue(){
        return this.values.shift();
    }
}

const graph=new WeightedGraph()
graph.addVertex("Malda");
graph.addVertex("Balurghat");
graph.addVertex("Kolkata");
graph.addVertex("Raiganj");
graph.addVertex("Siliguri");
graph.addEdge("Malda","Kolkata",365);
graph.addEdge("Malda","Balurghat",101);
graph.addEdge("Malda","Raiganj",75);
graph.addEdge("Malda","Siliguri",330);
graph.addEdge("Balurghat","Raiganj",82);
graph.addEdge("Balurghat","Siliguri",350);
graph.addEdge("Balurghat","Kolkata",450);
graph.addEdge("Kolkata","Siliguri",700);
graph.addEdge("Raiganj","Kolkata",490);
graph.addEdge("Raiganj","Siliguri",250);





