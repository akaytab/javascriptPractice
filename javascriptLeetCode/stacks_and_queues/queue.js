class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }

    enQueue(value){
        const newEntry =new Node(value);
        const temp=this.first;
        if(!this.first){
            this.first=newEntry;
            this.last=newEntry;
        }else{
            this.first=newEntry;
            this.first.next=temp;
        }
        this.size++
        return this;
    }

    deQueue(){
        let currentNode=this.first;
        let previousNode =currentNode;
        if(!this.first){
            return null;
        }else{
            while(currentNode.next){
                previousNode=currentNode;
                currentNode=currentNode.next;
            }
            this.last=previousNode;
            this.last.next=null;
            this.size--;
        }
        return this;
    }
}

const queue = new Queue();