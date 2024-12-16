let a= 10;
function outer(){
    let b = 20;
    function inside(){
        let c=30;
        console.log(a,b,c);
    }
   inside();
}
outer()
