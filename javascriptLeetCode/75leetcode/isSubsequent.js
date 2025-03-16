/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

 */

var isSubsequence = function(s, t) {

    let pointer1=0;
    let pointer2=0;

    for(let i=0;i<t.length;i++){
        console.log(s[pointer1],'--->',t[i]);
        
        if(s[pointer1]===t[i]){
            pointer1++;
        }
    }
    if(pointer1!==s.length){
        return false;
    }else{
        return true;
    }
    
};

// var isSubsequence = function(s,t) {
//     let p1 = 0;
//     let p2 = 0;

//     while (p2 < t.length) {
//         if (s[p1]<s.length && s[p1] === t[p2]) {
//             p1++;
//         }
//         p2++;
//     }

//     return p1 === s.length;
// };

// Highlighted line
console.log(isSubsequence('abc','ahbgdc'));