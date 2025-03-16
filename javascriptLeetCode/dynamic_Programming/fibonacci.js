// solve fibonacci series using Dynamic programming
//memoization

function fibo(n,dp=[]){
    if(dp[n] !== undefined) return dp[n];
    if(n<=2) return 1;
    let res = fibo(n-1,dp)+fibo(n-2,dp);
    dp[n]= res;
    return res;
}

//tabulation
function fib(n){
    let fibnum=[0,1,1];
    for(let i=3;i<=n;i++){
        fibnum[i]=fibnum[i-1]+fibnum[i-2];
    }
    return fibnum[n];
}

console.log(fib(100));
