

const pointers =(arr,num)=>{
    let left=0;
    let right=arr.length-1;
    let middle ;
    
    while(left<=right){
        middle =Math.floor((left+right)/2);
        if(arr[middle]=== num ) {return middle}
    else if(arr[middle]>num){
        right=middle-1;  
    }else  {
        left=middle+1;
    }
}
return -1;
}

console.log(pointers([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],100))