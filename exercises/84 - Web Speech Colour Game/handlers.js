import { isValidColor } from "./colors.js";

export function handleRecognition({ results }) {
    const words = results[results.length - 1][0].transcript;
    let color = words.toLowerCase();
    color = color.replace(/\s/g, '');
    
    if(!isValidColor(color)) return;

    const element = document.querySelector(`span#${color}`);
    element.classList.add('got');
    document.body.style.backgroundColor = color;
}