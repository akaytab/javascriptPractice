/* 
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

const isSubsequence =(str1,str2)=>{
    let p1=0;
    let p2=0;
    while(p2<str2.length){
        let check=str1.length;
        if(p1===check){
            return false;
        }
        if(str1[p1]===str2[p2]){
            p1++;
            p2++;
        }else if(str1[p1]!==str2[p2]){
            p2++;
        }
        if(p1>=str1.length){
            return true;
        }
    }
    return false;
}

console.log(isSubsequence('', 'acb'))
