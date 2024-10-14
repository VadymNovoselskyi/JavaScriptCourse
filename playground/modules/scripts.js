// import { sayHi, age, cat as catName } from './utils.js';
// import notMe from './me.js';
// console.log(notMe);

// console.log(sayHi(notMe.name));
// console.log(sayHi(catName));

import { displayCurrencies } from './handlers.js'
const currencyButton = document.querySelector('.currency');
currencyButton.addEventListener('click', displayCurrencies);
