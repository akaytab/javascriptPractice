/**
 * Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
 */

var longestSubarray = function(nums) {
    let maxCount=0;
    let left=0;
    let otherNumCount=0;
    let k=1;

    for(let right=0;right<nums.length;right++){
        if(nums[right] !== 1){
            otherNumCount++;
        }

        while(otherNumCount>k){
            if(nums[left]!==1){
                otherNumCount--;
            }
            left++;
        }
        maxCount=Math.max(maxCount,right-left);
    }
    return maxCount === nums.length ? maxCount - 1 : maxCount;
};

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));
