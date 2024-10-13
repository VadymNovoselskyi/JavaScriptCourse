function wait(timeout = 0) {
	return new Promise(resolve => setTimeout(resolve, timeout));
}

async function go() {
	console.log('Starting');
	await wait(2000);
	console.log('Middle');
	await wait(3000);
	console.log('Ending');
}

//go();

function makePizza(...toppings) {
	const orderTime = 1000 + toppings.length * 200;
	return new Promise(function (resolve, reject) {
		if (toppings.includes('pineapple')) reject('Are you serious right neow bro?');
		setTimeout(() => resolve(`Heres your pizza with ${toppings.join(' and ')}`), orderTime);
	});
}

async function makeDinner() {
	const pizzaPromise1 = makePizza('pepperoni', 'tomato');
	const pizzaPromise2 = makePizza('pepperoni', 'tomato', 'shrooms');
	const pizzaPromise3 = makePizza('pineapple');

	const [pizza1, pizza2, pizza3] = await Promise.allSettled([pizzaPromise1, pizzaPromise2, pizzaPromise3]);
	return [pizza1, pizza2, pizza3];
}

const dinner = async () => {
	const pizzas = await makeDinner();
	pizzas.forEach(pizza => console.log(pizza));
};

dinner();
