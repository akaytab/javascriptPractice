/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function(strs) {

    let pointer=0;
    let commonPrefix='';

    function smallestString(){
        let smallest= strs[0];

        for(let i=1;i<strs.length;i++){
            if(strs[i].length<smallest.length){
                smallest=strs[i];
            }
        }
        return smallest;
    }

    const smallest = smallestString();

    for(let i=0;i<smallest.length;i++){
        while(pointer<strs.length){
            if(smallest[i]=== strs[pointer][i]){
                pointer++;
            }else{
                return commonPrefix;
            }
        }
        commonPrefix+=smallest[i];
        pointer=0;
    }
    return commonPrefix;   
    
};

console.log(longestCommonPrefix(["dog","racecar","car"]));
