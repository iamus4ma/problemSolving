///Remove duplication without using method////
// function removeDuplication(arr) {
//   const result = [];
//   const seen = {};
//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];

//     if (!seen[currentElement]) {
//       result[result.length] = currentElement;
//       seen[currentElement] = true;
//     }
//   }
//   return result;
// }
// console.log(removeDuplication([1, 2, 3, 4, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9]));

///second Maximum in array///////
// function secondMaximum(arr) {
//   if (arr.length < 2) {
//     return "minimum array length should be 2";
//   }
//   let firstMax = arr[0] > arr[1] ? arr[0] : arr[1];
//   let secondMax = arr[0] < arr[1] ? arr[0] : arr[1];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstMax) {
//       secondMax = firstMax;
//       firstMax = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== firstMax) {
//       secondMax = arr[i];
//     }
//   }
//   return secondMax;
// }
// console.log(secondMaximum([3, 6, 8, 7, 8, 8, , 9, 5, 7]));

////reverse without using method reverse()////////
// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length-1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("obsidian"));

//////reverseString///////////////////
// function reverseString (str) {
//     const reverseStr = str.split("").reverse().join("");
//     return reverseStr
// }
// console.log(reverseString("usamahassan"))

//////findLongestWord///////////////
// function findLongestWord(str) {
//   const words = str.split(" ");
//   console.log(words, "words");
//   let longestWord = "";
//   console.log(longestWord, "longestWord");

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("find the longest word"),"<=");

/////removeDuplicate/////////////////////////////
// function removeDuplicate(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicate([1,2,3,4,4,4,5,6,6,7,7,8,9,9]));

///isPalindrome//////////////////////////////////////
// function isPalindrome(str) {
//   const reverseString = str.split("").reverse().join("");
//   return str === reverseString;
// }
// const word = "test"
// console.log(isPalindrome(word))

///////////MAP//////FILTER////REDUCER////////////////////////////
// const arr = [3, 1, 5, 2];

// const reverseArr = arr.reduce(function(acc, curr){
//     return [curr, ...acc];
// },[])

// console.log(reverseArr);

// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// const reduceSumFunction = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);

// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// const reduceMaxFunction = arr.reduce(function (max, curr) {
//     if (curr > max) {
//         max = curr;
//     }
//     return max;
// }, 0)

// console.log(reduceSumFunction);
// console.log(findSum(arr));
// console.log(findMax(arr));
// console.log(reduceMaxFunction);

// const output = arr.filter((x) => {
//     return x > 2;
// });

// console.log(output);

// const output = arr.filter((x) => x > 2);

// console.log(output);

// function double (x) {
//     return x * 2;
// }
//  function binary (x) {
//     return x.toString();
//  }
// const output = arr.map(binary);

// console.log(output);
///////////MAP//////FILTER////REDUCER/////////////////////////////

///////////Real Examples of /////MAP//////FILTER////REDUCER////////////////////////////
// const people = [
//     { firstname: 'Alice', lastname: 'Smith', age: 30 },
//     { firstname: 'Bob', lastname: 'Johnson', age: 25 },
//     { firstname: 'Charlie', lastname: 'Williams', age: 35 },
//     { firstname: 'Usama', lastname: 'Hassan', age: 25 },
// ];

// const fullname = people.map(x => x.firstname + " " + x.lastname)
// console.log(fullname);

// const ageCheck = people.reduce(function (acc, curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc;
// }, {})

// console.log(ageCheck);

// const lessThanThirty = people.filter((x) => x.age < 30).map((x) => x.firstname);
// console.log(lessThanThirty);

// const lessAgeUsingReduce = people.reduce(function (acc, curr) {
//     if (curr.age < 30) {
//         acc.push(curr.firstname);
//     }
//     return acc;
// }, [])
// console.log(lessAgeUsingReduce);
///////////Real Examples of /////MAP//////FILTER////REDUCER////////////////////////////

//////////DRY optimised functions/////////////////////////////////
// const area = function (radius) {
//     return Math.PI * radius * radius;
// }

// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }
// const diameter = function (radius) {
//     return 2 * radius;
// }

// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
//////////DRY optimised functions///////////////////////////////

// // const newArr = arr.map((x) =>  x*2
// // )
// // console.log(newArr,"newArr")

// const eachLoop = arr.forEach((value, index) => {
//   arr[index] = value * 2;
// });

// let i =  0;
// while (i < arr.length) {
//     arr[i] *= 2
//     i ++
// }

// console.log(arr);

// function greaterThanThree(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3) {
//       result[result.length] = arr[i];
//     }
//   }
//   return result;
// }

// console.log(greaterThanThree(arr));

// const filtredData = arr.filter((x) => x % 2);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     // sum = sum + arr[i];
//   }
//   return max;
// }

// const arr = [1, 5, 4, 9, 2, 7, 8, 3];
// console.log(findMax(arr));

// const output = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);

// const maximum = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log(maximum);

// const people = [
//     { firstname: "Alice", lastname: "Smith", age: 30 },
//     { firstname: "Bob", lastname: "Johnson", age: 25 },
//     { firstname: "Charlie", lastname: "Williams", age: 35 },
//     { firstname: "Usama", lastname: "Hassan", age: 25 },
//   ];

//   const ageCheck = people.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//       acc[curr.age] = ++acc[curr.age];
//     } else {
//       acc[curr.age] = 1;
//     }
//     return acc;
//   }, {});
//   console.log(ageCheck)

// const lessAge = people.filter((x) => x.age < 30).map((x) => x.firstname + " " + x.lastname)
// console.log(lessAge)

// function greaterThanFiveOpposit(arr) {
//   let greaterThanFive = "";
//   for (let i = arr.length - 1; i >= 0; i--)
//     if (arr[i] > 5) {
//       greaterThanFive = arr[i];
//       break;
//     }
//   return greaterThanFive;
// }

// console.log(greaterThanFiveOpposit([1, 5, 4, 9, 2, 7, 8, 10, 3]));

// function reverseString(str) {
//   return (reversed = str.split(" ").reverse().join(" "));
// }
// var string = "This will be reversed";

// console.log(reverseString(string));

// function checkArray(arr) {
//     return Array.isArray(arr);
// }

// var array = [1, 2, 3, 5, 4, 6, 7];

// console.log(checkArray(array));

// var array = [1, 2, 3, 5, 4, 6, 7];

// function pushAtEnd (arr) {
//     arr[arr.length] = 0;
//     return arr;
// }

// console.log(pushAtEnd(array))

//////CURRYING
// let addition = function (x) {
//   return function (y) {
//     console.log(x + y);
//   };
// };

// let twoAddition = addition(2);
// twoAddition(6);

////REST Operator////////////////////////////

// function sum(a, b, ...restValues) {
//   console.log(restValues);
// }

// sum(1, 2, 3, 4, 5, 6, 7, 2, 2);

// let x= [1,2,3,4]
// let y =[3,2,1,...x]
// console.log(y)

// function largest(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// function secondLargest(arr) {
//   let firstLargest = arr[0] > arr[1] ? arr[0] : arr[1];
//   let secondLargest = arr[0] < arr[1] ? arr[0] : arr[1];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(secondLargest([1, 2, 3, 7, 4, 9, 6, 5]));

// function calculatePower(base, exponent) {
//   let result = 1;

//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(calculatePower(2, 4));

// function calculatePower(a, b) {
//   let result = 1;
//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }

// console.log(calculatePower(3, 2));

// function calculateSum (a, b) {
//     return a+b
// }

// console.log(calculateSum(3, 2));

// function removeDuplicate(arr) {
//   return [...new Set(arr)];
// }

// function removeDuplicate(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const numbers = [1, 2, 4, 3, 4, 4, 3, 4, 5, 6, 6, 7, 7, 8, 9, 9];
// console.log(removeDuplicate(numbers));

// const obj = { name: "usana", age: 24 };
// const obj1 = obj;
// obj1.name = "hero"
// console.log(obj);
// console.log(obj1);

// const person = { name: "usamsa", address: { city: "FSD" } };

// const copy = { ...person };

// person.address.city = "LHR";

// console.log(copy.address.city);

// function checkTrue(a, b) {
//   let result = false;
//   if (a === 100 || b === 100) {
//     result = true;
//   } else if (a + b === 100) {
//     result = true;
//   }
//   return result;
// }

// console.log(checkTrue(10, 90));

// const numbers = [1, 2, 4, 3, 4, 4, 3, 4, 5, 6, 6, 7, 7, 8, 9, 9];

// console.log(numbers.slice())

// const getFileExtension = (str) => {
//      return str.slice(str.lastIndexOf("."))
// }

// console.log(getFileExtension("usama.config.js"))

// const strToAlphabet = (str) => {
//   let array = str.split("");
//   let digit = 0;
//   console.log(array);

//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === String) {
//       array[i] = digit;
//       digit++;
//     }
//   }
// };

// console.log(strToAlphabet("usamaconfigjs"));

// const strToAlphabet = (str) => {
//     let array = str.split("");
//     let digit = 0;
//     console.log(array);

//     for (let i = 0; i < array.length; i++) {
//       if (/^[a-zA-Z]$/.test(array[i])) {
//         array[i] = digit;
//         digit++;
//       }
//     }

//     return array.join("");
//   };

//   console.log(strToAlphabet("usamaconfigjs"));

// const shiftFurther = (str) => {
//   let array = str.split("");
//   for (let i = 0; i < array.length; i++) {
//     let eachCharNumb = array[i].charCodeAt(0);
//     let pushCharnumb = eachCharNumb + 1;
//     let numbToChar = String.fromCharCode(pushCharnumb);
//     array[i] = numbToChar;
//   }
//   return array.join("");
// };

// const moveCharsForward = (str) =>
//   str
//     .split("")
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join("");
// console.log(moveCharsForward("abc")); // Output: "bcd"

// const currentDate = (date = new Date()) => {
//   const Hours = date.getHours();
//   const Minutes = date.getMinutes();
//   const Days = date.getDay();
//   const Months = date.getMonth();
//   const Years = date.getFullYear();
//   return `${Hours}:${Minutes} ${Days}/${Months}/${Years}`;
// };
// console.log(currentDate());

// const addNew = (str) => {
//   if (str.indexOf("New!") !== 0) {
//     return "New! " + str;
//   } else {
//     return str;
//   }
// };

// console.log(addNew("New! Car"));

// const newString = (str) => {
//   if (str.length < 3) {
//     return str;
//   }
//   let firstThree = str.slice(0, 3);
//   let lastThree = str.slice(-3);

//   return firstThree + lastThree;
// };

// console.log(newString("abc"));

// const firstHalf = (str) => {
//   if (str.length % 2 !== 0) {
//     return str;
//   }
//   const length = str.length;
//   const halfLength = Math.floor(length / 2);
//   let result = str.slice(0, halfLength);

//   return result;
// };

// console.log(firstHalf("abcdef"));

// const twoStrings = (a, b) => {
//   let firstString = a.slice(1);
//   let secondString = b.slice(1);

//   return firstString + secondString;
// };

// console.log(twoStrings("abcdef","zxyz"));

// const findNearest = (a, b) => {
//   if (a >= 100 || b >= 100) {
//     return console.log("a&b must be less than 100");
//   }
//   let firstValue = 100 - a;
//   let secondValue = 100 - b;

//   return firstValue > secondValue ? `${b} is nearest` : `${a} is nearest`;
// };

// console.log(findNearest(50, 50));

// const checkOccurrence = (str, char) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count >= 2 && count <= 4;
// };

// console.log(checkOccurrence("usamahassan", "a"));

// const countEvenNumbers = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         count++;
//     }
//   }
//   return count;
// };

// console.log(countEvenNumbers([1,4,1,2,2]))

// const countEvenNumbersUpto = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i]) {
//       count++;
//     }
//   }
//   return count;
// };

// const generateNumberArray = (num) => {
//   let result = [];
//   for (let i = 1; i <= num; i += 1) {
//     result.push(i);
//   }
//   return result;
// };

// console.log(countEvenNumbersUpto(generateNumberArray(10)));

// const ascendingOrdercheck = (arr) => {
//   let result = true;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// };

// console.log(ascendingOrdercheck([1,2,3,4,4,5]))

// const findLargest = (arr) => {
//   let largest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// };

// console.log(findLargest([1, 2, 3, 4, 7, 4, 5]));

// const findLargestEven = (arr) => {
//   let largestEven = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestEven && arr[i] % 2 === 0) {
//       largestEven = arr[i];
//     }
//   }
//   return largestEven;
// };

// console.log(findLargestEven([1, 2, 3, 4, 7, 4, 6, 5]));

// const findSecondLargest = (arr) => {
//   let firstMax = arr[0] > arr[1] ? arr[0] : arr[1];
//   let secondMax = arr[0] < arr[1] ? arr[0] : arr[1];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstMax) {
//       secondMax = firstMax;
//       firstMax = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== firstMax) {
//       secondMax = arr[i];
//     }
//   }
//   return secondMax;
// };

// console.log(findSecondLargest([1, 2, 3, 4, 7, 4, 6, 5, 8, 9, 11]));

// const replaceFirstDigit = (str) => {
//   let array = str.split("");

//   for (let i = 0; i < array.length; i++) {
//     if (/[0-9]/.test(array[i])) {
//       array[i] = "$";
//       break;
//     }
//   }

//   return array.join("");
// };

// console.log(replaceFirstDigit("usam1a2has3san"));
// console.log(replaceFirstDigit("us9123amn"));

// const removeDuplicate = (arr) => {
//   return [...new Set(arr)];
// };

// console.log(removeDuplicate([1, 2, 3, 4, 7, 4, 6, 5, 8, 9, 11]));

//////////////////////sort the array//////////////////////////////

// const sortArray = (arr, order) => {
//   console.log(order);
//   const ascending = arr.slice().sort((a, b) => a - b);
//   const descending = arr.slice().sort((a, b) => b - a);

//   return order === "ascending"
//     ? ascending
//     : order === "descending"
//     ? descending
//     : "mention the order(ascending or descending) after array";
// };

// console.log(sortArray([1, 2, 3, 4, 7, 4, 6, 5, 8, 9, 11], "ascending"));

// const leapYear = (year) => {
//   const abc = year % 4;
//   return abc === 0;
// };

// console.log(leapYear(2024));

// const compareObj = (a, b) => a.a === b.a && a.b === b.b && a.c === b.c;

// const objA = { a: 1, b: 2, c: 1 };
// const objB = { a: 1, b: 2, c: 1 };
// const objC = { a: 1, b: 2, d: 1 };

// console.log(compareObj(objB, objA));

// const parseCSV = (csvStr) => {
//   let result = csvStr.split("\n").map((row) => row.split(","));
//   return result;
// };
// const str = `abc,def,geh
// jkl,mno,pqr
// stu,vwx,yza`;

// console.log(parseCSV(str));

// const generateRandomColor = () => {
//   let a = Math.floor(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
//   let b = Math.floor(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
//   let c = Math.floor(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");

//   return `#${a}${b}${c}`;
// };

// console.log(generateRandomColor());
// console.log(generateRandomColor());

// console.log(generateRandomColor());

// console.log(generateRandomColor());

// console.log([1, 2, 3, 4, 5].every((x) => x > 0));

// let x = 99;
// let y = typeof x;
// console.log(y);

/////////Example of closure///////////////////////
// const createCounter = () => {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// };

// function outerFunction() {
//   let outerVariable = "I am outside!";
//   function innerFunction() {
//     console.log(outerVariable); // innerFunction can access outerVariable
//   }

//   return innerFunction;
// }

// const myClosure = outerFunction();
// myClosure(); // Logs: 'I am outside!'

// const globalVar = 'I am global';

// function outerFunction() {
//   const outerVar = 'I am in outerFunction';

//   function innerFunction() {
//     const innerVar = 'I am in innerFunction';
//     console.log(globalVar); // Accessible, defined in the global scope
//     console.log(outerVar);  // Accessible, defined in the outerFunction scope
//     console.log(innerVar);  // Accessible, defined in the innerFunction scope
//   }

//   innerFunction();
//   console.log(innerVar); // Not accessible, innerVar is only defined in innerFunction
// }

// outerFunction();
// console.log(outerVar); // Not accessible, outerVar is only defined in outerFunction

// {
//     let blockScopedVar = 'I am block scoped';
//     const anotherBlockScopedVar = 'I am also block scoped';
//     var functionScopedVar = 'I am function scoped';

//     console.log(blockScopedVar); // Accessible here
//     console.log(anotherBlockScopedVar); // Accessible here
//     console.log(functionScopedVar); // Accessible here
//   }

// //   console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
// //   console.log(anotherBlockScopedVar); // ReferenceError: anotherBlockScopedVar is not defined
//   console.log(functionScopedVar); // Accessible here

// console.log(hoistedVar); // undefined
// var hoistedVar = 'I am hoisted';

// hoistedFunction(); // Works
// function hoistedFunction () {
//   console.log('I am hoisted');
// }

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");
// // Output: 'Start', 'End', 'Timeout'
