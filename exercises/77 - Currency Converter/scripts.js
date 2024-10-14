import currencies from './data/currencies.js';
import { convert, formatCurrency, generateOptions} from './lib/utils.js';

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
}
