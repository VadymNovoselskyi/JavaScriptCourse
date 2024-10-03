// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.append(div);
// make an unordered list
const ul = document.createElement("ul");
// add three list items with the words "one, two, three" in them
const li1 = document.createElement("li");
li1.innerHTML = "one";
const li2 = document.createElement("li");
li2.innerHTML = "two";
const li3 = document.createElement("li");
li3.innerText = "three";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
// put that list into the above wrapper
div.appendChild(ul);

// create an image
const img = document.createElement("img");
// set the source to an image
img.src = "https://picsum.photos/500";
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "cute puppy";
// Append that image to the wrapper
div.insertAdjacentElement("beforeend", img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="js-div"> 
        <p>paragraph 1</p>
        <p>paragraph 2</p>
    </div>
`;
const myFragment = document.createRange().createContextualFragment(myHTML);
// put this div before the unordered list from above
div.append(myFragment);

// add a class to the second paragraph called warning
const jsDIV = document.querySelector(".js-div");
jsDIV.children[1].classList.add("warning");
// remove the first paragraph
jsDIV.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
    const cardHTML = `
    <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. In dog years this person would be ${
        Math.floor((age / 7) * 100) / 100
    }. That would be a tall dog!</p>
            <button class="delete-btn">Click to delete</button>
        </div>
    `;
    return document.createRange().createContextualFragment(cardHTML);
}

// make a new div with a class of cards
const divCards = document.createElement("div");
divCards.classList.add("cards");

// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard("Vadym", 18, 178);
const card2 = generatePlayerCard("Riyad", 19, 188);
const card3 = generatePlayerCard("Samuel", 18, 190);
const card4 = generatePlayerCard("Henrik", 45, 181);

// append those cards to the div
divCards.appendChild(card1);
divCards.appendChild(card2);
divCards.appendChild(card3);
divCards.appendChild(card4);

// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement("afterbegin", divCards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
const deleteBtns = document.querySelectorAll(".delete-btn");
deleteBtns.forEach(button => button.addEventListener("click", function () {
    button.closest(".playerCard").remove();
}));
// loop over them and attach a listener