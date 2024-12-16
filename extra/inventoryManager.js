let inventory = [];

const addItem=(name,category,price,quantity)=>{
    const add={
        name:name,
        category:category,
        price:price,
        quantity:quantity
    }
    return inventory.push(add);
}

const deleteItem=(name)=>{
    const findItem=inventory.findIndex((item)=>{
        return item.name===name;
    })
    if(findItem!==-1){
        return inventory.splice(findItem,1);
    } 
}


addItem('apple','fruits',120,2);
addItem('Mango','fruits',98,3);
addItem('lentils','grocery',180,5);
addItem('potato','vegetables',35,2);

console.log(deleteItem('Mango'));

console.log(inventory);
