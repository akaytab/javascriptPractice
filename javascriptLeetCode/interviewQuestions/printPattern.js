/**
 * n=6
 * 1
 * 2 4
 * 3 5 7
 * 6 8 10 12
 * 9 11 13 15 17
 * 14 16 18 20 22 24
 */

// function pattern(height){
//     let oddNum =1;
//     let evenNum=2;

//     for(let i=1;i<=height;i++){
//         let rowpattern='';
//         if (i%2!==0){
//             for( let j=0;j<i;j++){ 
//                 rowpattern =rowpattern+oddNum+" ";  
//                 oddNum+=2;     
//             }    
//         }else{
//             for( let j=0;j<i;j++){  
//                 rowpattern =rowpattern+evenNum+" ";   
//                 evenNum+=2;     
//             }    
//         }
//         console.log(rowpattern.trim())
//     }
//     return `pattern printed`
// }

// console.log(pattern(6));


let arr=[2,5,3,9,10,1,6,7,1,2,4,31,99];
let sortedstr=[];
for (let i=0;i<arr.length;i++){
    setTimeout(()=>{
       console.log(arr[i]);
    },arr[i])
}

console.log(sortedstr);


