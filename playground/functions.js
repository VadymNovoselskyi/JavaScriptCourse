function sum(n1, n2) {
    const sum = n1 + n2;
    console.log(`${n1} + ${n2} is ${sum}`);
    return n1 + n2;
}

const n1 = 2;
const n2 = 3;
sum(n1, n2);

const mul = (n1, n2 = 1) => {
    const mul = n1 * n2;
    console.log(`${n1} * ${n2} is ${mul}`);
    return n1 * n2;
};
mul(n1, n2);

function createPerson(firstname, lastname) {
    const person = {
        name: `${firstname} ${lastname}`,
        hi() {
            console.log(`Hello ${this.name}`);
        },
    };
    return person;
}

const me = createPerson("Vadym", "Novoselskyi");
me.hi();
