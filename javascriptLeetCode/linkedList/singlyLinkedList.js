/** initialize node class */
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
/** initialize linkedlist class */

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    /** insert methor to insert values in linked list */
    insert(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;

    }
    traverse(){
        let currentValue=this.head;
        while(currentValue){
            console.log(currentValue.value);
            currentValue=currentValue.next;
        }
    }

    remove(){
        if(!this.head){
            return;
        }else{
            let currentValue = this.head;
            let previousValue=currentValue;
            while(currentValue.next){
                previousValue=currentValue;
                currentValue=currentValue.next;
            }
            this.tail=previousValue;
            this.tail.next=null;
            length--;
            if(this.length===0){
                this.head=null;
                this.tail=null;
            }
        }
        return this;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp; // Return the removed node
    }

    insertBegining(value){
        let newNode =new Node(value)
        let temp = this.head;
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.head=newNode;
            this.head.next=temp;
        }
        this.length++;
        return this;
    }

    getIndex(value){
        let count = 0;
        let currentItem=this.head;
        if(this.length===0){
            return 'list is empty';
        }else{
            while(currentItem){
                if(currentItem.value===value){
                    return count;
                }else{
                    currentItem=currentItem.next;
                    count++;
                }
            }
            return 'no item found';
        }            
    }

    get(index){
        if(index<0 || index>this.length) return null;
        let count =0;
        let currentItem=this.head;
        while(count !== index){
            currentItem=currentItem.next;
            count++;
        }
        return currentItem;
    }

    set(value,index){
        if(!this.get(index))return false;
        const currentItem = this.get(index);
        currentItem.value = value;
        return true;
    }

    insertInto(index,value){
        const newNode = new Node(value);
        if(!this.get(index))return false;
        if(index === 0){
            this.insertBegining(value);
        }
        else if(index === this.length-1){
            this.insert(value);
        }
        else{
            let previousNode=this.head;
            let currentNode = this.head;
            let count = 0;
            while(count !== index){
                previousNode=currentNode;
                currentNode=currentNode.next;
                count++;
            }
            newNode.next=currentNode;
            previousNode.next=newNode;
            this.length++;
        }
        return this;
    }

    removeFrom(index){
        if (index < 0 || index >= this.length) return false;
        if(index === 0){
            this.shift();
        }else if(index === this.length-1){
            this.remove();
        }else{
        let previousItem=this.head;
        let currentItem=this.head;
        let nextItem;
        let count =0
        while(count !== index){
            previousItem=currentItem;
            currentItem=currentItem.next;
            count++;
        }
        nextItem=currentItem.next;
        previousItem.next=nextItem;
        this.length--;  
    }
    return this;
}

    reverse(){
        if(this.length===0){
            return this;
        }
        let currentNode = this.head;
        let previousNode=null;
        this.head=this.tail;
        this.tail=currentNode
        let nextNode;
        while(currentNode){
            nextNode=currentNode.next;
            currentNode.next=previousNode;
            previousNode=currentNode;
            currentNode=nextNode;
        }
        return this;
    }

    print(){
        let currentNode=this.head;
        let arr=[];
        while(currentNode){
            arr.push(currentNode.value);
            currentNode=currentNode.next;
        }
        console.log(arr)
    }  
}
const list=new SinglyLinkedList();
list.insert("firstNode");
list.insert("secondNode");
list.insert('tail');
list.insertBegining('add1');

// console.log(list.getIndex('tail'));


