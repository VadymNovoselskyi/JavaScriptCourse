const shoppingForm = document.querySelector('form.shopping');
const list = document.querySelector('ul.list');
const itemsUpdated = new CustomEvent('itemsUpdated');

let items = [];

function handleSubmit(event) {
	event.preventDefault();
	const name = event.currentTarget.item.value;
	const item = {
		name: name,
		id: Date.now(),
		complete: false,
	};
	items.push(item);

	event.target.reset();
	list.dispatchEvent(itemsUpdated);
}

function displayItems() {
	const html = items
		.map(
			item => `<li class="shopping-item">
                    <input value="${item.id}" type="checkbox" ${item.complete ? 'checked' : ''}>
                    <span class="itemName">${item.name}</span>
                    <button value="${item.id}" aria-label="Remove ${item.name}">x</button>
                    </li>`
		)
		.join('');
	list.innerHTML = html;
}

function mirrorToLocalStorage() {
	localStorage.setItem('Items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
	const lsItems = JSON.parse(localStorage.getItem('Items'));
	if (lsItems) {
		items = lsItems;
		list.dispatchEvent(itemsUpdated);
	}
}

function deleteItem(id) {
	items = items.filter(item => item.id != id);
	list.dispatchEvent(itemsUpdated);
}

function markComplete(id) {
	const checkedItem = items.find(item => item.id == id);
	checkedItem.complete = !checkedItem.complete;
	list.dispatchEvent(itemsUpdated);
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', event => {
	if (event.target.matches('button')) deleteItem(event.target.value);
	else if (event.target.matches('input[type="checkbox"]')) markComplete(event.target.value);
});

restoreFromLocalStorage();
