const obj = {
  name: "maxwell",
  age: 13,
  isActive: true,
};
console.log(obj);
const nested = {
  name: "ade",
  grades: {
    maths: "A1",
    english: "B2",
    chemistry: "A1",
  },
  age: 16,
  isActive: false,
};
console.log(nested);

const human = {
  type: "unknown",
  sound: "none",
  makeSound() {
    console.log(this.sound);
  },
};

const man = Object.create(human);
(man.type = "maxwell"), (man.soound = "hey");
console.log(man);

const defaultSetting = { theme: "light", fontsize: 16 };
const userSettimgs = { fontsize: 18 };

const finalSettings = Object.assign([], defaultSetting,userSettimgs);
console.log(finalSettings);


const ent = [["name", "max"], ["age", "20"]]
console.log(Object.fromEntries(ent))

const org = {A : 2, B : 4}
const result = {...org, C : 3, D : 2}
console.log(result
  
)