const selectionSort =(arr)=>{
    let temp ;
    for(let i = 0; i< arr.length;i++){
        let minValue = i;
        for( let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minValue]){
                minValue=j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minValue];
       arr[minValue] = temp ;     
    }
    return arr;
}

console.log(selectionSort([2,3,5,44,7,1,99,4,32,90,999,11,]))