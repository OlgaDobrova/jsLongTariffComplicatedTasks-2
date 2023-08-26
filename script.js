//Это усложненные задания - №2
const arr = [
  "0897867554",
  "9678654432",
  "12132446556",
  "46676788909",
  "243245567",
  "6576587809",
  "23435465758",
];
const strArray = function (array) {
  let newArray = [];
  let countNewArray = newArray.length;
  for (let i = 0; i < array.length; i++) {
    if (array[i].substring(0, 1) == "2" || array[i].substring(0, 1) == "4") {
      newArray[countNewArray] = array[i];
      countNewArray = newArray.length;
    }
  }
  return newArray;
};

const primeNumbers = function () {
  let str = "Простые числа от 1 до 100:";
  let primeNumArray = [2]; //мой массив простых чисел
  let count; //кол-во чисел в массиве
  let k; //счетчик кол-ва делений без остатка

  for (let i = 3; i <= 100; i++) {
    k = 0;
    count = primeNumArray.length;
    for (let t = 0; t < count; t++) {
      if (i % primeNumArray[t] === 0 && k < 1) {
        k++;
      }
    }
    if (k === 0) {
      primeNumArray[count] = i;
      count++;
    }
  }
  for (let t = 0; t < count; t++) {
    str =
      str +
      "\n" +
      primeNumArray[t].toString() +
      " - Делители этого числа: 1 и " +
      primeNumArray[t].toString();
  }
  return str;
};

console.log(strArray(arr));
console.log(primeNumbers());
