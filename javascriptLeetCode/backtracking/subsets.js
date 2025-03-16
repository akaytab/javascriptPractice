// find all possible subsets for a given array

function subsets(nums){
    let resultArray=[]
    let subSetArray=[]

    function backtrack(start){
        resultArray.push([...subSetArray])

        for(let i= start;i<nums.length;i++){
            subSetArray.push(nums[i])
            backtrack(i+1);
            subSetArray.pop()
        }
    }
    backtrack(0)
    return resultArray
}

console.log(subsets([2,3]));




// function s(nums){
//     let arr=[];
//     let subset=[];

//     function backT(start){
//         arr.push([...subset])

//         for(let i=start;i<nums.length;i++){
//            subset.push(nums[i])
//            backT(i+1);
//            subset.pop()
//         }
//     }
//     backT(0)
//     return arr;
// }