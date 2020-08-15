/* MODULE 3: Live Performance Exercises */

//Flipper
//FUNCTION DEFINITION
function flipPairs(sentence) {
  //variable that stores result
  //iterate over the array
    //if the next index is equal to undefined
      //then add the current value to the result
    //otherwise
      //add the next value first, the the current value
  //return result variable
  let flipper = '';
  for (let i = 0; i < sentence.length; i += 2) {
    if (sentence[i +1 ] === undefined) {
      flipper += sentence[i];
    } else {
      flipper += sentence[i + 1] + sentence[i];
    }
  }
  return flipper;
}

//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`${testName}\n${expected}\n${actual}`);
  }
}

//TEST CASE
var input = `check out how interesting this problem is, it\'s insanely interesting!`;
var output = flipPairs(input);
const expectedSentence = `hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!`;
assertEqual(output, expectedSentence, 'Should Flip Each Pair');

//Big Flipper
//FUNCTION DEFINTION
function flipEveryNChars(sentence, number) {
  //variable that stores result string
  let bigFlipper = '';
  //iterate over the sentence
  for (let i = 0; i < sentence.length; i += number) {
    //reverse the current value to the next 4 values
    let flipped = sentence.slice(i, i + 5).split('');
    console.log(flipped);
    //add to the result string
    bigFlipper += flipped.reverse().join('');
  }
  //retrun result string
  return bigFlipper;
}

//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`${testName}\n${expected}\n${actual}`);
  }
}

//TEST CASE
var input = 'a short example';
var output = flipEveryNChars(input, 5);
const expectedOutput = `ohs axe trelpma`;
assertEqual(output, expectedOutput, 'Should FLip Every 5 Characters')

//Outliers
function detectOutlierValue(string) {
  let numbers = string.split(' ');
  let evens = [];
  let odds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    } else if (numbers[i] % 2 === 1) {
      odds.push(numbers[i]);
    }
  }
  //console.log(odds[0], evens[0]);
  if (evens.length > odds.length) {
    return numbers.indexOf(odds[0]) + 1;
  } else if (odds.length > evens.length) {
    return numbers.indexOf(evens[0]) + 1;
  }
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`${testName} Failed Expceted\n${expected} ACtual\n${actual}`);
  }
}

const actualEvens = detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
assertEqual(actualEvens, 3, 'should find index of outlier');

const actualOdds = detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
assertEqual(actualOdds, 2, 'should find index of outlier');

//Transpose
//FUNCTION DEFINTION
function transposeTwoStrings(words) {
  //variable that stores word1
  //variable that stores word2
  //variable that stores rseult string
  //iterate over the array
    //iterate over the array
      //add current value of each word to result string
  //return result string
  const word1 = words[0];
  const word2 = words[1];
  let result = '';
  for (let i = 0; i < word1.length; i++) {
    result += word1[i] + ' ' + word2[i] + `\n`;
  }
  return result;
}

//ASSERTION FUNCTOIN
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`${testName}\n${expected}\n${actual}`);
  }
}

//TEST CASE
const actualMessage = transposeTwoStrings(['Hello','World']);
const expectedMessage = `H W\ne o\nl r\nl l\no d\n`;
assertEqual(actualMessage, expectedMessage, 'Should Print To Console')

//Find The Pair
//FUNCTION DEFINTION
function findPairForSum(numbers, sum) {
  //variable that stores an array of numbers
  //variable that stores a copy of the numbers array
  //iterate over the numbers array
    //iterate over the copy of numbers array
      //if current value of each array is equal to sum
        //add the current values to the array
        //break
  //return result variable
  let sumPair = [];
  const numbersCopy = numbers.slice();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbersCopy.length; j++) {
      if (numbers[i] + numbersCopy[j] === sum) {
        sumPair.push(numbers[i], numbersCopy[j]);
        break;
      }
    }
    if (sumPair.length !== 0) {
      break;
    }
  }
  return sumPair;
}

//ASSERTION FUNCTION
function assertArraysEqual(actual, expected, testName) {
  const isLength = actual.length === expected.length;
  let isValue = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      isValue = false;
      break;
    }
  }
  if (isLength && isValue) {
    console.log('passed');
  } else {
    console.log(`${testName} Failed Expected ${expected} Actual ${actual}`);
  }
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
const expectedPair = [4, 5];
assertArraysEqual(pair, expectedPair, 'Should Find Pair Totaling Sum');

//Rotate This
//FUNCTION DEFINITION
function isRotatedVersion(rotated, original) {
  //variable that stores 2 copies of original 
  //iterate over the previous variable
    //if the index of rotated is not equal to neg 1
      //return true
    //otherwise 
      //return false
  const duplicate = original + original;
  return duplicate.includes(rotated);
}

//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`${testName} Failed Expected ${expected} Actual ${actual}`);
  }
}

//TEST CASES
//truthy case
const greeting = 'hello world';
const rotatedGreeting = 'orldhello w';
const actualGreeting = isRotatedVersion(rotatedGreeting, greeting);
assertEqual(actualGreeting, true, 'Should Check If Is Rotated');

//falsy case
const message = 'hello world';
const rotatedMessage = 'orldasdfasdfw';
const actualMessage = isRotatedVersion(rotatedMessage, message);
assertEqual(actualMessage, false, 'Should Check If Is Rotated');

//Divide And Conquer
//FUNCTION DEFINTION
function binarySearch(numbers, target) {
  //variable that stores the maxiumum value
  //variable that stores the minimum value
  //variable that stores the midpoint
  //iterate over the array of numbers -> WHILE
    //if current value is equal to midpoint
      //return index of current value
    //if current value is greater than midpoint
      //mininum value is now 1 more than midpoint
    //if current value is less than midpoint
      //maximum value is now 1 less then midpoint
  let max = numbers.length - 1;;
  let min = 0;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    console.log(mid)
    if (numbers[mid] === target) {
      return mid;
    }
    if (numbers[mid] < target) {
      min = mid + 1;
    }
    if (numbers[mid] > target) {
      max = mid - 1;
    }
  }
  return null
}

//ASSERTION FUNCTION
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`${testName} Failed Expected ${expected} Actual ${actual}`);
  }
}

//TEST CASES
//truthy case
const ints = [1, 3, 16, 22, 31, 33, 34];
const actualSearch = binarySearch(ints, 31);
assertEqual(actualSearch, 4, 'Should Find Index Of Number');

//falsy case
const ints2 = [1, 3, 16, 22, 31, 33, 34];
const actualSearch2 = binarySearch(ints2, 2);
assertEqual(actualSearch2, null, 'Should Not Find Index Of Number');
