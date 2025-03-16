/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */
/** 
 * 1 2 3 4
 * 4 3 2 1
 */

var rotate = function(nums, k) {
    
    for(let i=0;i<k;i++){
        let pointer1=0;
        let pointer2=nums.length-1;

        function swap(nums,val1,val2){
            if(pointer1 === pointer2){
                return nums;
            }else{
                let k=nums[val1];
                nums[val1]=nums[val2];
                nums[val2]=k;

                pointer1++;
                return swap(nums , pointer1,pointer2);
            }
        }
        swap(nums,pointer1,pointer2)     
    }
    return nums;
};


function rotate2(nums,k){

    if(k<=nums.length){
        function reverse(nums,start,end){
            while (start<end){
                let k=nums[start];
                nums[start]=nums[end];
                nums[end]=k;
                start++;
                end--;
            }
        }
        reverse(nums,0,nums.length-1)
        reverse(nums,k,nums.length-1)
        reverse(nums,0,k-1);
    }

    return nums;
}




console.log(rotate2([1,2,3,4,5,6,7],3));
