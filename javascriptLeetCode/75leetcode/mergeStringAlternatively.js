var mergeAlternately = function(word1, word2) {

    let newWord=[];
    let large = Math.max(word1.length,word2.length);
    for(let i=0;i<large;i++){
        newWord.push(word1[i]);
        newWord.push(word2[i]);
    }
    return newWord.join(' ').replace(/\s+/g,'');   
};

console.log(mergeAlternately('abc','defgh'));

word='abcdef';