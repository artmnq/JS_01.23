function makeDeepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    throw new Error();
  }

  let copyObj;
  if (obj instanceof Date) {
    copyObj = new Date(obj.getTime());
  } else if (Array.isArray(obj)) {
    copyObj = [];
    for (let value of obj) {
      copyObj.push(makeDeepCopy(value));
    }
  } else if (obj instanceof Map) {
    copyObj = new Map();
    for (let [key, value] of obj) {
      copyObj.set(key, makeDeepCopy(value));
    }
  } else if (obj instanceof Set) {
    copyObj = new Set();
    for (let value of obj) {
      copyObj.add(makeDeepCopy(value));
    }
  } else {
    copyObj = {};
    for (let key in obj) {
      copyObj[key] = makeDeepCopy(obj[key]);
    }
  }
  return copyObj;
}

function selectFromInterval(arr, firstRange, secondRange) {
  if ((!Array.isArray(arr)) ||
    (!arr.every(Number)) ||
    arr.length === 0 ||
    typeof firstRange !== 'number' ||
    typeof secondRange !== 'number') {
    throw new Error();
  }

  let outerArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (firstRange > secondRange) {
      if (arr[i] <= firstRange && arr[i] >= secondRange) {
        outerArr.push(arr[i]);
      }
    } else if (arr[i] <= secondRange && arr[i] >= firstRange) {
      outerArr.push(arr[i]);
    }
  }
  return outerArr;
}

function createIterable(from, to) {
  if (isNaN(from) || isNaN(to) || from >= to) {
    throw new Error();
  } else {
    const obj = {
      from: from,
      to: to,
    };
    obj[Symbol.iterator] = function () {
      return {
        current: this.from,
        last: this.to,
        next() {
          return (this.current <= this.last) ? {done: false, value: this.current++} : {done: true};
        }
      };
    };
    return obj;
  }
}