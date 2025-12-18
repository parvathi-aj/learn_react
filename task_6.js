 //Basic Object Destruction
  let person = {
  name: "Sarah Johnson",
  age: 25,
  city: "New York",
  isStudent: true,
};

// Old way (verbose):
 //name = person.name;
 //age = person.age;
 //city = person.city;

// New way (destructuring):
let { name, age, city } = person;

console.log(name);
console.log(age); 
console.log(city); 