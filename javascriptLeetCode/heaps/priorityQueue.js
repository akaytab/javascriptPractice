class Node{
    constructor(value, prio){
        this.value=value;
        this.prio=prio;
    }
}

class PriorityQueue{
    constructor(){
        this.queue=[];
    }

    enQueue (value,prio){
        const node =new Node(value,prio);
        if(this.queue===null){
            this.queue=[];
        }else{
            this.queue.push(node);
            let currentIdx = this.queue.length-1;
            while(currentIdx>0){
               let parentIdx = Math.floor((currentIdx-1)/2);
               if(this.queue[currentIdx].prio<this.queue[parentIdx].prio) {
                let temp =this.queue[currentIdx];
                this.queue[currentIdx]=this.queue[parentIdx];
                this.queue[parentIdx]=temp;
                currentIdx=parentIdx
               }else{
                break;
               }
            }

        }
        return this.queue;
    }

    swap(value1,value2){
        let temp = this.queue[value1];
        this.queue[value1]=this.queue[value2];
        this.queue[value2]=temp;

    }

    deQueue(){
        if(this.queue.length<=1){
            this.queue.pop();
        }
        let last =this.queue.length-1;
        this.swap(0,last);
        this.queue.pop();

        let parent=0

        while (true){
            let leftChild=(2*parent)+1;
            let rightChild=(2*parent)+2;
            let swapIndex=null;

            if(leftChild<this.queue.length){
                if(this.queue[leftChild].prio>this.queue[parent].prio){
                    swapIndex=leftChild;
                }
            }
            if(rightChild<this.queue.length){
                if((swapIndex===null && this.queue[rightChild].prio<this.queue[leftChild].prio)||(swapIndex!==null && this.queue[rightChild]<this.queue[leftChild].prio)){
                    swapIndex=rightChild;
                }
            }
            if(swapIndex===null){
                break;
            }
            this.swap(parent,swapIndex);
            parent=swapIndex;
        }
        return this.queue;




    }
}

const pq=new PriorityQueue()
pq.enQueue('morning',1)
pq.enQueue('evening',3)
pq.enQueue('afterboon',2)
pq.enQueue('night',4)