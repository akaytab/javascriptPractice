// write a function to check if there is any odd number available or not in list

const checkOddorEven =(num)=>{
    if(num%2===0){
        return num;
    }else{
        return;
    }
}

const checkList =(arr)=>{
    let newArray = [];
     
    const addEle=(arr)=>{
        if(arr.length === 0) return;
        newArray.push(checkOddorEven(arr[0]));
        addEle(arr.slice(1))
    }
    addEle(arr);
    return newArray
}

console.log(checkList([2,4,5,3,10,12,31,9]))


// pure recursive way
  
const newCheck =(arr)=>{
    let newArr =[];

    //base
    if(arr.length === 0) return newArr;
    if((arr[0]%2)!== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(newCheck(arr.slice(1)))
    return newArr;
}
console.log(newCheck([2,4,5,3,10,12,31,9]))