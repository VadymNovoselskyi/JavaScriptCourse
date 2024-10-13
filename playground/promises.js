function makePizza(...toppings) {
	const orderTime = 1000 + toppings.length * 200;
	return new Promise(function (resolve, reject) {
		if (toppings.includes('pineapple')) reject('Are you serious right neow bro?');
		setTimeout(() => resolve(`Heres your pizza with ${toppings.join(' and ')}`), orderTime);
	});
}

// makePizza('pepperoni')
// 	.then(pizza => {
// 		console.log(pizza);
// 		return makePizza('pepperoni', 'tomato');
// 	})
// 	.then(pizza => {
// 		console.log(pizza);
// 		return makePizza('pepperoni', 'tomato', 'shrooms');
// 	})
// 	.then(pizza => {
// 		console.log(pizza);
// 		return makePizza('pineapple');
// 	})
// 	.then(pizza => {
// 		console.log(pizza);
// 		return makePizza('pepperoni', 'tomato', 'fish', 'kiwi');
// 	})
//     .then(pizza => console.log(pizza));

const pizza1Promise = makePizza('pepperoni', 'tomato');
const pizza2Promise = makePizza('pepperoni', 'tomato', 'shrooms');
const pizza3Promise = makePizza('pineapple');

const dinnerPromise = Promise.all([pizza1Promise, pizza2Promise, pizza3Promise]);
dinnerPromise
    .then(pizzas => pizzas.forEach(pizza => console.log(pizza)))
    .catch(handleError);

const firstPizzaPromise = Promise.race([pizza1Promise, pizza2Promise, pizza3Promise]);
firstPizzaPromise
    .then(pizza => console.log(`The first pizza! ${pizza}`))
    .catch(handleError);

function handleError(error) {
    console.error(error);
}

const secureDinnerPromise = Promise.allSettled([pizza1Promise, pizza2Promise, pizza3Promise])
secureDinnerPromise.then(results => results.forEach(result =>console.log(result)));
