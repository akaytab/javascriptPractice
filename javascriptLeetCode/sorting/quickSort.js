function swap (index1,index2,arr){
     let temp = arr[index1];
     arr[index1] =arr[index2];
     arr[index2]=temp;

}

function pivotHelper(arr,startIndex=0,endIndex=arr.length+1){
    let pivot=arr[startIndex];
    let swapIndex=startIndex;

    for(let i = startIndex+1;i<arr.length;i++){
        if(pivot>arr[i]){
            swapIndex++;
            swap(swapIndex,i,arr)
        }
    }
    swap(swapIndex,startIndex,arr)  
    return swapIndex ;
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
    let pivotIndex = pivotHelper(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
}
return arr;
}

console.log(quickSort([4,2,5,1,6,7,3]))