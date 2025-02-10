/**
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"
 */


const checkVowel =(ch)=>{
    const vowelArray = ['a','e','i','o','u','A','E','I','O','U'];
    return(vowelArray.includes(ch))
}

function swapCharacters(str,p1,p2){
    let arr=str.split('');
    let temp = arr[p1];
    arr[p1]=arr[p2];
    arr[p2]=temp;
    return arr.join('');
}

var reverseVowels = function(s) {
   let start = 0;
   let end = s.length-1;

   while (start < end) {
    while (start < end && !checkVowel(s[start])) {
        start++;
    }
    while (start < end && !checkVowel(s[end])) {
        end--;
    }
    if (start < end) {
        s = swapCharacters(s, start, end);
        start++;
        end--;
    }
}
    return s;
};

console.log(reverseVowels('IceCreAm'));
