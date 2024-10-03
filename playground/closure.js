function createGreeting(greeting = "") {
    return function (name = "Vadym") {
        return `${greeting} ${name}`;
    };
}

const sayHello = createGreeting("Hello");
const sayHey = createGreeting("Hey");

console.log(sayHello());
console.log(sayHello("someone"));
console.log(sayHey());

function createGame(gameName = "football") {
    let score = 0;
    return function () {
        score++;
        console.log(`Score for ${gameName} is ${score}`);
    };
}

const footbalGame = createGame("Football");
const basketballGame = createGame("Basketball");
for (let i = 0; i < 10; i++) {
    footbalGame();
    basketballGame();
}
