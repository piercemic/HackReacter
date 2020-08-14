/* MODULE 2: 17 Problems */

/* TESTING */

//assertEqual
function assertEqual(actual, expected, testName) {
  return actual === expected ? console.log('passed')
    : console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
}

//assertArraysEqual
function assertArraysEqual(actual, expected, testName) {
  const length = actual.length === expected.length;
  let values = true;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      values = false;
      break;
    }
  }
  return length && values ? console.log('passed')
    : console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
}

//assertObjectsEqual
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  return actual === expected ? console.log('passed')
    : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
}

//assertWithinRange
function assertWithinRange(low, high, actual, testName) {
  return actual > low && actual < high ? console.log('passed')
    : console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
}

//Applying assertEqual 1
function square(n) {
  return n * n;
}
function assertEqual(actual, expected) {
  return actual === expected ? console.log('passed')
    :  console.log(`FAIL: Actual: ${actual}, Expected: ${expected}`);
}
assertEqual(square(2), 4);
assertEqual(square(0), 0);

//Applying assertEqual 2
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  for (var i = 0; i < array.length; i++) {
    doesEveryElementMatch = callbackFunction(array[i]);
  }
  return doesEveryElementMatch;
}
function isNumber(element) {
  return typeof element === 'number';
}
function assertEqual(actual, expected) {
  return actual === expected ? console.log('passed')
    :  console.log(`FAIL: Actual: ${actual}, Expected: ${expected}`);
}
assertEqual(every([1, 'hi', 2], isNumber), false);
assertEqual(every([1, 3, 2], isNumber), true);

//applyAssertArraysEqual
function map(array, callbackFunction) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }
  return newArray;
}
function cubeAll(n) {
  return n * n * n;
}
function assertArraysEqual(actual, expected) {
  const length = actual.length === expected.length;
  let values = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      values = false;
      break;
    }
  }
  return length && values ? console.log('passed')
    : console.log(`FAIL: Actual: ${actual}, Expected: ${expected}`);
}
assertArraysEqual(map([1, 2, 3], cubeAll), [1, 8, 27]);
const nums2 = [4, 5, 6];
const actualNums2 = map(nums2, cubeAll);
assertArraysEqual(actualNums2, [16, 25, 36]);

//applyAssertObjectsEqual
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;
  if (firstName && lastName) {
    obj.fullName = firstName + ' ' + lastName;
  }
  return obj;
}
function assertObjectsEqual(actual, expected) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  return actual && expected ? console.log('passed')
    : console.log(`FAIL: Actual: ${actual}, Expected: ${expected}`);
}
addFullNameProp({firstName: 'John', lastName: 'Smith'}, {firstName: 'John', lastName: 'Smith', fullname: 'John Smith'});
addFullNameProp({firstName: 'John'}, {firstName: 'John'});

/* SKELETONS */

//Average
function average(numbers) {
    return sum(numbers) / numbers.length;
  }
  function sum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur)
  }
  function assertEqual(actual, expected) {
    return actual === expected ? console.log('passed')
      : console.log(`FAIL: Actual: ${actual}, Expected: ${expected}`);
  }
  average([1, 2, 3], 2);
  average([3, 3], 3);

//decorateStudentList
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function decorateClassListWithAges(classList) {
  let students = [];
  classList.forEach(el => students.push({name: el, age: getRandomIntInclusive(10, 11)}));
  return students;
}
function assertArrayEquals(actual, expected) {
  const isLengths = actual.length === expected.length;
  const isNames = expected.every((el, idx) => actual[idx] !== el);
  const isAges = actual.every((el, idx, lst) => [10, 11].indexOf(idx.age) === -1);
  console.log(isLengths && isNames && isAges ? 'pass' : `${actual}\n${expected}`);
}

//isIsogram
function isIsogram(text) {
  let obj = {};
  text.toLowerCase().split('').forEach(function(el) {
    obj[el] = (obj[el] === undefined) ? 1 : obj[el] + 1;
  });
  return !Object.values(obj).some((el) => el > 1);
}
function assertEquals(actual, expected) {
  console.log(actual === expected ? 'pass' : `${actual}, ${expected}`);
}
assertEqual(isIsogram('abcdefg'), true);
assertEqual(isIsogram('abcdafg'), false);

//interpretASkeleton
function findMaxRepeatCountInWord(word) {
  let charCount = {};
  for (let i = 0; i < word.length; i++) {
    if (charCount[word[i]] === undefined) {
      charCount[word[i]] = 1;
    } else {
      charCount[word[i]]++;
    }
  }
  return Math.max(...Object.values(charCount));
}
function findFirstWordWithMostRepeatedChars(text) {
  var maxWord;
  let maxCount = 0;
  text = text.split(' ');
  for (let i = 0; i < text.length; i++) {
    const count = findMaxRepeatCountInWord(text[i]);
    if (count > maxCount) {
      maxWord = text[i];
      maxCount = count;
    }
  }
  return maxWord;
}
function assertEqual(actual, expected) {
  console.log(actual === expected ? 'pass' : `${actual}\n${expected}`);
}
assertEqual(findFirstWordWithMostRepeatedChars('one two three fifty'), 'three');

//renderPhoneNumber
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}
PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string += this.parenthesize(this.getAreaCode());
  string += ' ';
  string += this.getExchangeCode();
  string += '-'
  string += this.getLineNumber();
  return string;
};
PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0, 3);
};
PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3, 6);
};
PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6, 10)
};
PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};
PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};
let phone =  new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
let formattedPhone = phone.render();
console.log(formattedPhone);

//findLongestPalindrome
function findLongestPalindrome(sentence) {
  words = sentence.split(' ');
  let palindromes = [];
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) palindromes.push(words[i]);
  }
  palindromes.sort(sortAscendingByLength);
  return palindromes.pop();
}
function reverseString(string) {
  return string.split('').reverse().join('');
}
function isPalindrome(word) {
  return word === reverseString(word);
}
function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}
function assertEqual(actual, expected) {
  console.log(actual === expected ? 'pass' : `${actual}\n${expected}`);
}
assertEqual(findLongestPalindrome('redivider deified civic radar level rotor kayak reviver racecar madam refer'), 'redivider');

/* FASHION INVENTORY */
