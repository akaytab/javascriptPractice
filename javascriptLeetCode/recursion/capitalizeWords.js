/**
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 * // let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 */

let newArr=[];
const capitalizeWords =(arr)=>{
    if(arr.length === 0) return [];
    let[first,...rest]=arr;
    if(first.length===0){
        newArr=[''].concat(capitalizeWords(rest))
    }
    else{
        first=first.toUpperCase();
        newArr= [first].concat(capitalizeWords(rest))
    }
    return newArr
}


console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))