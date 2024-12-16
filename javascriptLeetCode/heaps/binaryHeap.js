class BinaryHeap{
    constructor(){
        this.heap=[];
    }
    insert (value){
        if(this.heap===null){
            this.heap=[];
        }
        this.heap.push(value);
        let childIndex=this.heap.length-1;       
        while(childIndex>0){
            let parentIndex=Math.floor((childIndex-1)/2);
            if(this.heap[childIndex]>this.heap[parentIndex]){
                let temp = this.heap[childIndex];
                this.heap[childIndex]=this.heap[parentIndex];
                this.heap[parentIndex]=temp;
                childIndex=parentIndex;
            }else{
                break;
            }
        }   
    return this.heap;
}

    extract(){
        if (this.heap.length<=1){
            return this.heap.pop();
        }
        let lastValue=this.heap.length-1
        this.swap(0,lastValue);
        this.heap.pop();

        let parentIndex=0;

        while(true){
            let childOne = (2* parentIndex)+1;
            let childTwo = (2* parentIndex)+2;
            let swapIndex=null;

            if(childOne<this.heap.length){
                if(this.heap[childOne]<this.heap[parentIndex]){
                    swapIndex=childOne;
                }
            }
            if(childTwo<this.heap.length){
                if((swapIndex===null && this.heap[childTwo]<this.heap[parentIndex])||(swapIndex!==null && this.heap[childTwo]<this.heap[childOne])){
                    swapIndex=childTwo;
                }
            }
            if (swapIndex===null){
                break;
            }
            this.swap(parentIndex, swapIndex);
             parentIndex = swapIndex;
    }
    return this.heap;
}

    swap(value1,value2){
        let temp =this.heap[value1];
        this.heap[value1]=this.heap[value2];
        this.heap[value2]=temp;
    }

}
const bp =new BinaryHeap();
bp.insert(20);
bp.insert(45);
bp.insert(2);
bp.insert(10);
bp.insert(100);
bp.insert(87);
bp.insert(11);
// bp.extract()


// temp = child ; 