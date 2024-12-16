class Graphs{
    constructor(){
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[];
    }

    addEdgeUnDirect(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    addEdgeDirect(v1,v2){
        this.adjacencyList[v1].push(v2);
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1]=this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2]=this.adjacencyList[v2].filter(v=>v!==v1);
    }
    
    removeVertex(vertex){
        for(let i=0;i<Object.keys(this.adjacencyList).length;i++){
            if(this.adjacencyList[vertex]){
                for(let j=0;j<this.adjacencyList[vertex].length;j++){
                    this.removeEdge(vertex,this.adjacencyList[vertex][j])
                }
            }
        }
        delete this.adjacencyList[vertex];
    }
}

const g=new Graphs();
g.addVertex("Malda");
g.addVertex("Balurghat");
g.addVertex("Kolkata");
g.addVertex("Raiganj");
g.addVertex("Siliguri");
g.addEdgeUnDirect("Malda","Kolkata");
g.addEdgeUnDirect("Malda","Balurghat");
g.addEdgeUnDirect("Malda","Raiganj");
g.addEdgeUnDirect("Balurghat","Raiganj");
g.addEdgeUnDirect("Raiganj","Siliguri");



