


var productExceptSelf = function(nums) {

    

}
console.log(productExceptSelf([-1,1,0,-3,3]));



async function taskA( ){
    console.log('task A started');
    await taskB();
    console.log('task A end');   
}

async function taskB(){
    console.log('task B executing');
    return Promise.resolve()
    .then(()=>{console.log('task B resolve');
    })
    
}

console.log('globalstart');

setTimeout(()=>{
    console.log('Set timeout executed');   
},0)

taskA();

new Promise((resolve)=>{
    console.log('promise created');
  resolve()  
}).then(()=>{
    console.log('promiseResolved');
    
});

console.log('global end');


