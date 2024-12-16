// my approach using objects
 const countUniqueValues=(arr)=>{
    let object={};
    for(let num of arr){
        object[num]=(object[num]||0)+1;
    }
    console.log(object)
    return Object.keys(object).length;   
}

console.log(countUniqueValues([]));

// multiple pointer approach 