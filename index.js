class Stack {
  constructor(limit = 10) {
    if (!this.isValidNum(limit)) {
      throw new Error("Invalid limit value");
    }
    this.limit = limit;
    this.top = -1;
    this.items = {};
  }

  isValidNum(num) {
    return (
      typeof num === "number" &&
      isFinite(num) &&
      num > 0 &&
      Number.isInteger(num)
    );
  }

  isFull() {
    return this.top === this.limit - 1;
  }

  isEmpty() {
    return this.top === -1;
  }

  push(elem) {
    if (this.isFull()) {
      throw new Error("Limit exceeded");
    }
    this.top++;
    this.items[this.top] = elem;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Empty stack");
    }
    const popped = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return popped;
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.top];
  }

  toArray() {
    return Object.values(this.items);
  }

  static fromIterable(iterable) {
    if (!Symbol.iterator in Object(iterable)) {
      throw new Error("Not iterable");
    }
    const newStack = new Stack(iterable.length);
    for (const elem of iterable) {
      newStack.push(elem);
    }
    return newStack;
  }
}

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//
//   append(elem) {
//     const newNode = { value: elem, next: null };
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size++;
//   }
//
//   prepend(elem) {
//     const newNode = { value: elem, next: this.head };
//     this.head = newNode;
//     if (!this.tail) {
//       this.tail = newNode;
//     }
//     this.size++;
//   }
//
//   find(elem) {
//     let currentNode = this.head;
//     while (currentNode) {
//       if (currentNode.value === elem) {
//         return currentNode.value;
//       }
//       currentNode = currentNode.next;
//     }
//     return null;
//   }
//
//   toArray() {
//     const result = [];
//     let currentNode = this.head;
//     while (currentNode) {
//       result.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return result;
//   }
//
//   static fromIterable(iterable) {
//     if (!Symbol.iterator in Object(iterable)) {
//       throw new Error("Not iterable");
//     }
//
//     const newList = new LinkedList();
//     for (const elem of iterable) {
//       newList.append(elem);
//     }
//     return newList;
//   }
// }

// class Car {
//   #brand = "";
//   #model = "";
//   #yearOfManufacturing = 1950;
//   #maxSpeed = 100;
//   #maxFuelVolume = 20;
//   #fuelConsumption = 1;
//   #damage = 1;
//   #currentFuelVolume = 0;
//   #isStarted = false;
//   #mileage = 0;
//   #health = 100;
//
//   set brand(brandName) {
//     const isValidBrandName =
//       typeof brandName === "string" &&
//       brandName.length > 0 &&
//       brandName.length <= 50;
//     if (!isValidBrandName) {
//       throw new Error("Invalid brand name");
//     }
//     this.#brand = brandName;
//   }
//
//   get brand() {
//     return this.#brand;
//   }
//
//   set model(modelName) {
//     const isValidModelName =
//       typeof modelName === "string" &&
//       modelName.length > 0 &&
//       modelName.length <= 50;
//     if (!isValidModelName) {
//       throw new Error("Invalid model name");
//     }
//     this.#model = modelName;
//   }
//
//   get model() {
//     return this.#model;
//   }
//
//   set yearOfManufacturing(year) {
//     const presentYear = new Date().getFullYear();
//     const isValidYear =
//       typeof year === "number" && year >= 1950 && year <= presentYear;
//     if (!isValidYear) {
//       throw new Error("Invalid year of manufacturing");
//     }
//     this.#yearOfManufacturing = year;
//   }
//
//   get yearOfManufacturing() {
//     return this.#yearOfManufacturing;
//   }
//
//   set maxSpeed(speed) {
//     const isValidSpeed =
//       typeof speed === "number" && speed >= 100 && speed <= 330;
//     if (!isValidSpeed) {
//       throw new Error("Invalid max speed");
//     }
//     this.#maxSpeed = speed;
//   }
//
//   get maxSpeed() {
//     return this.#maxSpeed;
//   }
//
//   set maxFuelVolume(fuel) {
//     const isValidFuelNumber =
//       typeof fuel === "number" && fuel >= 20 && fuel <= 100;
//     if (!isValidFuelNumber) {
//       throw new Error("Invalid max fuel volume");
//     }
//     this.#maxFuelVolume = fuel;
//   }
//
//   get maxFuelVolume() {
//     return this.#maxFuelVolume;
//   }
//
//   set fuelConsumption(consumptionValue) {
//     const isValidFuelConsumption =
//       typeof consumptionValue === "number" && consumptionValue > 0;
//     if (!isValidFuelConsumption) {
//       throw new Error("Invalid fuel consumption");
//     }
//     this.#fuelConsumption = consumptionValue;
//   }
//
//   get fuelConsumption() {
//     return this.#fuelConsumption;
//   }
//
//   set damage(damageValue) {
//     const isValidDamageValue =
//       typeof damageValue === "number" && damageValue >= 1 && damageValue <= 5;
//     if (!isValidDamageValue) {
//       throw new Error("Invalid damage");
//     }
//     this.#damage = damageValue;
//   }
//
//   get damage() {
//     return this.#damage;
//   }
//
//   get currentFuelVolume() {
//     return this.#currentFuelVolume;
//   }
//
//   get isStarted() {
//     return this.#isStarted;
//   }
//
//   get mileage() {
//     return this.#mileage;
//   }
//
//   get health() {
//     return this.#health;
//   }
//
//   start() {
//     if (this.#isStarted) {
//       throw new Error("Car has already started");
//     }
//     this.#isStarted = true;
//   }
//
//   shutDownEngine() {
//     if (!this.#isStarted) {
//       throw new Error("Car hasn't started yet");
//     }
//     this.#isStarted = false;
//   }
//
//   fillUpGasTank(fuel) {
//     const isValidFuelValue =
//       typeof fuel === "number" && !isNaN(fuel) && isFinite(fuel) && fuel > 0;
//
//     if (!isValidFuelValue) {
//       throw new Error("Invalid fuel amount");
//     } else if (fuel + this.#currentFuelVolume > this.#maxFuelVolume) {
//       throw new Error("Too much fuel");
//     } else if (this.#isStarted) {
//       throw new Error("You have to shut down your car first");
//     } else {
//       this.#currentFuelVolume += fuel;
//     }
//   }
//
//   drive(speed, hours) {
//     const isValidSpeed =
//       typeof speed === "number" &&
//       !isNaN(speed) &&
//       isFinite(speed) &&
//       speed > 0;
//     const isValidHours =
//       typeof hours === "number" &&
//       !isNaN(hours) &&
//       isFinite(hours) &&
//       hours > 0;
//     const currentDistance = speed * hours;
//     const distanceForOneLitre = 100 / this.#fuelConsumption;
//     const distanceForCurrentFuel =
//       distanceForOneLitre * this.#currentFuelVolume;
//     const estimateHealthValue =
//       this.#health - (this.#damage / 100) * currentDistance;
//     const estimateFuelValue =
//       this.#currentFuelVolume - (this.#fuelConsumption / 100) * currentDistance;
//
//     if (!isValidSpeed) {
//       throw new Error("Invalid speed");
//     } else if (!isValidHours) {
//       throw new Error("Invalid duration");
//     } else if (speed > this.#maxSpeed) {
//       throw new Error("Car can't go this fast");
//     } else if (!this.#isStarted) {
//       throw new Error("You have to start your car first");
//     } else if (currentDistance > distanceForCurrentFuel) {
//       throw new Error("You don't have enough fuel");
//     } else if (this.#health === 0 || estimateHealthValue <= 0) {
//       throw new Error(`Your car won’t make it`);
//     } else {
//       this.#currentFuelVolume = estimateFuelValue;
//       this.#health = estimateHealthValue;
//       this.#mileage = distanceForCurrentFuel;
//     }
//   }
//
//   repair() {
//     if (this.#isStarted) {
//       throw new Error("You have to shut down your car first");
//     } else if (this.#currentFuelVolume === this.#maxFuelVolume) {
//       throw new Error("You have to fill up your gas tank first");
//     } else {
//       this.#health = 100;
//     }
//   }
//
//   getFullAmount() {
//     if (this.#currentFuelVolume === this.#maxFuelVolume) {
//       return 0;
//     }
//     return this.#maxFuelVolume - this.#currentFuelVolume;
//   }
// }
