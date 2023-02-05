function  makeDeepCopy (obj) {
    if (typeof obj !== 'object') {
        throw new Error()
    }

    let resultObj = {}

    if (obj instanceof Array) {
        resultObj = []
        for (let i = 0, length = obj.length; i < length; i++) {
            resultObj[i] = makeDeepCopy(obj[i])
        }
        return resultObj
    } else if (obj instanceof Date) {
        resultObj = new Date()
        resultObj.setTime(obj.getTime())
        return resultObj
    } else if (obj instanceof Map) {
        resultObj = new Map()

        for (const entry of obj) {
            resultObj.set(...entry)
        }
        return resultObj
    } else if (obj instanceof Set) {
        resultObj = new Set()

        for (const entry of obj) {
            resultObj.add(entry)
        }
        return resultObj
    } else if (obj instanceof Object) {
        resultObj = {}
        for (const attr in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, attr)) {
                resultObj[attr] = makeDeepCopy(obj[attr])
            }
        }
        return resultObj
    }
}


function selectFromInterval(arr, firstRange, secondRange) {
    if(!Array.isArray(arr)){
        throw new Error(`${arr} is not array`)
    } else if (!arr.every(Number)) {
        throw new Error(`Invalid data in array`)
    } else if (typeof firstRange !== 'number' || typeof secondRange !== 'number'){
        throw new Error('Properties are not numbers');
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
    return outerArr
}

function createIterable(from, to) {
    if (isNaN(from) || isNaN(to) || from >= to) {
        throw new Error()
    }
    else {
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
            }
        };
        return obj;
    }
}