// Input [1,2,3,4,5,6] output true
// Input [1,2,4,5,6] output false


function inSeq(arr,p){
    if(p===arr.length-1) return true;

    if(arr[p]+1 === arr[p+1]){
        return inSeq(arr,p+1);
    }else{
        return false;
    }
}

console.log(inSeq([1,3,4,5,6],0))