// /*let js = "amazing"
// let age = 2024 - 1995
// if (js === 'amazi') {
//     console.log(age)
// } else {
//     console.log("bad age")
// }
// console.log(js)

// let years = 3
// console.log(years)
// // let 4oo = "abbh"
// */

// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// markHigherBMI = (BMIMark > BMIJohn) ? "Mark has higher BMI" : "John has Higher BMI"

// console.log(BMIMark, BMIJohn)

// console.log(markHigherBMI)


// const firstName = "Akaytab";
// const surname = "Karmakar";
// const templateLiteral = `I'm ${firstName} ${surname} , working as a software professional`;
// console.log(templateLiteral);

// console.log(10 % 2, 10 / 2, 10 + 2);


// const bill = 275;

// /* Write your code below. Good luck! 🙂 */

// console.log((bill >= 50 && bill <= 300) ? `The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + (bill * 0.15)}` : `The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + (bill * 0.2)}`);

function combine(a, b, c) {
    return a * b / c;
}

console.log(combine(3, 3, 1));


const arr = [1, 2, 3];
function transformToObject(array) {
    const arrNew = arr.map((itmes) => ({ val: itmes }));
    return arrNew;
}
console.log(transformToObject(arr))
