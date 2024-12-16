// arr [1,2,3] =arr[4,1,9] true 
// arr [1,2] =arr[9,4] false

// const same =(arr1,arr2)=>{
//     let temp=[];
//     for(let i=0;i<arr1.length;i++){
//         temp[i]=arr1[i]*arr1[i];
//     }
//     console.log(temp);

//     if(arr1.length !== arr2.length){
//         return false;
//     }else {
//        return compare(temp,arr2)
//     }

// }

// function compare(arr1,arr2){
//     arr2.sort((a,b)=>a-b);
//     arr1.sort((a,b)=>a-b);
//     for(let i=0;i<arr1.length; i++){
//        if( arr1[i] !== arr2[i]){
//         return false;
//        }
//     }
//     return true;
// }
// console.log (same ([1,2,3],[4,1]))



//Alternet Solution  O(N2) complexity because of indexOf
const same =(arr1,arr2)=>{
    if(arr1.length !== arr2.length){
        return false;
    }else{
        for(let i=0;i<arr1.length;i++){
            let index =arr2.indexOf(arr1[i]**2);
            if(index===-1){
                return false;
            }
            arr2.splice(index,1);
        }
        return true;
    }

}
console.log (same ([1,2,3],[4,1,9]))


// Alternet Method O(N) complexity

const same2 =(arr1,arr2)=>{
    let counter1={};
    let counter2={};
    for (let count of arr1){
        counter1[count]=(counter1[count]||0)+1;
    }
    for (let count of arr2){
        counter2[count]=(counter2[count]||0)+1;
    }
    console.log(counter1,counter2);
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let key in counter1){
        if (!(key**2 in counter2 )){
            return false;
        }
        if ((counter1[key**2]!==counter2[key])){
            return false;
        }
    }
    return true;

}
console.log (same2 ([1,2,3,9],[4,1,9,82]))
