/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 */

var trap = function(height) {

    let left=[];
    let right=[];
    let leftval=0;
    let rightVal=0;
    let sum=0

    for(let i=0;i<height.length;i++){
        leftval=Math.max(height[i],leftval)
        left[i]=leftval
    }

    for(let i=height.length-1;i>=0;i--){
        rightVal=Math.max(height[i],rightVal)
        right[i]=rightVal
    }

    for(let i=0;i<height.length;i++){
        sum=sum+(Math.min(left[i],right[i])-height[i]);
    }
    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));


