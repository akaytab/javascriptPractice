// naive approach using two for loops O(n^2)
// [1,4,3,6,2,7,5]
//  i j
function sumSubArrays(arr,num){
    if(num>arr.length){
        return null;
    }
    let max=0;
    for(let i=0;i<arr.length-num+1;i++){
        let sum=0;
        for(let j=0;j<num;j++){
            sum+=arr[i+j];
        }
        if(sum>max){
            max=sum;
        }
    }
    return max;

}
console.log(sumSubArrays([1,2,5,2,8,1,5],2))


// Sliding Window approach 
// O(N) Time complexity

function maxSumSubarrays(arr,num){
    if(num>arr.length){
        return null
    }
    let sum =0;
    let max =0;
    for(let i=0;i<num;i++){
        sum+=arr[i];
    }
    max=sum;
    for(let j=num;j<arr.length;j++){
        max=max-arr[j-num]+arr[j]
        sum=Math.max(sum,max);
    }
    return sum
}
console.log(maxSumSubarrays([1,2,5,2,8,1,5],4))



const sum=(arr,num)=>{
    let max=0
    let sum =0

    for(let i=0;i<num;i++){
        sum+=arr[i];
    }
    max=sum;

    for(let i=num;i<arr.length;i++){
        max = max+arr[i]-arr[i-num];
        sum =Math.max(sum,max);
    }
    return sum;
    
}