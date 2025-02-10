/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

// var climbStairs = function(n) {
    
//     if(n===1){
//         return 1
//     };
//     if(n===2){
//         return 2
//     }
//     return climbStairs(n-1)+climbStairs(n-2);
// };



// async function taskA() {
//     console.log('taskA start'); 
//     await taskB(); 
//     console.log('taskA end');
    
// }
// async function taskB() { 
//     console.log('taskB executing'); 
//     return Promise.resolve()
//     .then(() => { console.log('taskB resolved'); }); 
// }
// console.log('global start'); 
// setTimeout(() => { console.log('setTimeout executed'); 
// }, 0);
    
// taskA();
    
// new Promise((resolve) => { 
//     console.log('promise created');  
//     resolve();
//     }).then(() => { 
//     console.log('promise resolved');  
//     });
//     console.log('global end');

//     /**
//      * task A start --> taskB executing -->taskBresolve -->taskA end
//      */





    setTimeout(() => { console.log('setTimeout executed'); 
    }, 0);
    new Promise((resolve) => { 
    console.log('promise created'); 
    resolve();
    }).then(() => { 
    console.log('promise resolved');  
    });
    console.log('global start'); 