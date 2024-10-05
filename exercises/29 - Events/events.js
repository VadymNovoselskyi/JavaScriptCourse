const butt = document.querySelector(".butt");

const handleClick = () => console.log("Clcked!");

butt.addEventListener("click", handleClick);

//

const handleBuy = (event) => console.log(event.target.textContent);
const buyButtons = document.querySelectorAll("button.buy");

buyButtons.forEach((button) => button.addEventListener("click", handleBuy));
