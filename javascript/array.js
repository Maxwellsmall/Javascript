const courses = [];
courses.push("javascript");
console.log(courses);

const topics = ["Data Types", "Numbers", "operators"];
topics.push("strings");
topics.push(1, 2, 3);
topics.push({ name: "maxwell", age: 18, isActive: true });
console.log(topics);
topics.pop();
console.log(topics);

topics.unshift({ name: "maxwell", age: 18, isActive: true });
topics.shift();
console.log(topics);

const subCourses = [
  "Html",
  "reactjs",
  "nextjs",
  "cyber security",
  "javascript",
];
subCourses.splice(-2, 2, "data Analysis");
console.log(subCourses);
let name = "MAXWELL SMALL";
let myname = name.toLowerCase();
console.log(myname);

const initial = ["max", "max", "max", "max", "max", "max"];

const sli = initial.slice(2, 5);
console.log(sli);
