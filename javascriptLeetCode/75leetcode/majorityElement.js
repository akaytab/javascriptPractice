/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 */

var majorityElement = function(nums) {

    let majorityObj ={};
    let highiest_value=0;
   let highiestKey;

    for( let num of nums){
        num=parseInt(num)
        majorityObj[num]=(majorityObj[num]||0)+1;
    } 

    for(let value in majorityObj ){
        if(majorityObj[value]>highiest_value){
           highiest_value=majorityObj[value] ;
           highiestKey=value;
        }
    }
    return highiestKey; 
};

console.log(majorityElement([2,2,1,1,1,2,2]));
