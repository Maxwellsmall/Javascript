// let boy = "maxwell";
// console.log(boy);

// let gender = "male";
// console.log(gender);

// let nameOfBoys = "maxwell, john, josh, jake, jerry";
// console.log(nameOfBoys);

// let num = 3;
// let num2 = 10;

//Arithemetric operators
// console.log(num2 + num);

// console.log(num2 - num);

// console.log(num2 / num);
// console.log(num2 % num);

// console.log(num2 ** num);
// console.log(num2 * num);

// let x = 20;

// console.log(x / +2);

// tyes of operators

// console.log(5 == 6);

// console.log(5 != "5");

// console.log(5 !== "5");

// console.log(5 === "5");

// const passMark = 50;

// let studentName = "maxwell";

// let testScore1 = 20;

// let testScore2 = 20;

// let averageScore = (testScore1 + testScore2) / 2;

// console.log(averageScore);

// let num1 = 20;
// let one = 20;

// console.log(num1 * one);

// let username = "maxwell";
// let password = 1234;

// const access = username === "Adeola" && password === "1234";

// if (access !== true) {
//   console.log("access Denied");
// }

// const folder = [
//   {
//     name: "maxwell",
//     age: 20,
//     email: "maxwellsmall88@gmail.com",
//   },
// ];

// let firstName = "max";
// let message = "welcome";

// let greetings = `${message}, ${firstName}`;
// console.log(greetings);

// let sentence = "i am learning javascript";
// console.log(message.length);
// console.log(sentence.length);
// console.log(sentence.indexOf("g"));

// const course = "javascript";
// console.log(course.indexOf("j"));

// let newName = "maxwell";
// let surname = "small";
// console.log(newName[3]);

// console.log(newName.toUpperCase());
// const upper = sentence.toUpperCase()
// console.log(upper.toLowerCase());

// use case combine multiple strings into a single string
//EXample create a full name by concatenating first and last names.
// const str = "hello  ";
// const str1 = "world,";
// console.log(str.concat("", str1));

//use case for replace. replace a specific substring with another substring
//replace a placeholder in a template string with dynamic value
// const str2 = "world,";
// console.log(str2.replace("world", "hello"));

//use case for trim remove whitespace characters from the begginning and end of a string
//Example clean up user input data by removing unneccessary whitespace
// const str3 = " universe ";
// console.log(str3.trim());

// usecase for includes check if a string contains a specific substring.
// Example validate user input contain a specific keyword
// let userInput = "i love jesus";
// let keyword = "jesus";
// if (userInput.includes(keyword)) {
//   console.log("user input contains the keyword");
// }

// use case for slice extract a subset characters from a string
// Example get the file extension from a file name
// let fileName = "example.txt";
// let fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);

// console.log(fileExtension);

// charAt returns the characters at a specific index in a string
//syntax of charAt

// padstart is a string that padstart a string until it's reach to the desire of it's end
// let code = "9";
// console.log(code.padStart(6, 0));

// let myFavoritesFood = "yam and egg";
// console.log(myFavoritesFood.charAt(12));

// let alpha = "abcde";
// let capAlpha = alpha.toUpperCase();
// let capAlpha2 = capAlpha.toLowerCase();
// console.log(capAlpha2.charAt(3));
// Let's dive deeper into each of these number methods and functions:

// Number Methods
// toFixed()
//
// - Purpose: Formats a number to a specified number of decimal places.
// - Example: const num = 123.456; console.log(num.toFixed(2)); // Output: "123.46"
// - Use case: Useful for displaying prices or financial data with a fixed number of decimal places.

// toPrecision()
// - Purpose: Formats a number to a specified length.- Example: const num = 123.456; console.log(num.toPrecision(4)); // Output: "123.5"
// - Use case: Useful for displaying numbers in a specific format, such as scientific notation.

//toExponential() it is useful in science and statistics

// toString()
// - Purpose: Converts a number to a string.
// - Example: const num = 123; console.log(num.toString()); // Output: "123"
// - Use case: Useful when you need to concatenate a number with a string.

// / valueOf()/ - Purpose: Returns the primitive value of a number.
// - Example: const num = new Number(123); console.log(num.valueOf()); // Output: 123
// - Use case: Useful when working with number objects and you need to get the primitive value.

// Number Functions
// parseInt()
// - Purpose: Parses a string and returns an integer.
// - Example: console.log(parseInt("123")); // Output: 123
// - Use case: Useful when you need to convert a string to an integer.

// parseFloat()
// - Purpose: Parses a string and returns a floating-point number.
// - Example: console.log(parseFloat("123.456")); // Output: 123.456
// - Use case: Useful when you need to convert a string to a floating-point number.

// isNaN()
// - Purpose: Checks if a value is NaN (Not a Number).
// - Example: console.log(isNaN("hello")); // Output: true
// - Use case: Useful when you need to validate user input and ensure it's a valid number.

//Number is integer
//isInteger()

// console.log(Number.isInteger(4));

// isFinite()
// - Purpose: Checks if a value is a finite number
// - Example: console.log(isFinite(Infinity)); // Output: false
// - Use case: Useful when you need to check if a number is finite and not infinite

//These number methods and functions can be useful in a variety of situations, such as data validation, formatting, and calculations.
// an array is a collection of element such as numbers. strings

// classification method
// iteration is an advance code

// transformation method are use to transform an array
// .push() it add to one or element to the end of an array
// .pop() it remove the last element in an array
// unShift() it add one or more element to the start of an array
// shift() remove the first element of an array
// splice()
// concat
// length()
// indexOf()
// includes()
// slice()

// forEach()
// map()
// filter()
// find()
// some()
// findIndex()
