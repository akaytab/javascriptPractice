/**
 * 
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

 */



var findDifference = function(nums1, nums2) {
    let diffnum1=new Set()
    let diffnum2=new Set()

    for(let i=0;i<nums1.length;i++){
        if(!nums2.some(element=> element===nums1[i])){
                diffnum1.add(nums1[i]); 
        }
    }

    for(let i=0;i<nums2.length;i++){
        if(!nums1.some(element=> element===nums2[i])){
                diffnum2.add(nums2[i]);
    }
    }

    return [Array.from(diffnum1),Array.from(diffnum2)];
}

console.log(findDifference([1,2,3],[2,4,6]));
