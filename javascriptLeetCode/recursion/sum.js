

function recSum(s) {
    if (s === 0) return 0;
    console.log((s % 10) + recSum(Math.floor(s / 10)));
    
    return (s % 10) + recSum(Math.floor(s / 10));
}

console.log(recSum(123456,0));
