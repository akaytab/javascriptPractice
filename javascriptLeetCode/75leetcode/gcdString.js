/** 
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 A  B  C  A  B  C     A  B  C
 p1                   p2
 0                    0

 p1 === p2 ---> p1++  p2++
 else p2 === 0

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
 */


var gcdOfStrings = function(str1, str2) {
    
    if(str1.length<str2.length){
        return gcdOfStrings(str2,str1)
    }

    else if(!str1.startsWith(str2)){
        return "";
    }

    else if(str2.length===0){
        return str1;
    }

    else{
        return gcdOfStrings(str1.substr(str2.length),str2)
    }
};

console.log(gcdOfStrings('ABCABC','ABC'));
