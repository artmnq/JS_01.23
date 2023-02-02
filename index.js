// //Task1//

function Factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * Factorial(num - 1);
  }
}

function Square(num) {
  return num ** 2
}

function isEven(num) {
  return num % 2 === 0;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return num > 1;
}

function Delimeters(num) {
  let DelimetersRes = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      DelimetersRes.push(i);
    }
  }
  return DelimetersRes.join(', ');
}

function isValid(value) {
  if (!Number.isFinite(value) || value < 0 || Number.isNaN(value) || !(value % 1 === 0)) {
    return false;
  } else if (typeof value === 'number') {
    return true
  }
}

function getNumFromUser() {
  const result = +prompt('Enter the number');
  if (isValid(result)) {
    console.log(
      `Number: ${result}
Factorial: ${Factorial(result)}
Square: ${Square(result)}
isPrime: ${isPrime(result)}
isEven: ${isEven(result)}
Delimeters: ${Delimeters(result)}`);
  } else {
    console.log('Incorrect input!');
    getNumFromUser();
  }
}
getNumFromUser();

//Task 2//
function isValidSymbol(symbolValue) {
  if (
      symbolValue.length > 0 &&
      symbolValue.length < 4 &&
      symbolValue !== '' &&
      symbolValue !== ' '
  ) {
    return true;
  } else {
    console.log('Incorrect input!');
    getDataFromUser();
  }
}

function isValidNumber(numberValue) {
  if (
      typeof numberValue === 'number' &&
      numberValue > 0 &&
      numberValue < 10 &&
      Number.isFinite(numberValue) &&
      !(Number.isNaN(numberValue)) &&
      numberValue % 1 === 0
  ) {
    return true;
  } else {
    console.log('Incorrect input!');
    getDataFromUser();
  }
}

function getDataFromUser() {
  let symbolData = '';
  symbolData = prompt('Enter the symbol');

  if (!isValidSymbol(symbolData)) {
    console.log('Incorrect input!');
    getDataFromUser();
  }

  let numberData = '';
  numberData = +prompt('Enter the number');

  if (!isValidNumber(numberData)) {
    console.log('Incorrect input!');
    getDataFromUser();
  }

  symbolData = symbolData + ' ';
  console.log(`${symbolData.repeat(numberData)}\n`.repeat(numberData).trim());
}
getDataFromUser();
