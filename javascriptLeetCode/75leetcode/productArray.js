/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

 */

const product=(arr)=>{
    let p =1;
    for(let i =0;i<arr.length;i++){
         p=p*arr[i];
    }
    return p;
}

var productExceptSelf = function(nums) {
    let productArray = []; 
    pos = 0
    while(pos<nums.length){
        let filterArray = nums.filter((_,index)=>index !== pos);
        
        productArray.push(product(filterArray));
        pos++;
    }
    return productArray;
};

//suffix prefix method
var productExceptSelf2 = function(nums) {
     let n= nums.length;
     let result = new Array(n);
     let prefix = new Array(n);
     let suffix = new Array(n);

     //for prefix
     prefix[0]=1
     for(let i = 1;i<n;i++){
        prefix[i]=prefix[i-1]*nums[i-1];
     }

     //for suffix
     suffix[n-1]=1;
     for(let i = n-2;i>=0;i--){
        suffix[i]=suffix[i+1]*nums[i+1]
     }

     //for result
     for(let i =0;i<n;i++){
        result[i]=prefix[i]*suffix[i]
     }

     return result

    };

console.log(productExceptSelf2([-1,1,0,-3,3]));

