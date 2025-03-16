// balanced parenthesis 

function balanced(n){
    let str=[];

    function backtrack(current,open,close){
        if(current.length===n*2) {
            str.push(current)
            return;
        }

        if(open<n){
            backtrack(current+'(',open+1,close)
        }
        if(close<open){
            backtrack(current+')',open,close+1)
        }
    }

    backtrack('',0,0)
    return str
}

console.log(balanced(3));
