/**
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
 */

const longestSubstring=(str)=>{

    let start =0 //to handle the start position
    let isSeen={} // to store characters with dintinct position
    let longest =0 // to store longest Substring of unique characters

    for(let i=0;i<str.length;i++){
        let char =str[i];
        if(isSeen[char]){
            start =Math.max(start,isSeen[char])
        }
        longest=Math.max(longest,i-start+1);
        isSeen[char]=i+1;
    }
    return longest;

}