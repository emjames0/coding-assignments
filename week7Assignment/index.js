//Question 1
console.log('Question 1:'); 

//below is the creation of the array
let ages = [3,9,23,64,2,8,28,93]
console.log(ages);

//below is the programmatic subtraction of values 0 & 7 without using ages[0] & ages [7]
let lastNumber = ages[ages.length-1];
let firstNumber = ages.slice(-ages.length)[0];
let difference = lastNumber - firstNumber;
console.log(difference);

//below is the addition of a new age the array
ages.push(35);
console.log(ages);

//below is the programmatic subtraction of values 0 & 8 without using ages[0] and ages[8]
let lastNumber2 = ages[ages.length-1];
let firstNumber2 = ages.slice(-ages.length)[0];
let difference2 = lastNumber2 - firstNumber2;
console.log(difference2);

//below is the for loop to calculate the total of ages put together
let calculateSum = () => {
    let sum = 0
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    } return sum; 
} 
console.log(calculateSum()); 

//below now gets the average of this
let averageAges = () => {
    let sum = calculateSum();
    return sum / ages.length;
}
console.log(averageAges()); 

//Question 2
console.log('Question 2:');

//below is the creation of the array 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names);

//below is the for loop to calculate the total number of letters in the array
let calculateLetters = () => {
    let sum = 0;
    for (let i = 0; i < names.length; i++ ) {
        sum += names[i].length;
    } return sum; 
}
console.log(calculateLetters()); 

//below now gets the average of this 
let nameAverage = () => {
    let sum = calculateLetters();
    return sum / names.length; 
}
console.log(nameAverage()); 

//Question 3
console.log('Question 3:'); 
console.log('You access the last element of an array by using the array name.length - 1');

//Question 4
console.log('Question 4:');
console.log('You access the first element of an array by its 0 value. For example names[0]'); 

//Question 5
console.log('Question 5:');

//below is the new array nameLengths & the loop to interate over with the name lengths 

const getNameLengths = (names) => {
    let nameLengths = [];
    for(let i = 0; i < names.length; i++) {
        let length = names[i].length;
        nameLengths.push(length);
    } return nameLengths;
}

let nameLengths = getNameLengths(names);
console.log(nameLengths);

//Question 6
console.log('Question 6:');

//below is the loop to iterate over the nameLengths array and calculate the sum of all the elements 
let sum = 0; 
for (let i = 0; i <nameLengths.length; i++) {
     sum += nameLengths[i];
}

console.log(`The total sum of name lengths is ${sum}`); 

//Question 7 
console.log('Question 7:'); 

//below is the creation of an arrow function that takes two parameters and then a loop that iterates over n number of times to populate the passed in word
const promptSeven = (word, n) => {
    let result7 = '';
    for (let i = 0; i < n; i++) {
        result7 += word; 
    } return result7; 
}
console.log(promptSeven("Chocolate ", 8)); 

//Question 8
console.log('Question 8:');

//below is an arrow function that takes two parameters and returns a full name 
const promptEight = (firstName, lastName) => {
    return fullName = firstName + lastName;
}
console.log(promptEight('Emily ', 'James')); 

//Question 9
console.log('Question 9:'); 

//below is an arrow function that takes an array of numbers and returns the average of the elements in the array 
const promptNine = (numbers) => {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } return sum < 100;  
}
let numbers1 = [1,2,7,8,9,5,6,1,7,2,7];
let numbers2 = [108,32,77];
console.log(promptNine(numbers1));
console.log(promptNine(numbers2)); 

//Question 10
console.log('Question 10:'); 

//below is the function that takes in array, calculates the total numbers and then returns the average
const promptTen = (array) => {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    } return sum / array.length; 
}

let array1 = [12,18,19,25,1,32,6];
let array2 = [41,7,8,91,12,3];
console.log(promptTen(array1));
console.log(promptTen(array2)); 

//Question 11 
console.log('Question 11:'); 

//Below is a function that takes and compares two arrays, finding their averages, and returning true if the first array's average is greater than the second array's average
const compareAverage = (array11, array12) => {
    const calculateAverage = (numbers) => {
        if (numbers.length === 0) {
            return 0; 
        } 
        let sum = 0; 
        for (let i = 0; i <numbers.length; i++) {
            sum += numbers[i];
        } return sum / numbers.length;
    }
    const average1 = calculateAverage(array11);
    const average2 = calculateAverage(array12);
    return average1 > average2; 
}

const array11 = [78,9,15,36,109,1];
const array12 =[206,22,90,12,14];

console.log(compareAverage(array11, array12)); 

//Question 12: 
console.log('Question 12:'); 

//below is the function that returns true or false based on the input of two parameters 

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if(isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else return false; 
}
console.log(willBuyDrink(true, 1.37));
console.log(willBuyDrink(false, 90.50));
console.log(willBuyDrink(true, 22.75));
console.log(willBuyDrink(false, 7.25));

//Question 13
console.log('Question 13:'); 

//below is code that takes a name (string) and reverses it as if you were looking into a mirror. Explaning why I chose this is hard... I just had the thought about a website reflecting words back as if it were a mirror so I tried it. 
 const reverseName = (name) => {
    return name.split('').reverse().join('');
}

const name1 = 'Emily James';
const name2 = 'Joshua Vega';
console.log(reverseName(name1));
console.log(reverseName(name2)); 