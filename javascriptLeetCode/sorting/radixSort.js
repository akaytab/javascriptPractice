const getDigit =(num , i)=>{
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

const digitCount =(num)=>{
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

const mostDigits =(arr)=>{
    let maxDigit=0
    for(let i = 0;i<arr.length;i++){
        if(digitCount(arr[i])>=maxDigit){
            maxDigit=digitCount(arr[i])
        }
    }
    return maxDigit
}

const radixSort = (nums)=>{
    let maxlength = mostDigits(nums);
    for(let i =0;i<maxlength;i++){
        let buckets = Array.from({length:10},()=>[]);
        for(let j=0;j<nums.length;j++){
            let digit = getDigit(nums[j],i);
            buckets[digit].push(nums[j]);
        }
        nums =[].concat(...buckets);
    }
    return nums;
}

console.log(getDigit(9453,3))