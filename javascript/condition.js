// conditional  statement allow ur code tomake decison and execute
// different code block based on different conditions

let age = 20;
if (age == 20) {
  console.log("Access granted");
}

// if else executa a block of code if it the statement is true and the other if the statement is false

let temperature = 3;
if (temperature === 37) {
  console.log("temperature is normal");
} else {
  console.log("temperature is low");
}

let jambScore = "";
let userAge = "";

if (jambScore >= 200 && userAge >= 18) {
  console.log("Admission Granted");
} else {
  console.log("try again next year");
}

// if and elseif just use to check multiple condition

let time = 12;

if (time < 12) {
  console.log("good morning");
} else if (time >= 13) {
  console.log("good afternoon");
}
