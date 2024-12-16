// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

//consicutive numbers
function averagePair(arr,avg){
    let p1=0;
    let p2=1;

    while(p2<arr.length){
        sum = arr[p1]+arr[p2];
        if((sum/2)===avg){
            return true;
        }else{
            p1++;
            p2++;
        }
    }
    return false;

}
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));


//non consicutive numbers

function averagePair2(arr,avg){
    let p1=0;
    let p2=arr.length-1;

    while(p1<p2){
        let sum = arr[p1]+arr[p2];
        if((sum/2)===avg){
            return true;
        }else if((sum/2)>avg){
            p2--;
        }else{
            p1++;
        }
    }
    return false;
}
console.log(averagePair2([1,3,3,5,6,7,10,12,19],8));