



var hIndex = function(citations) {

    citations.sort((a,b)=>b-a);

    let h_index=0;
    

    for(let i=0;i<citations.length;i++){
        if(citations[i]>=i+1){
            h_index = i+1;
        }else{
            break;
        }
    }

    return h_index;

   
};

console.log(hIndex([1,3,1]));
