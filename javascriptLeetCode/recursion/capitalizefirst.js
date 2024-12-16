/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 * capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
 */

const capitalize = (arr)=>{
    let newArr =[];
    arr.forEach(ele =>{
        if(ele.length===0){
            newArr.push('')
        }else{
            ele=ele[0].toUpperCase().concat(ele.slice(1));
            newArr.push(ele)
        }
    });
    return newArr;
}

//recursive Way

const capitalize2 =(arr)=>{
    if (arr.length===0) return [];
    let [first,...rest]= arr
    if(first.length===0){
        return [''].concat(capitalize2(rest))
    }else{
        first=first[0].toUpperCase()+first.slice(1);
        return [first].concat(capitalize2(rest))
    }
}

console.log(capitalize2(['car','taco','banana']));