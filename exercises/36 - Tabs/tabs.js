const buttons = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

function handleClick(event) {
    const { id } = event.currentTarget;
    const clickedPannel = document.querySelector(`[aria-labelledby="${id}"]`);
    buttons.forEach((button) => (button.ariaSelected = false));
    panels.forEach((panel) => (panel.hidden = true));

    event.currentTarget.ariaSelected = true;
    clickedPannel.hidden = false;
}

buttons.forEach((button) => button.addEventListener("click", handleClick));
