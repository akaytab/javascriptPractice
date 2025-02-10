/**
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 */

var canPlaceFlowers = function(flowerbed, n) {
    
    let currentSpot = 0
    while(currentSpot<flowerbed.length){
        let previousSpot =currentSpot-1
        let nextSpot =currentSpot+1;
        if(flowerbed[currentSpot] === 1){
            currentSpot++;
        }
        else if(flowerbed[currentSpot] === 0 && (flowerbed[previousSpot]=== 1 || flowerbed[nextSpot]===1)){
            currentSpot++;
        }else{
            flowerbed[currentSpot]=1;
            n--;
            if(n<=0){
                break;
            }
            currentSpot++;
        }     
    }

    if(n===0){
        return true;
    }else {
        return false;
    }
};

console.log(canPlaceFlowers([0,0,1,0,0],1))