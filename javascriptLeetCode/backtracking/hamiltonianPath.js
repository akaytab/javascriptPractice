//hamiltonian 

function isSafe(v,graph,path,pos){
    if(graph[path[pos-1]][v]===0) return false;

    for(let i=0;i<pos;i++){
        if(path[i]===v) return false;
    }
    return true;
}

function ham(graph,path,pos,allPaths){
    if(pos===graph.length){
        allPaths.push([...path]);
        return false;
    } 

    for(let i=0;i<graph.length;i++){
        if(isSafe(i,graph,path,pos)){
            path[pos]=i;
            if(ham(graph,path,pos+1,allPaths)){
                return true;
            }
            path[pos]=-1;
        }
    }
    return false;
}

function findPath(graph){
    const allPathfromAllVertices=[]

    for(let startVertx=0;startVertx<graph.length;startVertx++){
        const path=Array(graph.length).fill(-1);
        const allPaths=[];

        path[0]=startVertx;
        ham(graph,path,1,allPaths)

        if(allPaths.length>0){
            allPathfromAllVertices.push({startVertx,path:allPaths})
        }

    }

    if (allPathfromAllVertices.length === 0) {
        console.log("No Hamiltonian Path exists for any starting vertex");
      } else {
        console.log("Hamiltonian Paths exist for each starting vertex: ", allPathfromAllVertices);
      }
    
      return allPathfromAllVertices;
    }

const graph = [
    [0, 1, 1, 0, 0], // A
    [1, 0, 1, 1, 0], // B
    [1, 1, 0, 1, 1], // C
    [0, 1, 1, 0, 1], // D
  ];

console.log(findPath(graph))