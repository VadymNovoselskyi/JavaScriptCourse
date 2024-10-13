const currencies = {
	USD: 'United States Dollar',
	AUD: 'Australian Dollar',
	BGN: 'Bulgarian Lev',
	BRL: 'Brazilian Real',
	CAD: 'Canadian Dollar',
	CHF: 'Swiss Franc',
	CNY: 'Chinese Yuan',
	CZK: 'Czech Republic Koruna',
	DKK: 'Danish Krone',
	GBP: 'British Pound Sterling',
	HKD: 'Hong Kong Dollar',
	HRK: 'Croatian Kuna',
	HUF: 'Hungarian Forint',
	IDR: 'Indonesian Rupiah',
	ILS: 'Israeli New Sheqel',
	INR: 'Indian Rupee',
	JPY: 'Japanese Yen',
	KRW: 'South Korean Won',
	MXN: 'Mexican Peso',
	MYR: 'Malaysian Ringgit',
	NOK: 'Norwegian Krone',
	NZD: 'New Zealand Dollar',
	PHP: 'Philippine Peso',
	PLN: 'Polish Zloty',
	RON: 'Romanian Leu',
	RUB: 'Russian Ruble',
	SEK: 'Swedish Krona',
	SGD: 'Singapore Dollar',
	THB: 'Thai Baht',
	TRY: 'Turkish Lira',
	ZAR: 'South African Rand',
	EUR: 'Euro',
};

const ratesByBase = {};

const myHeaders = new Headers();
myHeaders.append('apikey', 'apikey');
const requestOptions = {
	method: 'GET',
	redirect: 'follow',
	headers: myHeaders,
};

const amountInput = document.querySelector('input[name="from_amount"]');
const amountOutput = document.querySelector('.to_amount')
const fromCurrencyInput = document.querySelector('select[name="from_currency"]');
const toCurrencyInput = document.querySelector('select[name="to_currency"]');
const form = document.querySelector('#currencyConvertor');

const optionsHTML = generateOptions(currencies).join('');
fromCurrencyInput.innerHTML = optionsHTML;
toCurrencyInput.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);

async function handleInput(event) {
	const amount = amountInput.value;
	const fromCurrency = fromCurrencyInput.value;
	const toCurrency = toCurrencyInput.value;
	const result = await convert(amount, fromCurrency, toCurrency);
  amountOutput.textContent = formatCurrency(result, toCurrency);
  console.log(amount, fromCurrency, toCurrency, result);
}

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}

async function convert(amount, fromCurrency, toCurrency) {
	if (!ratesByBase[fromCurrency]) ratesByBase[fromCurrency] = await fetchRates(fromCurrency);
	return amount * ratesByBase[fromCurrency][toCurrency];
}

async function fetchRates(base = 'USD') {
	const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${base}`, requestOptions);
	const { rates } = await response.json();
	return rates;
}

function generateOptions(options) {
	return Object.entries(options).map(([currencyCode, currencyName]) => `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`);
}
