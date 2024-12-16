// const clickMe= document.getElementById('clickButton');
// clickMe.onclick= ()=>{
//     console.log('button is clicked');
// }

// const doubleclickMe= document.getElementById('doubleClickButton');
// doubleclickMe.addEventListener("dblclick",()=>{
//     console.log("couble clicked")
// })



//simple callBack Function

// function callbackLog(){
//     console.log('Hi There');  
// }
// function logMessage(callBack){
//     callBack();

// }

// logMessage(callbackLog);


// const sumofNumbers = (a,b,callback)=>{
//     const result =a+b;
//     callback(result);

// }
//  sumofNumbers(2,3,(result)=>{
//     console.log(result);
//  })

//  // callback hell 

//  const task1=(callback)=>{
//     setTimeout(()=>{
//         console.log('task 1 completed'); 
//         callback();  
//     },3000);
    
//  }

//  const task2=(callback)=>{
//     setTimeout(()=>{
//         console.log('task 2 completed'); 
//         callback();  
//     },3000);
//  }

//  const task3=(callback)=>{
//     setTimeout(()=>{
//         console.log('task 3 completed');
//         callback();   
//     },3000);
    
//  }

// //  task1(function(){
// //     task2(function(){
// //         task3(function(){
// //             setTimeout(()=>{
// //                 console.log('all task completed');
// //             },3000);          
// //         })
// //     })
// //  })

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             setTimeout(()=>{
//                 console.log('all completed');  
//             },3000)
//         })
//     })
// })


// // promise
// const simplePromise = new Promise((resolve,reject)=>{
//     const success = false;
//     if(success){
//         resolve('operation successFull');   
//     }
//     else{
//         reject('operation failed');
//     }
// });

// simplePromise.then((result)=>{
//    console.log(result);  
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('operation finished')
// })

// console.log()


//  function evenOdd (number) {return new Promise ((resolve,reject)=>{
//     if(number%2===0){
//         resolve(`The ${number} is an even number`);
//     }else{
//         reject(`The ${number} is an odd number`)
//     }
// })
// }
// evenOdd(3).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})

// promise chaining 
// function func1(){
//     return new Promise((resolve)=>{
//         resolve('task 1 completed')
//     })
// }
// function func2(){
//     return new Promise((resolve)=>{
//         resolve('task 2 compelted');
//     })
// }
// function func3(){
//     return new Promise((resolve)=>{
//         resolve('task 3 completed');
//     })
// }

// func1()
// .then((result)=>{
//     console.log(result);
//     return func2();
// })
// .then((resullt2)=>{
//     console.log(resullt2);
//     return func3();
// })
// .then((result3)=>{
//     console.log(result3)
// })
    
// .catch(()=>{
//     console.log('err')
// })


const getname=async()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Akaytab')
        },1000)
    })
}
const age=async()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('25')
        },3000)
    })
}

async function getDetails(){
    const result=await Promise.all([getname(),age()]);
    console.log(result);
}

getDetails();


async function randomNumbers(){
    return new Promise((resolve,reject)=>{
        let num = Math.random();
        if (num>0.35){
            console.log(num);
            resolve('success')
        }else{
            console.log(num);
            reject('failes')
        } 
    })
}

const getRandomize=async()=>{
    try{
        const result =await randomNumbers()
        console.log(result);
        
    }catch(err){
        console.log(err)
    }
}
getRandomize();


