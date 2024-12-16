const areThereDuplicates=(variable)=>{
    let object={};
    for(let value of variable){
        object[value] =(object[value]||0)+1;
    }
    for(let key in object){
        console.log(key);
        if(object[key]>1){
            console.log(object[key]);
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates('abcda'));

//Arguments approach

function areThereDuplicates2 (){
    let object ={};
    for(let value in arguments){
        object[arguments[value]]=(object[arguments[value]]||0)+1
    }
    for(let key in object ){
        if(object[key]>1){
            return true
        }
    }
    return false;
}
console.log(areThereDuplicates2(1,2,3,4,5,1,1,2,3))