/* MODULE 0: 121 Problems */

//1 Console Output
should be true: true

//2 Using the Console
The title of the challenged changed its contents and color

//3 Undefined
function nothing() {
}

//4 Booleans
function returnTrue() {
  return true;
}

//5 Numbers
function addTwo(num) {
  return num + 2;
}

//6 Strings
function returnACharacter(string, index) {
  return string[index]
}

//7 Arrays 1
function returnArray(array) {
  return array;
}

//8 Arrays 2
function returnAnElement(array, index) {
    return array[index];
}

//9 Arrays 3
function createAndReturnAnArray() {
  return [];
}

//10 Objects 1
function returnObject(object) {
  return object;
}

//11 Objects 2
function returnAValue(obj, key) {
  return obj[key];
}

//12 Objects 3
function createAndReturnAnObject() {
  return {};
}

//13 Objects 4
function getType(param) {
  return typeof param;
}

//14 Objects 5
function determineIsAnArray(input) {
  return Array.isArray(input);
}

//15 Using the 'not' operator
function opposite(boolean) {
  return !boolean;
}

//16 Using the 'or' operator
function eitherAreTrue(bool_1, bool_2) {
  const bool = bool_1 || bool_2;
  return bool;
}


//17 Using the 'and' operator
function bothAreTrue(bool_1, bool_2) {
  const bool = bool_1 && bool_2;
  return bool;
}

//18 A Combination of Booleans
function combination(bool_1, bool_2, bool_3) {
  const isTrue = bool_1 && (bool_2 || bool_3);
  return isTrue;
}

//19 Using the 'strict equality' operator
function areEqual(param_1, param_2) {
  const isEqual = param_1 === param_2;
  return isEqual;
}

//20 Using the 'strict not equality' operator
function areNotEqual(param_1, param_2) {
  const isEqual = param_1 !== param_2;
  return isEqual;
}

//21 Using the `+` operator with numbers
function getSum(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

//22 Using the `-` operator with numbers
function getDifference(num1, num2) {
  const sum = num1 - num2;
  return sum;
}

//23 Using the `*` operator with numbers
function getProduct(num1, num2) {
  const sum = num1 * num2;
  return sum;
}

//24 Using the `/` operator with numbers
function getQuotient(num1, num2) {
  const div = num1 / num2;
  return div;
}

//25 Using the `**` operator with numbers
function getPower(num1, num2) {
  const raise = num1 ** num2;
  return raise;
}

//26 Using the `%` operator with numbers
function getRemainder(num1, num2) {
  const mod = num1 % num2;
  return mod;
}

//27  Using the `+=` operator
function increment(base, incrementer) {
  base += incrementer;
  return base;
}

//28 Using the `-=` operator
function decrement(base, decrementer) {
  base -= decrementer;
  return base;
}

//29 Using the `*=` operator
function applyTimesEquals(base, multiplier) {
  base *= multiplier;
  return base;
}

//30 Using the `/=` operator
function applyDivideEquals(base, divider) {
  base /= divider;
  return base;
}

//31 Using the `Math.abs()` method
function getAbsoluteValue(num) {
  const abs = Math.abs(num);
  return abs;
}

//32 Using the `Math.floor()` method
function roundDown(num) {
  const floor = Math.floor(num);
  return floor;
}

//33 Using the `Math.ceil()` method
function roundUp(num) {
  const ceil = Math.ceil(num);
  return ceil;
}

//34 Using the `Number.parseInt()` method
function applyParseInt(numString) {
  const parsed = Number.parseInt(numString);
  return parsed;
}

//35 Using the `Number.parseFloat()` method
function applyParseFloat(numString) {
  const parsed = Number.parseFloat(numString);
  return parsed;
}

//36 Using the `Math.random()` method
function generateRandomNumber(min, max) {
  const rand = Math.random() * (max - min) + min;
  return rand;
}

//37 Using the `>` operator
function applyGreaterThan(num1, num2) {
  const isGreater = num1 > num2;
  return isGreater;
}

//38 Using the `<=` operator
function applyLessThanOrEqualTo(num1, num2) {
  const isLessEqual = num1 <= num2;
  return isLessEqual;
}

//39 Creating a String
function createString() {
  const str = "";
  return str;
}

//40 Accessing a Character in a String
function accessACharacter(string, index) {
  const char = string[index];
  return char;
}

//41 Reassigning a String's Value
function reassignAString(string) {
  string = "reassigned";
  return string;
}

//42 Concatenate two strings
function addTogetherTwoStrings(string1, string2) {
  const concat = string1.concat(string2);
  return concat;
}

//43 Concatenate two strings into a full name
function createFullName(firstName, lastName) {
  const fullName = firstName.concat(' ', lastName);
  return fullName;
}

//44 String Interpolation
function interpolateAString(activity, dayOfTheWeek) {
  const event = `We will go ${activity} on ${dayOfTheWeek}.`;
  return event
}

//45 Get length of string
function getStringLength(string) {
  const length = string.length;
  return length;
}

//46 Get last character of string
function getLastCharacter(string) {
  const lastIndex = string.length - 1;
  const lastCharacter = string[lastIndex];
  return lastCharacter;
}

//47 Apply substring Method
function applySubString(string, start, end) {
  const copy = string.substring(start, end);
  return copy;

//48 Apply indexOf Method
function applyIndexOf(string, subString) {
  const idx = string.indexOf(subString);
  return idx;
}

//49 Apply toString Method
function applyToString(param) {
  const stringVersion = String(param);
  return stringVersion;
}

//50 Using Escape Characters
function generateHaiku(firstLine, secondLine, thirdLine) {
  const haiku = `${firstLine}\n${secondLine}\n${thirdLine}`;
  return haiku;
}

//51 Creating an Array
function createArray() {
  const array = [];
  return array;
}

//52 Accessing an Element in an Array
function accessAnElement(array, index) {
  const el = array[index];
  return el;
}

//53 Reassigning an Element in an Array
function reassignAnElement(array, index, newValue) {
  array[index] = newValue;
  return array;
}

//54 Get length of array
function getArrayLength(array) {
  const length = array.length;
  return length;
}

//55 Get last element of array
function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}

//56 Using .push()
function applyPush(array, element) {
  array.push(element);
  return array;
}

//57 Using .pop()
function applyPop(array) {
  const popped = array.pop();
  return popped;
}

//58 Using .unshift()
function applyUnshift(array, element) {
  array.unshift(element);
  return array;
}

//59 Using .shift()
function applyShift(array) {
  const shifted = array.shift();
  return shifted;
}

//60 Using .splice() to add an element
function addAnElementInGeneral(array, index, element) {
  array.splice(index, 0, element);
  return array;
}

//61 Using .splice() to remove an element
function removeAnElementInGeneral(array, index) {
  array.splice(index, 1);
  return array;
}

//62 Using .splice() to remove and add element
function applySplice(array, index, item1, item2) {
  array.splice(index, 2, item1, item2);
  return array;
}

//63 Using Array.isArray()
function isAnArray(input) {
  const isArray = Array.isArray(input);
  return isArray;
}

//64 Using .slice() in general
function applySlice(array, start, end) {
  const sliceOfArray = array.slice(start, end);
  return sliceOfArray;
}

//65 Using .slice() to make a copy
function makeACopy(array) {
  const copyOfArray = array.slice();
  return copyOfArray;
}

//66 Using .concat()
function applyConcat(array1, array2) {
  const concattedArray = array1.concat(array2);
  return concattedArray;
}

//67 Using .join()
function applyJoin(arrayOfStrings, string) {
  const joinedString = arrayOfStrings.join(string);
  return joinedString;
}

//68 Using .split()
function applySplit(stringToBeSplit, splitter) {
  const splitString = stringToBeSplit.split(splitter);
  return splitString;
}

//69 Apply indexOf Method to an Array
function applyIndexOfToArray(array, element) {
  const idx = array.indexOf(element);
  return idx;
}

//70 Creating an Object
function createObject() {
  const obj = {};
  return obj;
}

//71 Accessing a Property in an Object
function accessAProperty(object, key) {
  const prop = object[key];
  return prop;
}

//72 Reassigning a Property's Value in an Object
function reassignAProperty(object, key, newValue) {
  object[key] = newValue;
  return object;
}

//73 Using 'delete' to remove a property
function removeAProperty(object, key) {
  delete object[key];
  return object;
}

//74 Determine if Property is Present
function isPropertyPresent(object, key) {
  const isPresent = object[key] !== undefined;
  return isPresent;
}

//75 Determine if a value is an Object
function isAnObject(input) {
  const isObject = typeof input === 'object';
  const isNotAnArray = !Array.isArray(input);
  const isObjectAndNotAnArray = isObject && isNotAnArray;
  return isObjectAndNotAnArray;
}

//76 Using Object.keys()
function getAllKeys(obj) {
  const keys = Object.keys(obj);
  return keys;
}

//77 Using Object.values()
function getAllValues(obj) {
  const values = Object.values(obj);
  return values;
}

//78 Using .unshift() again
function applyUnshiftAgain(arrayOfArrays, index, element) {
  arrayOfArrays[index].unshift(element);
  return arrayOfArrays;
}

//79 Using Array.isArray() again
function isAnArrayAgain(inputObj, key) {
  const isArray = Array.isArray(inputObj[key]);
  return isArray;
}

//80 Using Object.keys() again
function getAllKeysAgain(obj, key) {
  const keys = Object.keys(obj[key]);
  return keys;
}

//81 Using 'delete' to remove a property again
function removeAPropertyAgain(arrayOfObjects, index, key) {
  delete arrayOfObjects[index][key];
  return arrayOfObjects;
}

//82 IF statement with undefined
function isItUndefined(param) {
  return (param) ? 'Input is defined': undefined;
}

//83 IF statement with numbers
function fewerApples(apples, oranges) {
  return apples < oranges ? 'There are fewer apples than oranges': undefined;
}

//84 IF statement with a string
function validLengthPassword(password) {
  return password.length > 4 && password.length < 15 ? 'Password length is valid': undefined;
}

//85 IF statement with an array
function findAgent(agentList, agentToSearchFor) {
  return agentList.indexOf(agentToSearchFor) !== -1 ? 
    `${agentToSearchFor} is present within Agent list` : undefined;
}

//86 IF statement with an object
function generateReportSummary(reportTotals, teamName) {
  return reportTotals[teamName] > 5 ?
    `${teamName} has surpassed goal with ${reportTotals[teamName]} reports`: undefined;
}

//87 IF ELSE statement with truthy/falsy
function isItTruthy(param) {
  return param ? 'Input is truthy' : 'Input is falsy';
}

//88 IF ELSE statement with numbers
function balancePets(dogs, cats) {
  return dogs > 8 && cats < 9 ? 'number of cats and dogs is acceptable'
    : 'number of cats or dogs is not acceptable';
}

//89 IF ELSE statement with a string
function passwordLongEnough(password) {
  return password.length > 8 ? 'Password is long enough'
    : 'Please enter a password of at least 9 characters';
}

//90 IF ELSE statement with an array
function findIngredient(ingredientList, ingredientToSearchFor) {
  return ingredientList.indexOf(ingredientToSearchFor) !== -1 ?
    `${ingredientToSearchFor} is on the list`: `${ingredientToSearchFor} is not on the list`;
}

//91 IF ELSE statement with an object
function measureRequiredFruit(fruitTotals) {
  return fruitTotals.bananas > 3 && fruitTotals.strawberries > 10 ?
    `We have enough fruit, with ${fruitTotals.bananas} bananas, and ${fruitTotals.strawberries} strawberries`
    : "We do not have enough of both fruits";
}

//92 IF ELSE IF statement (1)
function player1Choice(choice) {
  return choice === 'rock' ? "Player 1 chose rock"
    : choice === 'paper' ? "Player 1 chose paper"
    : choice === 'scissors' ? "Player 1 chose scissors"
    : "Player 1 has chosen poorly!";
}

//93 IF ELSE IF statement (2)
function selectShirtSize(choice) {
  return choice >= 20 && choice < 30 ? 'You should select a size S'
    : choice >= 30 && choice < 40 ? 'You should select a size M'
    : choice >= 40 && choice < 50 ? 'You should select a size L'
    : 'You should select a different shirt';
}

//94 IF ELSE IF statement (3)
function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
  const tomMin = recipeMinimums.tomatoes;
  const oniMin = recipeMinimums.onions;
  return tomMin > stockTomatoes && oniMin > stockOnions ? 'We need more tomatoes and more onions.'
    : tomMin <= stockTomatoes && oniMin >= stockOnions ? 'We have enough tomatoes, but need more onions.'
    : tomMin >= stockTomatoes && oniMin <= stockOnions ? 'We have enough onions, but need more tomatoes.'
    : `We have enough tomatoes and onions. There will be ${stockTomatoes - tomMin} extra tomato, and ${stockOnions - oniMin} extra onion.`
}

//95 Convert Score To Grade
function convertScoreToGrade(score) {
  return score >= 90 && score <= 100 ? 'A'
    : score >= 80 && score < 90 ? 'B'
    : score >= 70 && score < 80 ? 'C'
    : score >= 60 && score < 70 ? 'D'
    : score >= 0 && score < 60 ? 'F'
    : 'INVALID SCORE'
}

//96 While loop over a series of numbers
function loopASequence(start, end) {
  while (start <= end) {
    console.log(start);
    start++;
  }
}

//97 While loop over an array
function loopAnArray(array) {
  let i = 0;
  while (i <= array.length - 1) {
    console.log(array[i]);
    i++;
  }
}

//98 While loop over a string
function loopAString(string) {
  let i = 0;
  while (i <= string.length - 1) {
    console.log(string[i]);
    i++;
  } 
}

//99 For loop over a series of numbers
function loopASequenceAgain(start, end) {
  for (start; start <= end; start++) {
    console.log(start);
  }
}

//100 For loop over an array
function loopAnArrayAgain(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

//101 For loop over a string
function loopAStringAgain(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

//102 Loop over every other value
function loopEveryOther(array) {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  }
}

//103 Loop starting at a specific index
function loopStartingAtIndex(array, index) {
  for (index; index < array.length; index++) {
    console.log(array[index]);
  }
}

//104 Loop in reverse order
function loopInReverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

//105 Use a 'continue' statement
function useContinue(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (i === index) continue;
    console.log(array[i]);
  }
}

//106 Use a 'break' statement
function useBreak(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (i > index) break;
    console.log(array[i]);
  }
}

//107 For-in loop over an object (1)
function loopOverKeys(object) {
  for (let key in object){
    console.log(key);
  }
}

//108 For-in loop over an object (2)
function loopOverValues(object) {
  for (let key in object) {
    console.log(object[key]);
  }
}

//109 For loop over an array of arrays
function loopAnArrayOfArrays(arrayOfArrays) {
  arrayOfArrays.flat();
  for (let i = 0; i < arrayOfArrays.length; i++) {
      console.log(arrayOfArrays[i]);
  }
}

//110 For-in loop over an object of objects
function loopAnObjectOfObjects(nestedObject) {
  for (let key in nestedObject) {
    for (let key2 in nestedObject[key]) {
        console.log(nestedObject[key][key2]);
    }
  }
}

//111 Loop over an array of objects
function loopAnArrayOfObjects(arrayOfObjects) {
  for (let i = 0; i < arrayOfObjects.length; i++) {
    for (let key in arrayOfObjects[i]) {
      console.log(arrayOfObjects[i][key]);
    }
  }
}

//112 Loop over an object of arrays
function loopAnObjectOfArrays(objectOfArrays) {
  for (let key in objectOfArrays) {
    for (let i = 0; i < objectOfArrays[key].length; i++) {
      console.log(objectOfArrays[key][i]);
    }
  }
}

//113 List all combinations of two arrays
function generateCombinations(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      console.log(array1[i] + ' ' + array2[j]);
    }
  }
}

//114 filterOddElements
function filterOddElements(numbers) {
  return numbers.filter(no => no % 2 !== 0);
}

//115 computeSumOfAllElements
function computeSumOfAllElements(numbers) {
  return numbers.length === 0 ? 0 
    : numbers.reduce((acc, cur) => acc + cur);
}

//116 Generate Average of Elements
function computeAverageOfNumbers(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

//117 Debugging (1)
function keyOfObjectValue(object, target) {
  for (var key in object) {
    if (object[key] === target) {
      return key;
    } 
  }
  return -1;
}

//118 Debugging (2)
function getElementsAbove40(numbers) {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 40) {
      count++;
    }
  }
  return count;
}

//119 Debugging (3)
function createSentence(words) {
  var sentence = "";
  for (var i = 0; i < words.length; i++) {
    if (i === words.length - 1) {
      sentence += words[i] + '.';
    } else {
      sentence += words[i] + ' ';
    }
  }
  return sentence;
}

//120 Use an object to count words in a sentence
function countWords(stringOfWords) {
  if (stringOfWords.length === 0) return {};
  stringOfWords = stringOfWords.split(' ');
  let wordCount = {};
  for (let i = 0; i < stringOfWords.length; i++) {
    if (wordCount[stringOfWords[i]] === undefined) {
      wordCount[stringOfWords[i]] = 1;
    } else {
      wordCount[stringOfWords[i]]++;
    }
  }
  return wordCount;
}

//121 Use an object to count letters in a word
function countAllCharacters(string) {
  if (string.length === 0) return {};
  let charCount = {};
  for (let i = 0; i < string.length; i++) {
      if (charCount[string[i]] === undefined) {
          charCount[string[i]] = 1;
      } else {
          charCount[string[i]]++
      }
  }
  return charCount;
}
