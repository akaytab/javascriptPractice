class Node {
    constructor(value){
    this.value=value;
    this.next=null;
    }   
}

class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }

    push(value){
        const newEntry=new Node(value);
        if(!this.first){
            this.first=newEntry;
            this.last=newEntry;
        }else{
            this.last.next=newEntry;
            this.last=newEntry;
        }
        this.length++;
        return this;
    }

    pop(){
        let currentItem =this.first;
        let previousItem=currentItem;
        if(this.length===0){
            return null
        }else{
            while(currentItem.next){
                previousItem=currentItem;
                currentItem=currentItem.next;
            }
            this.last=previousItem;
            currentItem=null;
            this.last.next=null;
            this.length--;
        }
        return this;
    }
}

const stack=new Stack();
