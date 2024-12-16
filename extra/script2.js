'use strict'

let hasphoneNumber = false;
const hasMobile = true;

if (hasMobile) hasphoneNumber = true;
if (hasphoneNumber) console.log('I have a mobile')



let reverse = 0;
let num = 0;
function reverseint(number) {
    while (number > 0) {
        num = number % 10;
        reverse = reverse * 10 + num;
        number = Math.floor(number / 10);
    }
    return reverse;
}

function isPalindrome(number) {
    const revNum = reverseint(number);
    if (revNum === number) {
        console.log(`${number} is a palindrome number`);
    } else {
        console.log(`${number} is not a palindrome number`);
    }
}

console.log(isPalindrome(121))


const calc = num3 => 2024 - num3;
console.log(calc(1997));


const arr = new Array();
let i = 0;
for (i = 0; i < 5; i++) {
    arr.push(i);
}

console.log(arr);
//console.log(arr.pop(2));


let tip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
const totalBill = bill + tip;

//console.log( (bill >= 50 && bill <= 300) ? `The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + (bill * 0.15)}` : `The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + (bill * 0.2)}`);


i = 0;
const tips = new Array;
const bills = [125, 555, 44];
for (i = 0; i < bills.length; i++) {
    tips.push(tip(bills[i]));
}
console.log(tips);

const person = {
    name: 'Jonas',
    friends: ['Michel', 'John', 'Peter']
}
console.log(`${person.name} has ${(person.friends).length} , and his best friend is called ${(person.friends)[0]}`);

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
// console.log(mark.bmi);

console.log((mark.bmi < john.bmi) ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
