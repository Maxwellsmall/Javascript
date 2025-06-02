// object are fundamentals js they are composite data types that allow
//  an object is a stand alone entity with properties and function

const obj = {
  name: "max",
  phoneNumber: 1,
  isActive: true,
};

// nested object
const student = {
  name: "maxwell",
  grades: {
    math: "A1",
    physics: "B2",
    chemistry: "A1",
  },
  isActive: true,
};
console.log(student);

// prototype object
const animal = {
  type: "unknown",
  sound: "none",
  makeSound() {
    console.log(this.sound);
  },
};

const dogs = Object.create(animal);
dogs.type = "dogs";
dogs.sound = "woof";
console.log(dogs);

// object assign()

const defaultSettings = { theme: "light", fontsize: 16 };
const userSettings = { fontsize: 18 };

const finalSettings = Object.assign([], defaultSettings, userSettings);
console.log(finalSettings);

// object Entries
const ent = [
  ["name", "maxwell"],
  ["age", 25],
];
console.log(Object.fromEntries(ent));

// using spread operators (...)
const original = { A: 77, B: 66 };
const final = { ...original, C: 55 };
console.log(final);

const profile = {
  name: "maxwell",
  age: 14,
  title: "frontend",
};
console.log(Object.keys(profile));

const pro = {
  name: "jin",
  user: 2,
};

console.log(Object.values(pro))

