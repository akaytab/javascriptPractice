
const naiveSearch = (str,s)=>{
    let count = 0;

    if(str.length < s.length){
        return -1;
    }else{
        for(let i =0;i<str.length;i++){
            let match =true;
            for(let j=0;j<s.length;j++){
                if(str[i+j]!==s[j]){
                    match=false;
                    break;
                }
            }
            if(match)
            count++; 
        }
        return count;
    }
}

console.log(naiveSearch('abcdefghcd','cde'));