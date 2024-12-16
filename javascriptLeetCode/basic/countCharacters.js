const countChar=(str)=>{
    let char={};
    for(let letter of str){
        if(letter.match(/[a-zA-Z]/)){
            letter=letter.toLowerCase();
            char[letter]=(char[letter]||0) +1
        }
    }

    return char;
}

console.log(countChar('Akaytab 12345POSSD'))
