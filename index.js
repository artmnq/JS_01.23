function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

//-------------------------------------------------//

function checkIsValid(value) {
  const invalidValues = typeof value !== 'number' || isNaN(value) || !isFinite(value);
  if (invalidValues) {
    throw new Error('Invalid type of argument');
  }
  return true;
}

class Calculator {
  constructor() {
    const [value1, value2] = arguments;

    if (arguments.length !== 2) {
      throw new Error('Invalid number of arguments');
    }

    checkIsValid(value1);
    checkIsValid(value2);

    this.value1 = value1;
    this.value2 = value2;
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(num) {
    checkIsValid(num);

    return (this.value1 = num);
  }

  setY(num) {
    checkIsValid(num);

    return (this.value2 = num);
  }

  logSum() {
    return this.value1 + this.value2;
  }

  logMul() {
    return this.value1 * this.value2;
  }

  logSub() {
    return this.value1 - this.value2;
  }

  logDiv() {
    if (this.value2 === 0) {
      throw new Error("you can't divide by zero");
    }
    return this.value1 / this.value2;
  }
}