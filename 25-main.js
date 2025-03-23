import person from "./25-others.js";
import { array, square } from "./25-others.js";

console.log(person);
console.log(array);
square(5);
square(7);
// const myName = "Jenny";
const person = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}

// Named Export
export const array = [10, 15, 20, 40 ];

// Named Export
export function square(num){
    console.log(`Square is: ${num*num}`); 
}

// Default Export
export default person;