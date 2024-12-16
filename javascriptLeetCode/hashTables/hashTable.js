class HashTable{
    constructor(size=3){
        this.keyMap=new Array(size)
        this.isPresent=[];
    }


    _hash(key){
        let total=0;
        for(let i =0;i<Math.min(key.length,100);i++){
            let char=key[i];
            let value=char.charCodeAt(0)-96;
            total=(total+value)
        }
        for (let i = 0; i < this.isPresent.length; i++) {
            if (this.isPresent[i] === total) {
                return i;
            }
        }   
        this.isPresent.push(total);
        return this.isPresent.length - 1;
    }

    set(key,value){
        let idx = this._hash(key);
        if(!this.keyMap[idx]){
            this.keyMap[idx]=[]
        }
        this.keyMap[idx].push([key,value])
    }

    get(key){
        let idx= this._hash(key);
        if(this.keyMap[idx]){
            for(let i =0;i<this.keyMap[idx].lenght;i++){
                if(this.keyMap[idx][i][0]===key){
                    return this.keyMap[idx][i];
                }
            }
        }
        return undefined;
    }
}

const ht=new HashTable();
ht.set('fruit','mango')
ht.set('fruit','banana')
ht.set('fruit','apple')
ht.set('fruit','watermelon')
ht.set('vegetables','onion')
ht.set('vegetables','potato')
ht.set('vegetables','spinach')
ht.set('vegetables','tomato')
ht.set('meat','chicken')
ht.set('meat','fish')
ht.set('meat','mutton')
ht.set('fruit','strawberry')
ht.set('vegetables','carrot')



