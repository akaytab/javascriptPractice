/**
 * Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 */

var decodeString = function(s) {
   let currentNum=0;
   let currentString='' 
   let newArr=[];

   for (let char of s){
    if(!isNaN(char)){
        currentNum = currentNum*10 +parseInt(char);
    }else if(char === '['){
        newArr.push([currentString,currentNum])
        currentString='';
        currentNum=0
    }else if(char === ']'){
       let[lastString,lastnum] =newArr.pop()
        currentString = lastString + currentString.repeat(lastnum)
    }else{
        currentString=currentString+char
    }
   }
   return currentString
};


console.log(decodeString('3[a2[c]]'))