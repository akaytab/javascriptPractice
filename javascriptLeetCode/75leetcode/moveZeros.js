/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12] --> [1,0,0,3,12] --> [1,3,0,0,12] 
                p1 =0 p2=1      p1=1 , p2=2       p1=2, p2=3
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

var moveZeroes = function(nums) {

    let p1 = 0 ;
    let p2 = 1 ;

    while(p1 < nums.length){
        if (p2 >= nums.length) {
            break; 
        }
        if(nums[p1] === 0 && nums[p2] !==0){
            [nums[p1],nums[p2]]=[nums[p2],nums[p1]]
            p1++;
            p2++;
        }
        else if(nums[p1] === 0 && nums[p2] ===0){
            p2++;
        }else{
            p1++;
            p2++;
        }
    }
    return nums;
    
};

console.log(moveZeroes([0,1,0,3,12]));
