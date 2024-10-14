import headers from '../data/headers.js';

const ratesByBase = {};

export function formatCurrency(amount, currency) {
    return Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}

export async function convert(amount, fromCurrency, toCurrency) {
    if (!ratesByBase[fromCurrency]) ratesByBase[fromCurrency] = await fetchRates(fromCurrency);
    return amount * ratesByBase[fromCurrency][toCurrency];
}

async function fetchRates(base = 'USD') {
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${base}`, headers);
    const { rates } = await response.json();
    return rates;
}

export function generateOptions(options) {
    return Object.entries(options).map(([currencyCode, currencyName]) => `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`);
}