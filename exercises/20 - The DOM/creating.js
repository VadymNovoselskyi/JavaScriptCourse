const newDiv = document.createElement("div");
newDiv.classList.add("wrapper");

const newHeading = document.createElement("h2");
newHeading.classList.add("red");
newHeading.innerText = "Im new h2";

const newP = document.createElement("p");
newP.classList.add("violet");
newP.innerText = "Im new p";

newDiv.appendChild(newHeading);
newDiv.appendChild(newP);
document.body.appendChild(newDiv);

const siblingDiv = document.createElement("div");
siblingDiv.classList.add("sibling-wrapper");

const siblingP = document.createElement("p");
siblingP.classList.add("blue");
siblingP.innerHTML = "Im p in a sibling div";

siblingDiv.appendChild(siblingP);
newDiv.insertAdjacentElement("beforebegin", siblingDiv);

//

const newUL = document.createElement("ul");

const newLi1 = document.createElement("li");
newLi1.innerHTML = "One";

const newLi2 = document.createElement("li");
newLi2.textContent = "Two";

const newLi3 = document.createElement("li");
newLi3.innerHTML = "Three";

const newLi4 = document.createElement("li");
newLi4.innerHTML = "Four";

const newLi5 = document.createElement("li");
newLi5.innerHTML = "Five";

newUL.appendChild(newLi1);
newUL.appendChild(newLi2);
newUL.appendChild(newLi3);
newUL.appendChild(newLi4);
newUL.insertAdjacentElement("beforeend", newLi5);

document.body.appendChild(newUL);

//
//creating with strings
//

const myHeader = "Some header";
const myText = "Some text";

const myHTML = `
    <h1>${myHeader}</h1>
    <p>${myText}</h1>
`;

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.appendChild(myFragment);
