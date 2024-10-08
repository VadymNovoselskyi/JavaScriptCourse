/*
    Static Methods
*/

const buns = ["egg", "wonder", "brioche"];

const meats = {
    beyond: 7,
    beef: 4,
    pork: 3,
};

// Array.of();

// Make a function that creates a range from x to y with Array.from();
function createRange(start, finish) {
    return Array.from({ length: finish - start + 1 }, function (_, index) {
        return index + start;
    });
}

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
function modifyObject(object) {
    console.log(Object.entries(object));
    console.log(Object.keys(object));
    console.log(Object.values(object));
}

//modifyObject(meats);

/*
    Instance Methods
*/

const toppings = [
    "Mushrooms",
    "Tomatoes",
    "Eggs",
    "Chili",
    "Lettuce",
    "Avocado",
    "Chiles",
    "Bacon",
    "Pickles",
    "Onions",
    "Cheese",
];

// Display all bun types with " or " - use join()
//console.log(buns.join(" or "));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a array
const food = "hot dogs,hamburgers,sausages,corn";
//console.log(food.split(","));

// take the last item off toppings with pop()
//console.log(toppings.join(", "));
toppings.pop();
//console.log(toppings.join(", "));

// add it back with push()
toppings.push("Cheese");
//console.log(toppings.join(", "));

// take the first item off toppings with shift()
toppings.shift();
//console.log(toppings.join(", "));

// add it back in with unshift()
toppings.unshift("Mushrooms");
//console.log(toppings.join(", "));

// Do the last four,but immutable (with spreads and new variables)
const toppings1 = [...toppings];
toppings1.pop();
//console.log(toppings1.join(", "));

const toppings2 = [...toppings1, "Cheese"];
//console.log(toppings2.join(", "));

const toppings3 = [...toppings2];
toppings3.shift();
//console.log(toppings3.join(", "));

const toppings4 = ["mushrooms", ...toppings3];
//console.log(toppings4.join(", "));

// Make a copy of the toppings array with slice()
const copyToppings1 = toppings.slice(0);
//console.log(copyToppings1);

// Make a copy of the toppings array with a spread
const newToppings = [...toppings];
//console.log(newToppings.join(", "));

// take out items 3 to 5 of your new toppings array with splice()
newToppings.splice(3, 2);
//console.log(newToppings.join(", "));

// find the index of Avocado with indexOf() / lastIndexOf()
const avocadoIndex = newToppings.indexOf("Avocado");
//console.log(avocadoIndex);

// Check if hot sauce is in the toppings with includes()
const isChiliPresent = newToppings.includes("Chili");
//console.log(isChiliPresent);

// add it if it's not
if (!isChiliPresent) newToppings.push("Chili");
//console.log(newToppings.join(", "));

// flip those toppings around with reverse()
newToppings.reverse();
//console.log(newToppings.join(", "));

/*
    Callback Methods
*/

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedbacks = [
    { comment: "Love the burgers", rating: 4 },
    { comment: "Horrible Service", rating: 2 },
    { comment: "Smoothies are great, liked the burger too", rating: 5 },
    { comment: "Ambiance needs work", rating: 2 },
    { comment: "I DONT LIKE BURGERS", rating: 1 },
];

function findByWord(word) {
    return function (feedback) {
        return feedback.comment.toLowerCase().includes(word);
    };
}

function findByMinRating(rating) {
    return function (feedback) {
        return feedback.rating >= rating;
    };
}

function findByRating(rating) {
    return function (feedback) {
        return feedback.rating === rating;
    };
}

// find the first rating that talks about a burger with find()
const firstBurgerFeedback = feedbacks.find(findByWord("burger"));
//console.log(firstBurgerFeedback);

// find all ratings that are above 2 with filter()
const twoFeedback = feedbacks.filter(findByMinRating(2));
//console.log(twoFeedback);

// find all ratings that talk about a burger with filter()
const burgerFeedbacks = feedbacks.filter(findByWord("burger"));
//console.log(burgerFeedbacks);

// Remove the one star rating however you like!
const allButOne = feedbacks.filter(findByMinRating(2));
//console.table(allButOne);

// check if there is at least 5 of one type of meat with some()
const someFiveMeat = Object.values(meats).some((quantity) => quantity > 5);
//console.log(someFiveMeat);

// make sure we have at least 3 of every meat with every()
const everyOverThree = Object.values(meats).every((quantity) => quantity >= 3);
//console.log(everyOverThree);

// sort the toppings alphabetically with sort()
const sortedToppings = toppings.sort();
//console.log(sortedToppings);

// sort the order totals from most expensive to least with .sort()
const sortedTotals = orderTotals.sort((a, b) => b - a);
//console.log(sortedTotals);

// Sort the prices with sort()
const sortedPrices = Object.entries(prices).sort((a, b) => a[1] - b[1]);
//console.table(Object.fromEntries(sortedPrices));

/*
    Looping Methods (next)
*/
