/**
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 */

var uniqueOccurrences = function(arr) {
    let map = new Map();

    for(let num of arr){
        map.set(num,(map.get(num)||0)+1)
    }
    console.log(map);
    
    let occurrences = new Set();
    for(let occ of map.values()){
        if(occurrences.has(occ)){
            return false;
        }
        occurrences.add(occ)
    }
    return true;
}

console.log(uniqueOccurrences([3,5,-2,-3,-6,-6]));
