/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

var strStr = function(haystack, needle) {
    
    if(haystack.length<needle.length){
        return -1;
    }

    let pHay=0;
    let pNeed=0;

    while(pHay<haystack.length){
        if(pNeed===needle.length){
            break;
        }
        if(haystack[pHay]===needle[pNeed]){
            pHay++; //4
            pNeed++; //4
        }else if(haystack[pHay]!==needle[pNeed]){
            pHay=pHay-pNeed +1 //5 
            pNeed=0;
        }
    }
        if(pNeed===needle.length){
            return pHay-pNeed;
        }else{
            return -1
        }
    
};

console.log(strStr('mississippi','issip'));
