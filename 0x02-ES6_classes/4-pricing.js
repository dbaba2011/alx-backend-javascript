import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = null;
    this._currency = null;

    // Verify and set the amount attribute
    this.amount = amount;

    // Verify and set the currency attribute
    this.currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  // Method to display the full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
  }
}

export default Pricing;
