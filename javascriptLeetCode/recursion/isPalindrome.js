/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */

const reverse =(value)=>{
    if(value.length===1) return value[0];
    return reverse(value.slice(1))+value[0];
}
function isPalindrome(str){
    if(str===reverse(str)){
        return true;
    }
}

console.log(isPalindrome('madam'))