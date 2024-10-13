import { sayHi, age, cat } from './utils.js';
import notMe from './me.js';
console.log(notMe);

console.log(sayHi(notMe.name));
console.log(sayHi(cat));
