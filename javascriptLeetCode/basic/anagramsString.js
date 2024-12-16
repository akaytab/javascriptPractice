const anagram=(str1,str2)=>{
    let frequencyCounter1={};
    let frequencyCounter2={};
    for( let letter of str1){
        frequencyCounter1[letter]=(frequencyCounter1[letter]||0)+1;
    }
    for (let letter of str2){
        frequencyCounter2[letter]=(frequencyCounter2[letter]||0)+1;
    }
    if(str1.length!== str2.length){
        return false;
    }
    for(let key in frequencyCounter1){
        if (!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true;
}

console.log(anagram('anagram','nagaram'));


// Alternet Method 
const anagram_other =(str1,str2)=>{
    if(str1.length !== str2.length){
        return false ;
    }
    
    let frequency_counter ={};
    for(let letter of str1){
        frequency_counter[letter] = (frequency_counter[letter]||0)+1
    }

    for(let i=0;i<str2.length;i++){
        let letter = str2[i]
        if(!(frequency_counter[letter])){
            return false;
        }else{
            return frequency_counter[letter]-=1;
        }
    }
    return true;

}
console.log(anagram_other('anagram','nagarams'));