/**
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 */

var pivotIndex = function(nums) {
    let left=0;
    let right=nums.length -1;
    let leftSum=0;
    let rigtSum=0;
    let pivotIndexnum=0
    leftSum +=nums[left];
    rigtSum +=nums[right];

    while(left<right){

        if(leftSum>rigtSum){
            right--;
            rigtSum +=nums[right];
        }else if(rigtSum>leftSum){
            left++;
            leftSum +=nums[left];
        }else if(leftSum === rigtSum  && left+1=== right-1){
            pivotIndexnum= left+1;
            break;
        }else if(leftSum === rigtSum && left+1===right){
            pivotIndexnum = -1;
            break;
        }else if(leftSum === rigtSum  && left+1 !== right-1){
            right--;
            left++;
            leftSum +=nums[left];
            rigtSum +=nums[right];
        }else{
            pivotIndexnum =0
            break;
        }
    }
    return pivotIndexnum
};



// Good approach
var pivotIndex2 = function(nums) {
    let leftSum=0;
    let totalsum =0;
    for(let i=0;i<nums.length;i++){
        totalsum += nums[i]
    }
    console.log(totalsum);
    

    for(let i=0;i<nums.length;i++){
        if(leftSum === totalsum-leftSum - nums[i]){
            return i
        }
        leftSum+=nums[i];
    }
    return -1;
}

console.log(pivotIndex2([1,7,3,6,5,6]));
