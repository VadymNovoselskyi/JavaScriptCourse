export async function displayCurrencies() {
    const { default: currencyList } = await import('./currencies.js');
    const html = Object.entries(currencyList).map(currency => `<br> <p>${currency[0]} --- ${currency[1]}</p>`).join('');
    document.body.insertAdjacentHTML('beforeend', html);
}