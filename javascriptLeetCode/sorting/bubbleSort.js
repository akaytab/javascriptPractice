const bubbleSort =(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            };
        }
    }
    return arr;
}


// another approach

const bubbleSort2 =(arr)=>{
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            };
        }
    }
    return arr;
}

//es5 approach 

const bubbleSort3 =(arr)=>{
    let noSwap =true;
    const swap =(array,index1,index2)=>{
       return [array[index1],array[index2]]=[array[index2],array[index1]];
    }
    for(let i=arr.length;i>0;i--){
        noSwap = true;
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
                noSwap=false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}
console.log(bubbleSort3([2,3,5,44,7,1,99,4,32,90,999,11,]));