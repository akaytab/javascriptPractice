/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 */



function coinChnage(coins=[],amount){
    let dp= Array(amount+1).fill(Infinity);
    dp[0]=0;
    let ans=Infinity;

    if(amount === 0) return 0;

    for(let i=0;i<coins.length;i++){
        if(amount-coins[i]>=0){
            let subAns=0;
            if(dp[amount-coins[i]] !== undefined){
                subAns = dp[amount-coins[i]]
            }else{
                subAns = coinChnage(coins,amount-coins[i],dp)
            }

            if(subAns != Infinity && subAns+1<ans){
                ans=subAns+1;
            }
        }
    }
    return dp[amount]=ans;

}

console.log(coinChnage([1,2,5],11))