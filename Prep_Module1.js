/* MODULE 1: 143 Problems */

//NOTE: Part 3 solutions could be more elegant.

/* PART 1 */

//Conditionals 1:1 isOldEnoughToDrink
function isOldEnoughToDrink(age) {
  return age >= 21;
}

//Conditionals 1:2 isOldEnoughToDrive
function isOldEnoughToDrive(age) {
  return age >= 16;
}

//Conditionals 1:3 isOldEnoughToVote
function isOldEnoughToVote(age) {
  return age >= 18;
}

//Conditionals 1:4 isOldEnoughToDrinkAndDrive
function isOldEnoughToDrinkAndDrive(age) {
  return false;
}

//Objects 1: 1 getProperty
function getProperty(obj, key) {
  return obj[key];
}

//Objects 1: 2 addProperty
function addProperty(obj, key) {
  obj[key] = true;
}

//Objects 1: 3 removeProperty
function removeProperty(obj, key) {
  delete obj[key];
}

//String Methods 1:1 getFullName
function getFullName(firstName, lastName) {
  return firstName.concat(" ", lastName);
}

//String Methods 1:2 getLengthOfWord
function getLengthOfWord(word) {
  return word.length;
}

//String Methods 1:3 getLengthOfTwoWords
function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

//Conditionals 2:1 checkAge
function checkAge(name, age) {
  return age < 21 ? `Go home, ${name}!`
    : `Welcome, ${name}!`;
}

//Conditionals 2:2 isGreaterThanTen
function isGreaterThan10(num) {
  return num > 10;
}

//Conditionals 2:3 isLessThan30
function isLessThan30(num) {
  return num < 30;
}

//Conditionals 2:4 equalsTen
function equalsTen(num) {
  return num === 10;
}

//Conditionals 3:1 isLessThan
function isLessThan(num1, num2) {
  return num1 > num2;
}

//Conditionals 3:2 isGreaterThan
function isGreaterThan(num1, num2) {
  return num2 > num1;
}

//Conditionals 3:3 isEqualTo
function isEqualTo(num1, num2) {
  return num1 === num2;
}

//Conditionals 3:4 isEven
  return num % 2 === 0;
}

//Conditionals 4:1
function isOdd(num) {
  // your code here
  return num % 2 === 1;
}

//Conditionals 4:2
function isSameLength(word1, word2) {
  return word1.length === word2.length;
}

//Conditionals 4:3
function areBothOdd(num1, num2) {
  return (num1 % 2 === 1) && (num2 % 2 === 1);
}

//Conditionals 4:4
function isEitherEven(num1, num2) {
  return (num1 % 2 === 0) || (num2 % 2 === 0);
}

//Conditionals 5:1 isOddLength
function isOddLength(word) {
  return word.length % 2 !== 0;
}

//Conditionals 5:2 isEvenLength
function isEvenLength(word) {
  return word.length % 2 === 0;
}

//Conditionals 5:3 isEvenAndGreaterThan10
function isEvenAndGreaterThanTen(num) {
  return (num % 2 === 0) && (num > 10);
}

//Math 1:1 average
function average(num1, num2) {
  return (num1 + num2) / arguments.length;
}

//Math 1:2 computeAreaOfATriangle
function computeAreaOfATriangle(base, height) {
  // your code here
  return base * height / 2;
}

//Math 1:3 cube
function cube(num) {
  return num * num * num;
}

//Math 1:4 square
function square(num) {
  return num * num;
}

//String Methods 2:1 computeAverageLengthOfWords
function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / arguments.length;
}

/* PART 2 */

//Objects 2:1 addFullNameProperty
function addFullNameProperty(obj) {
  obj.fullName = obj.firstName.concat(' ', obj.lastName);
}

//Objects 2:2 addObjectProperty
function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
}

//Objects 2:3 isPersonOldEnoughToDrinkAndDrive
function isPersonOldEnoughToDrinkAndDrive(person) {
  return false;
}

//Objects 3:1 isPersonOldEnoughToDrive
function isPersonOldEnoughToDrive(person) {
  return person.age >= 16;
}

//Objects 3:2 isPersonOldEnoughToVote
function isPersonOldEnoughToVote(person) {
  return person.age >= 18;
}

//Objects 3:3 addArrayProperty
function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
}

//Array Methods 1:1 getNthElement
function getNthElement(array, n) {
  return array[n];
}

//Array Methods 1:2 getFirstElement
function getFirstElement(array) {
  return array[0];
}

//Array Methods 1:3 getLastElement
function getLastElement(array) {
  return array.pop();
}

//Array Methods 2:1 addToFront
function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}

//Array Methods 2:2 addToBack
function addToBack(arr, element) {
  arr.push(element);
  return arr;
}

//Math 2:1 computeAreaOfARectangle
function computeAreaOfARectangle(length, width) {
  return length * width;
}

//Math 2:2 computePerimeterOfARectangle
function computePerimeterOfARectangle(length, width) {
  return (length + width) * 2;
}

//Math 2:3 computePerimeterOfATriangle
function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}

//Math 3:1 computeTripledAreaOfARectangle
function computeTripledAreaOfARectangle(length, width) {
  return (length * width) * 3;
}

//Math 3:2 computePerimeterOfACircle
function computePerimeterOfACircle(radius) {
  return 2 * Math.PI * radius;
}

//Math 3:3 computeAreaOfACircle
function computeAreaOfACircle(radius) {
  return Math.PI * (radius ** 2);
}

//Math 4:1 computePower
function computePower(num, exponent) {
  return num ** exponent;
}

//Math 4:2 computeSquareRoot
function computeSquareRoot(num) {
  return Math.sqrt(num);
}

//Math 4:3 doubleSquareRootOf
function doubleSquareRootOf(num) {
  return Math.sqrt(num) * 2;
}

//String Methods 3:1 getLengthOfThreeWords
function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}

//Array Methods 3:1 joinArrays
function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

//Array Methods 3:2 getElementsAfter
function getElementsAfter(array, n) {
  return array.slice(n + 1);
}

//Array Methods 3:3 getElementsUpTo
function getElementsUpTo(array, n) {
  return array.slice(0, n);
}

//Array Methods 4:1 getAllElementsButFirst
function getAllElementsButFirst(array) {
  return array.slice(1);
}

//Array Methods 4:2 getAllElementsButLast
function getAllElementsButLast(array) {
  return array.slice(0, array.length - 1)
}

//Array Methods 4:3 removeFromFront
function removeFromFront(arr) {
  arr.shift();
  return arr;
}

//Array Methods 6:1 removeFromBack
function removeFromBack(arr) {
  arr.pop();
  return arr;
}

//Array Methods 5:1 removeFromBackOfNew
function removeFromBackOfNew(arr) {
  return arr.slice(0, arr.length - 1);
}

//Array Methods 5:2 removeFromFrontOfNew
function removeFromFrontOfNew(arr) {
  return arr.slice(1);
}

//Array Methods 5:3 countCharacter
function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

/* PART 3 */

//Array String Methods 1:1 getAllLetters
function getAllLetters(str) {
  return str.length === 0 ? []: str.split('');
}

//Array String Methods 1:2 getAllWords
function getAllWords(str) {
  return str.length === 0 ? [] : str.split(' ');
}

//Advanced 1:1 countWords
function countWords(str) {
  if (str.length === 0) return {};
  let wordCount = {};
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    if (wordCount[str[i]] === undefined) {
      wordCount[str[i]] = 1;
    } else {
      wordCount[str[i]]++;
    }
  }
  return wordCount;
}

//Conditionals 6:1 or
function or(expression1, expression2) {
  return !expression1 && !expression2 ? false : true;
}

//Conditionals 6:2 isEitherEvenOrAreBoth7
function isEitherEvenOrAreBoth7(num1, num2) {
  return (num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 === 7);
}

//Conditionals 6:3 isEitherEvenAndLessThan9
function isEitherEvenAndLessThan9(num1, num2) {
  return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9);
}

//Advanced 2:1 extend
function extend(obj1, obj2) {
  for (let key in obj2) {
    if (obj1[key] === undefined) {
      obj1[key] = obj2[key];
    }
  }
}

//Objects 6:1 removeArrayValues
function removeArrayValues(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) delete obj[key];
  }
}

//Objects 6:2 removeNumberValues
function removeNumberValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') delete obj[key];
  }
}

//Objects 6:3 removeStringValues
function removeStringValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') delete obj[key];
  }
}

//Objects 4:1 removeNumbersLargerThan
function removeNumbersLargerThan(num, obj) {
  for (let key in obj) {
    if (obj[key] > num) delete obj[key];
  }
}

//Objects 4:2 removeNumbersLessThan
function removeNumbersLessThan(num, obj) {
  for (let key in obj) {
    if (obj[key] < num) delete obj[key];
  }
}

function removeStringValuesLongerThan(num, obj) {
  for (let key in obj) {
    if (obj[key].length > num) delete obj[key];
  }
}

//Objects 5:1 removeEvenValues
function removeEvenValues(obj) {
  for (let key in obj) {
    if (obj[key] % 2 === 0) delete obj[key];
  }
}

//Objects 5:2 countNumberOfKeys
function countNumberOfKeys(obj) {
    return Object.keys(obj).length;
}

//Objects 5:3 removeOddValues
function removeOddValues(obj) {
  for (let key in obj) {
    if (obj[key] % 2 !== 0) delete obj[key];
  }
}

//Array String Methods 2:1 convertDoubleSpaceToSingle
function convertDoubleSpaceToSingle(str) {
  return str.split('  ').join(' ');
}

//Array Methods 7:1 joinThreeArrays
function joinThreeArrays(arr1, arr2, arr3) {
    return arr1.concat(arr2, arr3);
}

//Array Methods 7:2 addToFrontOfNew
function addToFrontOfNew(arr, element) {
  const array = arr.slice()
  array.unshift(element);
  return array;
}

//Array Methods 7:3 addToBackOfNew
function addToBackOfNew(arr, element) {
  const array = arr.slice();
  array.push(element);
  return array;
}

//Array Methods 7:4 getAllElementsButNth
function getAllElementsButNth(array, n) {
  array.splice(n, 1);
  return array;
}

//Iteration 1:1 getIndexOf
function getIndexOf(char, str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return i;
  }
  return -1;
}

//Conditionals 7:1 areValidCredentials
function areValidCredentials(name, password) {
  return name.length > 3 && password.length > 8;
}

//Conditionals 7:2 findMinLengthOfThreeWords
function findMinLengthOfThreeWords(word1, word2, word3) {
  let shortest = word1.length;
  for (let i = 1; i < arguments.length; i++) {
    if  (arguments[i].length < shortest) shortest = arguments[i].length;
  }
  return shortest;
}

//Conditionals 7:3 findMaxLengthOfThreeWords
function findMaxLengthOfThreeWords(word1, word2, word3) {
  let longest = word1.length;
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i].length > longest) longest = arguments[i].length;
  }
  return longest;
}

//Conditionals 9:1 getLongestOfThreeWords
function getLongestOfThreeWords(word1, word2, word3) {
  let longest = word1;
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) longest = arguments[i];
  }
  return longest;
}

//Conditionals 9:2 findShortestOfThreeWords
function findShortestOfThreeWords(word1, word2, word3) {
  let shortest = word1;
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i].length < shortest.length) shortest = arguments[i];
  }
  return shortest;
}

//Advanced 3:1 select
function select(arr, obj) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let key in obj) {
      if (arr[i] === key) newObj[key] = obj[key];
    }
  }
  return newObj;
}

/* PART 4 */

//Array Methods 9:1 filterOddLengthWords
function filterOddLengthWords(words) {
  return words.filter(word => word.length % 2 !== 0);
}

//Array Methods 9:2 filterEvenLengthWords
function filterEvenLengthWords(words) {
  return words.filter(word => word.length % 2 === 0);
}

//Array Methods 9:3 getLengthOfLongestElement
function getLengthOfLongestElement(arr) {
  if (arr.length === 0) return 0;
  let longest = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

//Array Methods 10:1 squareElements
function squareElements(arr) {
  return arr.map( x => x * x);
}

//Array Methods 10:2 filterOddElements
function filterOddElements(arr) {
  return arr.filter(num => num % 2 !== 0);
}

//Array Methods 10:3 computeProductOfAllElements
function computeProductOfAllElements(arr) {
  return arr.length === 0 ? 0 : arr.reduce((acc, cur) => acc * cur);
}

//Array Methods 11:1 filterEvenElements
function filterEvenElements(arr) {
  return arr.filter(num => num % 2 === 0);
}

//Array Methods 11:2 getLengthOfShortestElement
function getLengthOfShortestElement(arr) {
  if (arr.length === 0) return 0;
  arr = arr.map(x => x.length);
  return Math.min(...arr);
}

//Array Methods 11:3 getLongestElement
function getLongestElement(arr) {
  return arr.length === 0 ? ''
    : arr.reduce((acc, cur) => acc.length > cur.length ? acc : cur);
}

//Array Methods 12:1 findSmallestElement
function findSmallestElement(arr) {
  return arr.length === 0 ? 0
    : Math.min(...arr);
}

//Array Methods 12:2 findShortestElement
function findShortestElement(arr) {
  return arr.length === 0 ? ''
    : arr.reduce((a, b) => a.length <= b.length ? a : b);
}

//Array Methods 13:1 getLargestElement
function getLargestElement(arr) {
  return Math.max(...arr);
}

//Array Methods 13:2 computeSumOfAllElements
function computeSumOfAllElements(arr) {
  return !arr.length ? 0
    : arr.reduce((acc, cur) => acc + cur);
}

//Objects 7:1 getElementsThatEqual10AtProperty
function getElementsThatEqual10AtProperty(obj, key) {
  if (obj[key] === undefined) return [];
  if (!Array.isArray(obj[key])) return [];
  if (!obj[key].length) return [];
  let arr = [];
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] === 10) arr.push(obj[key][i]);
  }
  return !arr.length ? [] : arr;
}

//Objects 7:2 getElementsLessThan100AtProperty
function getElementsLessThan100AtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || !obj[key].length) return [];
  const arr = obj[key].filter(num => num < 100);
  return !arr.length ? [] : arr;
}

//Advanced 4:1 countAllCharacters
function countAllCharacters(str) {
  if (!str.length) return {};
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      charCount[str[i]] = 1;
    } else {
      charCount[str[i]]++;
    }
  }
  return charCount;
}

//Objects 8:1
function getElementsGreaterThan10AtProperty(obj, key) {
  if (!obj[key] || !obj[key].length || !Array.isArray(obj[key])) return [];
  const arr = obj[key].filter(num => num > 10);
  return !arr.length ? [] : arr;
}

//Objects 8:2
function getFirstElementOfProperty(obj, key) {
  return !Array.isArray(obj[key]) || !obj[key].length ? undefined
    : obj[key][0];
}

//Objects 8:3
function getNthElementOfProperty(obj, key, n) {
  return !obj[key] || !obj[key].length || !Array.isArray(obj[key]) ? undefined
    : obj[key][n];
}

//Objects 8:4 getLastElementOfProperty
function getLastElementOfProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ? obj[key].pop() : undefined;
}

//Array Methods 8:1 removeElement
function removeElement(array, discarder) {
  return array.filter(el => el !== discarder);
}

//Array Methods 8:2 keep
function keep(array, keeper) {
  return array.filter(el => el === keeper);
}

//Array Methods 8:3 computeAverageOfNumbers
function computeAverageOfNumbers(nums) {
  return !nums.length ? 0 : nums.reduce((acc, cur) => acc + cur) / nums.length;
}

//Objects 9:1 getOddLengthWordsAtProperty
function getOddLengthWordsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ? obj[key].filter(x => x.length % 2 !== 0)
    : [];
}

//Objects 9:2 getAverageOfElementsAtProperty
function getAverageOfElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((acc, cur) => acc + cur) / obj[key].length : 0;
}

//Objects 9:3 getEvenLengthWordsAtProperty
function getEvenLengthWordsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(x => x.length % 2 === 0) : [];
}

//Objects 10:1 getSquaredElementsAtProperty
function getSquaredElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].map(x => x * x) : [];
}

//Objects 10:2 getOddElementsAtProperty
function getOddElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(x => x % 2 !== 0) : [];
}

//Objects 10:3 getEvenElementsAtProperty
function getEvenElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(x => x % 2 === 0) : [];
}

//Objects 11:1 getSmallestElementAtProperty
function getSmallestElementAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((acc, cur) => acc <= cur ? acc : cur) : undefined;
}

//Objects 11:2 getLargestElementAtProperty
function getLargestElementAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((acc, cur) => acc >= cur ? acc : cur) : undefined;
}

//Objects 11:3 getAllButLastElementOfProperty
function getAllButLastElementOfProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].slice(0, obj[key].length - 1) : [];
}

//Objects 11:4 getElementOfArrayProperty
function getElementOfArrayProperty(obj, key, index) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key][index] : undefined;
}

/* PART 5 */

//Math 5:1 calculateBillTotal
function calculateBillTotal(preTaxAndTipAmount) {
  return preTaxAndTipAmount + (preTaxAndTipAmount * 0.095) + (preTaxAndTipAmount * 0.15);
}

//Iteration 2:1 getStringLength
function getStringLength(string) {
  let count = 0;
  while (string) {
    string = string.slice(1);
    count++;
  }
  return count;
}

//Array Methods 14:1 joinArraysOfArrays
function joinArrayOfArrays(arr) {
  return arr.flat();
}

//Objects 12:1 getProductOfAllElementsAtProperty
function getProductOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((acc, cur) => acc * cur) : 0;
}

//Advanced 5:1 sumDigits
function sumDigits(num) {
  let neg = false;
  if (num < 0) {
    neg = true;
    num = Math.abs(num);
  }
  num = num.toString();
  let sum = 0;
  const firstValue = Number(num[0]);
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  return neg ? sum - (firstValue * 2) : sum;
}

//Objects 13:1 getSumOfAllElementsAtProperty
function getSumOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((acc, cur) => acc + cur) : 0;
}

//Array Methods 15:1 findShortestWordAmongMixedElements
function findShortestWordAmongMixedElements(arr) {
  let strings = arr.filter(x => typeof x === 'string');
  if (!strings.length) return '';
  return strings.reduce((a, b) => a.length <= b.length ? a : b);
}

//Array Methods 15:2 findSmallestNumberAmongMixedElements
function findSmallestNumberAmongMixedElements(arr) {
  let digits = arr.filter(x => typeof x === 'number');
  return !digits.length ? 0 : Math.min(...digits);
}

//Array Methods 16:1 getLongestWordOfMixedElements
function getLongestWordOfMixedElements(arr) {
  let strings = arr.filter(x => typeof x === 'string');
  return !strings.length ? '' : strings.reduce((a, b) => a.length >= b.length ? a : b);
}

//Array Methods 16:2 getLargestNumberAmongMixedElements
function getLargestNumberAmongMixedElements(arr) {
  let nums = arr.filter(x => typeof x === 'number');
  return !nums.length ? 0 : Math.max(...nums);
}

//Iteration 3:1 computeSummationToN
function computeSummationToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//Conditionals 8:1 convertScoreToGrade
function convertScoreToGrade(score) {
  return score >= 90 && score <= 100 ? 'A'
    : score >= 80 && score < 90 ? 'B'
    : score >= 70 && score < 80 ? 'C'
    : score >= 60 && score < 70 ? 'D'
    : score >= 00 && score < 60 ? 'F'
    : 'INVALID SCORE';
}

//Conditionals 8:2 convertScoreToGradeWithPlus
function convertScoreToGradeWithPlusAndMinus(score) {
  if (score > 100 || score < 0) return 'INVALID SCORE';
  grade = score >= 90 && score <= 100 ? 'A'
    : score >= 80 && score < 90 ? 'B'
    : score >= 70 && score < 80 ? 'C'
    : score >= 60 && score < 70 ? 'D'
    : score >= 0 && score < 60 ? 'F'
    : undefined;
  score = score.toString();
  return score === '100' ? grade + '+'
    : ['0', '1', '2'].indexOf(score[1]) !== -1 ? grade + '-'
    : ['8', '9'].indexOf(score[1]) !== -1 ? grade + '+'
    : grade;
}

//Iteration 4:1 computeFactorialOfN
function computeFactorialOfN(n) {
  if (n === 0) {
    return 1;
  }
  return n * computeFactorialOfN(n - 1);
}

//Iteration 4:2 repeatString
function repeatString(string, num) {
  return string.repeat(num);
}

//Math 6:1 computeCompoundInterest
function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  return principal * (1 + (interestRate/compoundingFrequency)) ** (compoundingFrequency * timeInYears) - principal
}

//Advanced 6:1 modulo
function modulo(num1, num2) {
  if (isNaN(num1) || isNaN(num2) || num2 === 0) return NaN;
  if (num1 === 0) return 0;
  const isNeg = Math.sign(num1) === -1;
  num1 = Math.abs(num1);
  num2 = Math.abs(num2):
  while (num1 >= num2) {
    num1 -= num2;
  }
  return isNeg ? -num1 : num1;
}

//Iteration 5:1 multiply
function multiply(num1, num2) {
  let product = 0;
  const isNeg = (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while (num1 > 0) {
    product += num2;
    num1--;
  }
  return isNeg ? -product : product;
}

//Advanced 7:1 isOddWithoutModulo
function isOddWithoutModulo(num) {
  num = Math.abs(num);
  while (num > 0) {
    num -= 2;
  }
  return num !== 0;
}

//Advanced 8:1 isEvenWithoutModulo
function isEvenWithoutModulo(num) {
  num = Math.abs(num);
  while (num > 0) {
    num -= 2;
  }
  return num === 0;
}

//Iteration 6:1 multiplyBetween
function multiplyBetween(num1, num2) {
  if (num1 > num2 || num1 === num2) return 0;
  let product = 1;
  while (num1 < num2) {
    product *= num1;
    num1++;
  }
  return product;
}