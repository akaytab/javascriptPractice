
function toh(n,stack1,stack2,stack3){

    if (n===1){
        console.log(`move ${n} disk from ${stack1} to ${stack3}`);
        return;    
    }

    toh(n-1,stack1,stack3,stack2);
    console.log(`move ${n} disk from ${stack1} to ${stack3}`);
    toh(n-1,stack2,stack1,stack3);
}

function returnSteps (n,start,aux,target){
    let steps=0;
    function toh(n,stack1,stack2,stack3){

        if (n===1){
            console.log(`move ${n} disk from ${stack1} to ${stack3}`);
            steps++
            return;    
        }
    
        toh(n-1,stack1,stack3,stack2);
        console.log(`move ${n} disk from ${stack1} to ${stack3}`);
        steps++
        toh(n-1,stack2,stack1,stack3);
    }
    toh(n,start,aux,target);
    return steps;
}

console.log(returnSteps(2,'A','B','C'));
