/* MODULE 3: Live Performance Exercises */

//Flipper
function flipPairs(string) {
  let flipped = '';
  for (let i = 0; i < string.length; i += 2) {
    flipped += i === string.length - 1 ? string[i]
      : string[i + 1] + string[i];
  }
  return flipped;
}
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`${testName}\n${expected}\n${actual}`);
  }
}
var input = `check out how interesting this problem is, it\'s insanely interesting!`;
var output = flipPairs(input);
const expectedSentence = `hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!`;
assertEqual(output, expectedSentence, 'Should Flip Each Pair');

//Big Flipper
function flipEveryNChars(string, num) {
  let flipped = '';
  for (let i = 0; i < string.length; i += num) {
    let mini = string.slice(i, i + num).split('');
    if (mini.includes(undefined)) {
      while (mini.includes(undefined)) {
        mini = mini.slice(0, mini.length - 1);
      }
      flipped += mini;
    } else {
      flipped += mini.reverse().join('');
    }
  }
  return flipped;
}
var input = '123456789012345678901';
var output = flipEveryNChars(input, 5);

//Outliers
function detectOutlierValue(digits) {
  digits = digits.split(' ');
  let evens = digits.filter(x => Number(x) % 2 === 0);
  let odds = digits.filter(x => Number(x) % 2 !== 0);
  return odds.length === 1 ? digits.indexOf(odds[0]) + 1
    : digits.indexOf(evens[0]) + 1;
}
detectOutlierValue("2 4 7 8 10"); // => 3
detectOutlierValue("1 10 1 1");  //=> 2

//Transpose
function transposeTwoStrings(array) {
  let transposed = '';
  const arr1 = array[0].split('');
  const arr2 = array[1].split('');
  for (let i = 0; i < arr1.length; i++) {
    transposed += `${arr1[i]} ${arr2[i]}\n`
  }
  return transposed;
}
transposeTwoStrings(['Hello','World']);

//Find The Pair
function findPairForSum(numbers, sum) {
  let copy = numbers.slice();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < copy.length; j++) {
      if (numbers[i] + copy[j] === sum) {
        return [numbers[i], copy[j]];
      }
    }
  }
}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

//Rotate This
function isRotatedVersion(string1, string2) {
  return string1.concat(string1).indexOf(string2) !== -1;
}
isRotatedVersion('hello world', 'orldhello w') // true
isRotatedVersion('hello world', 'orldhellow ') // false

//Divide And Conquer
function binarySearch(numbers, target) {
  let max = numbers.length - 1;
  let min = 0;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    if (numbers[mid] === target) return mid;
    if (numbers[mid] < target) min = mid + 1;
    if (numbers[mid] > target) max = mid - 1;
  }
  return null;
}
binarySearch([1, 3, 16, 22, 31, 33, 34], 31) // 4
binarySearch([1, 3, 16, 22, 31, 33, 34], 2); // null