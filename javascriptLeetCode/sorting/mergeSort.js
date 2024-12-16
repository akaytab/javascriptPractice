const merge =(arr1,arr2)=>{
    let pointer1=0;
    let pointer2=0;
    let newArr=[];

    while(pointer1<arr1.length && pointer2<arr2.length){
        if(arr1[pointer1]<arr2[pointer2]){
            newArr.push(arr1[pointer1]);
            pointer1++;
        }
        else{
            newArr.push(arr2[pointer2]);
            pointer2++;
        }
    }
        while(pointer1<arr1.length){
            newArr.push(arr1[pointer1])
            pointer1++;
        }
        while(pointer2<arr2.length){
            newArr.push(arr2[pointer2])
            pointer2++;
        }
    return newArr;
}

const sort =(arr)=>{
    if(arr.length===1) return arr;
    let mid = Math.floor((arr.length)/2);
    let left=sort(arr.slice(0,mid));
    let right=sort (arr.slice(mid));
    return merge(left,right);
}

console.log(sort([8,200,-1,1,5,6,7]))