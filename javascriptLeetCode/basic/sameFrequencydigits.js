const samenum=(num1,num2)=>{
    let s1 = num1.toString();
    let s2 = num2.toString();
    let frequency_counter={};
    let frequency_counter2={};
    for(let digit of s1){
        frequency_counter[digit]=(frequency_counter[digit]||0)+1;
    }
    for(let digit of s2){
        frequency_counter2[digit]=(frequency_counter2[digit]||0)+1
    }
    if(s1.length !== s2.length){
        return false;
    }
    for(let key in frequency_counter){
        if(!(key in frequency_counter2)){
            return false;
        }
        if(frequency_counter[key] !== frequency_counter2[key]){
            return false;
        }
    }
    return true;
    
}

console.log(samenum(182,281));