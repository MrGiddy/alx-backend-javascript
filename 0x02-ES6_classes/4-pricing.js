import Currency from './3-currency';

export default class Pricing {
  // Initialize a Pricing object
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Retrieve amount
  get amount() {
    return this._amount;
  }

  // Set the amount
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Retrieve the currency property
  get currency() {
    return this._currency;
  }

  // Set the currency property
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = value;
  }

  // Displays the full price
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this.currency._code})`;
  }

  // Converts between currencies
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
