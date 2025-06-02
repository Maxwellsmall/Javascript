//Strings (5 questions)
//Convert this string to uppercase:
let name = "maxwell";
let myName = name.toUpperCase();
console.log(myName);

//let greeting = "hello world";
// Your code here
//Extract "world" from this string using slice():
let greeting = "hello world";
let extracted = greeting.slice(5);
console.log(extracted);

//let text = "hello world";
// Your code here
//Replace all spaces with hyphens in this string:

//let sentence = "JavaScript is awesome";
// Your code here
let text = "JavaScript is awesome";
let replacedText = text.replace(/ /g, "-");
console.log(replacedText);

//Check if this string starts with "Mr":

//let name = "Mr. Smith";
// Your code here
let nameCheck = "Mr smith";
let startsWithMr = nameCheck.startsWith("Mr");
console.log(startsWithMr);
//Split this string into an array of words:

//let phrase = "apple,banana,orange";
// Your code here
let phrase = "apple,banana,orange";
let wordArray = phrase.split(",");
console.log(wordArray);
//Numbers (5 questions)
//Convert this string to a number:

//let numStr = "42";
// Your code here
let num = "42";
let convertedNum = Number(num);
console.log(convertedNum);
//Round this number to 2 decimal places:

//let price = 19.9876;
// Your code here
let price = 19.9876;
console.log(price.toFixed(2));
//Generate a random number between 1 and 10:

// Your code here
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
//Check if this value is NaN:

//let result = 0/0;
// Your code here
let result = 0 / 0;
console.log(isNaN(result));
//Convert this number to a hexadecimal string:

//let value = 255;
// Your code here
let value = 255;
let hexvalue = value.toString(16);
console.log(hexvalue);
//Arrays (5 questions)
//Add "grape" to the end of this array:

//let fruits = ["apple", "banana"];
// Your code here
let fruits = ["apple", "banana"];
let newFruits = fruits.push("grape");
console.log(fruits);
//Remove the first element from this array:

//let colors = ["red", "green", "blue"];
// Your code here
let colors = ["red", "blue", "green"];
let newColors = colors.shift();
console.log(newColors);
//Combine these two arrays:

//let arr1 = [1, 2];
//let arr2 = [3, 4];
// Your code here
let arr1 = [1, 2];
let arr2 = [3, 4];
let join = arr1.concat(arr2);
console.log(join);
//Reverse this array:

//let letters = ["a", "b", "c"];
// Your code here
let letters = ["a", "b", "c"];
let reversedLetters = letters.reverse();
console.log(reversedLetters);
//Check if "banana" exists in this array:

//let groceries = ["apple", "orange", "banana"];
// Your code here
let groceries = ["apple", "orange", "banana"];
let hasBanana = groceries.includes("banana");
console.log(hasBanana);
//Objects (5 questions)
//Access the age property of this object:

//let person = { name: "John", age: 30 };
// Your code here
let person = { name: "John", age: 30 };
console.log(person.age);
//Add a new property to this object:

//let car = { make: "Toyota" };
// Add model: "Camry"
// Your code here
let car = { make: "Toyota", model: "camry" };
car.model = "camry";
console.log(car);
//Get all keys of this object:

//let student = { name: "Alice", grade: "A" };
// Your code here
let student = { name: "Alice", grade: "A" };
console.log(Object.keys(student));
//Delete the password property from this object:

//let user = { name: "Bob", password: "123" };
// Your code here
let user = { name: "Bob", password: "123" };
delete user.password;
console.log(user);

//Check if this object has an "email" property:

//let contact = { name: "Sarah", phone: "555-1234" };
// Your code here
let contact = { name: "Sarah", phone: "555-1234" };
let newContact = contact.hasownProperty("email");
