// sum zero is a function which gives the first pair of the to be the sum zero 
//naive approach time complexity 0(N^2)

const sumZero =(arr)=>{
    for (let i=0 ;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])===0){
                console.log(arr[i],arr[j])
                return true;
            }
        }
    }
    return false;
}

console .log(sumZero([-3,-2,-1,1,1,3]));


// two Pointers algorithm approach

const sumZero_two =(arr)=>{
    let p1=0;
    let p2=arr.length-1;
    while(p1<p2){
        if((arr[p1]+arr[p2])===0){
            console.log(arr[p1],arr[p2]);
            return true;
        }
        if((arr[p1]+arr[p2])<0){
            p1++;
        }else{
            p2--;
        }
    }
    return false;

}
console.log(sumZero_two([-3,-2,-1,1,1]));
