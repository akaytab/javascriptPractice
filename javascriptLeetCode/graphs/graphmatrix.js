class Graphs{
    constructor(size){
        this.size=size;
        this.matrix=Array.from({length:size},()=>Array(size).fill(0))
    }

    addVertex(v1,v2){
        this.matrix[v1][v2]=1
        this.matrix[v2][v1]=1
    }
}

const g=new Graphs(10);
g.addVertex("Malda","Balurghat");
g.addVertex("Balurghat","Malda");
g.addVertex("Kolkata","Malda");
g.addVertex("Raiganj","Malda");
g.addVertex("Siliguri","Malda");