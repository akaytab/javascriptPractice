/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 * // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
 */

const flatten = (arr)=>{
    let newArr=[];

    arr.forEach(ele => {
        if(Array.isArray(ele)){
            newArr=newArr.concat(flatten(ele))
        }else{
            newArr.push(ele)
        }
    });
    return newArr
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

