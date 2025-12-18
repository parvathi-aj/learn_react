// Create an array of users and display formatted information about each user.

let users = [{name: "Sara",age:23, city:"New York",isStudent: true},
    {name: "Mary",age:23, city:"New York",isStudent: false},
    {name: "Reenu",age:27, city:"New York",isStudent: false},
    {name: "Will",age:13, city:"New York",isStudent: true},
    {name: "Mike",age:13, city:"New York",isStudent: true},
    
];


for (let i =0 ;i<users.length;i++){
    console.log("User"+(i+1),"Details:");
    console.log("-------------------");
    console.log("Name:",users[i].name);
    console.log("Age:",users[i].age);
    console.log("City:",users[i].city);
    console.log("Student:",users[i].isStudent);
    console.log("-------------------");
}