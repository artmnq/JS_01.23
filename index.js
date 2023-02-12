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
    this.getSum = this.getSum.bind(this);
    this.getMul = this.getMul.bind(this);
    this.getSub = this.getSub.bind(this);
    this.getDiv = this.getDiv.bind(this);
  }

  setX(num) {
    checkIsValid(num);
    return (this.value1 = num);
  }

  setY(num) {
    checkIsValid(num);
    return (this.value2 = num);
  }

  getSum() {
    return this.value1 + this.value2;
  }

  getMul() {
    return this.value1 * this.value2;
  }

  getSub() {
    return this.value1 - this.value2;
  }

  getDiv() {
    if (this.value2 === 0) {
      throw new Error("You can't divide by zero");
    }
    return this.value1 / this.value2;
  }
}


//-----------------------------------------------------------------------------------//

