const oddEven = (num)=>{
    if(num%2 === 0){
        return true;
    }
    return false;
}

function array( arr){
    let odd=[];
    let even =[];
    for (let i=0;i<arr.length;i++){
        if(oddEven(arr[i])){
            even.push(arr[i])
        }else{
            odd.push(arr[i]);
        } 
    }
    return `odd array : ${odd}  and  even array : ${even}`
}

const arr =[2,15,30,22,14,56,111]

console.log(array(arr));


