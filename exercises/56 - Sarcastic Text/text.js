const textarea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};

function transformText(text) {
    // const filter = document.querySelector('[name="filter"]:checked').value;
    const filter = filterInputs.find(filter => filter.checked).value;

    const modifiedText = Array.from(text)
                .map(filters[filter])
                .join("");
    result.textContent = modifiedText;
}

const filters = {
    sarcastic(letter, index) {
        return index % 2 == 0 ? letter.toUpperCase() : letter;
    },
    funky(letter) {
        return funkyLetters[letter] ?? funkyLetters[letter.toLowerCase()] ?? " ";
    },
    unable(letter) {
        const random = Math.floor(Math.random() * 3);
        return (letter === " " && random === 1 )? "..." : letter;
    }
};

textarea.addEventListener("input", e => transformText(e.target.value));
filterInputs.forEach(input => input.addEventListener("input", () => transformText(textarea.value)));