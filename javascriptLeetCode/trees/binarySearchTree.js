class Node{
    constructor(value){
        this.right=null;
        this.left=null;
        this.value =value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newvalue = new Node(value);
        if(!this.root){
            this.root=newvalue;
        }
        else{
            let currentRoot=this.root;
            while(true){
            //to left function
            if(value<=currentRoot.value){
                if(currentRoot.left === null){
                    currentRoot.left=newvalue;
                    return this;
                }else{
                currentRoot=currentRoot.left;
                }
            }else{
                //to right function
                if(currentRoot.right === null){
                    currentRoot.right =newvalue;
                    return this;
                }else{
                currentRoot=currentRoot.right;
                }
            }
        }
    }
        return this;

    }

    find(value){
        let current=this.root;
        while(current!==null){
            if(value<current.value){
                current=current.left;
            }else if(value>current.value){
                current=current.right;
            }else {
                return true;
            }     
        }
        return false;
    }

    bfs(){
        let queue=[];
        let isVisited=[];
        let current=this.root;
        queue.push(current);
        while(queue.length){ 
            current=queue.shift();
            isVisited.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);       
        }
        return isVisited;
    }

    preOrder(){
       let current=this.root;
       let queue =[];
       function traverse(node){
        queue.push(node.value);
        if(node.left)traverse(node.left);
        if(node.right)traverse(node.right);
       }
       traverse(current);
       return queue;  
    }

    postOrder(){
        let current =this.root;
        let queue =[];
        const traverse=(node)=>{
            if(node.left){traverse(node.left);}
            if (node.right){
                traverse(node.right);
            }
            queue.push(node.value);
        }
        traverse(current);
        return queue;       
    }

    inOrder(){
        let current =this.root;
        let queue=[];
        const traverse =(node)=>{
            if(node.left)traverse(node.left);
            queue.push(node.value);
            if(node.right)traverse(node.right);
        }
        traverse(current);
        return (queue);
    }
}

const bst =new BinarySearchTree();
bst.insert(45);
bst.insert(89);
bst.insert(12);
bst.insert(13);
bst.insert(1);
bst.insert(99);
bst.insert(48);


/**        36
 *   12          49
 * 2    13    45  
 *           37    */ 

// queue = 36 12 2 13 49 45 37 

