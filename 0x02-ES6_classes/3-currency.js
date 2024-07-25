export default class Currency {
  // Initialize a Currency object
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Retrieve the currency's code
  get code() {
    return this._code;
  }

  // Set the currency's code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Retrieve the currency's name
  get name() {
    return this._name;
  }

  // Set the currency's name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Returns full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
