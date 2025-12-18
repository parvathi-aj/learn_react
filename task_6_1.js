//Merge two user arrays and destructure nested data.


let users1 = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 25,
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["reading", "swimming"],
  },
  {
    id: 2,
    name: "Mike Smith",
    age: 30,
    address: {
      city: "Los Angeles",
      country: "USA",
    },
    hobbies: ["gaming", "cooking"],
  },
];


let users2 = [
  {
    id: 3,
    name: "Lisa Brown",
    age: 22,
    address: {
      city: "Chicago",
      country: "USA",
    },
    hobbies: ["painting", "dancing"],
  },
  {
    id: 4,
    name: "David Wilson",
    age: 28,
    address: {
      city: "Boston",
      country: "USA",
    },
    hobbies: ["hiking", "photography"],
  },
];


let allUsers = [...users1, ...users2];
console.log("Total users:", allUsers.length);


allUsers.forEach((user, index) => {
 
  let { name, age, address, hobbies } = user;

 
  let { city, country } = address;

  
  let [firstHobby, secondHobby] = hobbies;

  console.log(`User ${index + 1}:`);
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Location: ${city}, ${country}`);
  console.log(`Hobbies: ${firstHobby}, ${secondHobby}`);
  console.log("---");
});