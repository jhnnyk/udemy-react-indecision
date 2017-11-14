import { square, add } from "./utils.js";
import { isAdult, canDrink } from "./person.js";

console.log("app.js is running!");
console.log(square(4));
console.log(add(100, 23));

console.log(`is adult at 19: ${isAdult(19)}`);
console.log(`is adult at 17: ${isAdult(17)}`);

console.log(`can drink at 21: ${canDrink(21)}`);
console.log(`can drink at 17: ${canDrink(17)}`);
