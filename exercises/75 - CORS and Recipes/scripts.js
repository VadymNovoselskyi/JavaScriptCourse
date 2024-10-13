// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"
const baseEndPoint = 'https://recipes.beginnerjavascript.com/api';
const form = document.querySelector('form.search');
const recipesDispay = document.querySelector('.recipes');
form.addEventListener('submit', handleFormSubmit);

async function fetchRecepies(query) {
	const response = await fetch(`${baseEndPoint}?q=${query}`);
	const data = await response.json();
	return data;
}

async function handleFormSubmit(event) {
	event.preventDefault();
	event.target.submit.disabled = true;
	const recipes = await fetchRecepies(event.target.query.value);
	event.target.submit.disabled = false;
	dispayRecipes(recipes.results);
}

function dispayRecipes(recipes) {
	const html = recipes.map(recipe => 
        `<div class="recipe">
            <h2>${recipe.title}</h2>
            <p>${recipe.ingredients}</p>
            <img src="https://picsum.photos/200" src="${recipe.title}"/>
            <a href="${recipe.href}">Link -></a>
        </div>`
    );
    recipesDispay.innerHTML = html.join('');
}
