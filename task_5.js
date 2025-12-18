// Count Apples in the array

let bag = ["Apple" , "Apple", "Orange", "Strawberry","Apple"]
let countApple = bag.reduce((count , item)=>{
    if (item =="Apple"){
        count=count+1;
    } 
    return count;
},0)

console.log("Count of Apple:",countApple)


// Find totalElectronicsValue

let products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Book", price: 20, category: "Education" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Pen", price: 2, category: "Office" },
  { name: "Tablet", price: 600, category: "Electronics" },
];
let totalElectronicsValue = products
  .filter((product) => product.category === "Electronics")
  .map((product) => product.price * 2)
  .reduce((total, price) => total + price, 0);

console.log(totalElectronicsValue);