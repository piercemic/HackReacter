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

/* SKELETONS */


/* FASHION INVENTORY */
