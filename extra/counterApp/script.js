document.addEventListener('DOMContentLoaded',()=>{
    const countervalue = document.getElementById('valueid');
    const increaseButton=document.getElementById('increase');
    const decreaseButton=document.getElementById('decrease');
    const resetButton=document.getElementById('reset');

    let countvalue=0;

    increaseButton.addEventListener('click',()=>{
        countvalue++;
        countervalue.innerHTML=countvalue;
    });

    decreaseButton.addEventListener('click',()=>{
        countvalue--;
        countervalue.innerHTML=countvalue;
    });

    resetButton.addEventListener('click' ,()=>{
       countvalue=0;
       countervalue.textContent=countvalue;
    })



    const parentnode= document.querySelector('[id="decrease"]');
    console.log(parentnode.parentNode);
    const text = parentnode.previousSibling;
    console.log(parentnode.nodeType);
    
    console.log(text.nodeType)
    if(text.nodeType===3){
        text.textContent='text has been changed';
    }
    // console.log(parentnode.previousSibling);

})






// let value = 