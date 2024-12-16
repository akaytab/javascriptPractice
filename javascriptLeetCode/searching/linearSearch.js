const search =(arr,num)=>{
    for(let ele of arr){
        if(ele === num){
            return true ;
        }
    }
    return false;
}

const search2 =(arr,num)=>{
    let found=-1;
    arr.forEach((ele,index) => {
        if(ele===num){
            found=index;
        }
    });
    return found;
}


//recursive way 
let count = 0
const search_recursive =(arr,num)=>{
    if(arr.length === 0) return false;
    if(arr[0]===num)return count ;
    count++;
    return search_recursive(arr.slice(1),num)
}

console.log(search_recursive([2,3,45,6,89,0,13,25,33,42,5,6,44,23],44))