/**
 * Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 */

// function countVowel(str){
//     let count=0
//     for(let i =0;i<str.length;i++){
//         if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
//             count++
//         }
//     }
//     return count;
// }

function count(str){
    const vowels = str.match(/[aeiou]/gi)
    return vowels?vowels.length : 0;
}

var maxVowels = function(s, k) {
    let subString='';
    let maxCount = 0;
    for(let i=0;i<k;i++){
        subString=subString+s[i];
    }
    maxCount = count(subString);

    for(let i = k;i<s.length;i++){
        subString=subString+s[i];
        subString=subString.slice(1)
        maxCount=Math.max(maxCount,count(subString));
    }

    return maxCount;
    
};

//more efficient way
var maxVowels2 = function(s, k) {
    let maxCount = 0;
    let currentCount=0
    for(let i=0;i<k;i++){
       if('aeiou'.includes(s[i])){
        currentCount++;
       }
    }
    maxCount = currentCount

    for(let i = k;i<s.length;i++){
        if('aeiou'.includes(s[i])){
            currentCount++;
           }
        if('aeiou'.includes(s[i-k])){
            currentCount--;
        }   
        maxCount=Math.max(maxCount,currentCount);
    }

    return maxCount;
    
};

console.log(maxVowels('abciiidef',3));
