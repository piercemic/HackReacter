/* Advanced Pre-Assessment Practice */

//Altitude Deltas - Difficulty: About even with TAA
function sumAltitudeDeltas(heights, start, end) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    if (heights[i] > heights[i + 1]) {
      sum += (heights[i] - heights[i + 1]);
    } else if (heights[i] < heights[i + 1]) {
      sum += (heights[i + 1] - heights[i]) * 2;
    }
  }
  return sum;
}
let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
console.log(output_0); //--> 6   : 2 2 2

let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
console.log(output_1); //--> 7   : 2 5

let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
console.log(output_2); //--> 2   : 2

let output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
console.log(output_3); //--> 15  : 2 6 2 5

let output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
console.log(output_4); //--> 50  : 6 4 40

//Check Winner for Connect Four - Difficulty: About even with TAA
function checkWinner(colors) {
  let reds = 0;
  let blacks = 0;
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'black') {
      blacks += 1;
      reds = 0;
    } else if (colors[i] === 'red') {
      blacks = 0;
      reds += 1;
    } else {
      blacks = 0;
      reds = 0;
    }
    if (reds === 4) return 'Red Wins!';
    if (blacks === 4) return 'Black Wins!';
  }
  return 'Draw!'
}
let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'
let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
console.log(redWinner); //-> 'Red Wins!'
let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
console.log(draw); // -> 'Draw!'

//A Request From Corporate - Difficulty: About even with TAA
function generateSampleView(apiCall) {
  let userData = [];
  for (let key in apiCall){
    if (apiCall[key].id % 2 !== 0) {
      userData.push(apiCall[key].email);
    } else {
      const address = apiCall[key].address
      userData.push(`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`);
    }
  }
  return userData;
 }
 function assertArraysEqual(actual, expected, testName) {
   const lengths = actual.length === expected.length;
   let values = true;
   for (let i = 0; i < expected.length; i++) {
     if (expected[i] !== actual[i]) {
       values = false;
       break;
     }
   }
   console.log(lengths && values ? 'passed' : 'failed');
 }
 var users = [
   {
     "id": 1,
     "name": "Leanne Graham",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
     }
   },
   {
     "id": 2,
     "name": "Ervin Howell",
     "username": "Antonette",
     "email": "Shanna@melissa.tv",
     "address": {
       "street": "Victor Plains",
       "suite": "Suite 879",
       "city": "Wisokyburgh",
       "zipcode": "90566-7771",
       "geo": {
         "lat": "-43.9509",
         "lng": "-34.4618"
       }
     },
     "phone": "010-692-6593 x09125",
     "website": "anastasia.net",
     "company": {
       "name": "Deckow-Crist",
       "catchPhrase": "Proactive didactic contingency",
       "bs": "synergize scalable supply-chains"
     }
   }
 ];
 const expected = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"]
 assertArraysEqual(generateSampleView(users), expected, 'API Data Call - Odds: Email, Evens: Address');

 //Comma Separated Integers - Difficulty: More difficult than the TAA
 function solution(integers){
  if (integers.length > 0 && integers.length < 3) {
    return integers.join(',');
  }
  let result = [];
  let start = 0;
  let next = 1;
  let end = 2;
  while (start < integers.length) {
    if (integers[end] - integers[next] === 1 && integers[next] - integers[start] === 1) {
      while (integers[end] - integers[next] === 1) {
        next = end;
        end = end + 1;
      }
      let seq = integers.slice(start, end);
      result.push(`${seq[0]}-${seq[seq.length - 1]}`);
      start = end;
      next = end + 1;
      end = end + 2;
    } else {
      result.push(integers[start]);
      start = next;
      next = end;
      end = end + 1;
    }
  }
  return result.join(',');
}
solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
// returns "-4--1,2,3,5,6,12-15,17"

//Split Strings - Difficulty: About even with the TAA
function splitPairs(input) {
  if (!input.length) return [];
  let result = [];
  if (input.length % 2 === 0) {
    for (let i = 0; i < input.length; i += 2) {
      result.push(input[i] + input[i + 1]);
    }
  } else if (input.length % 2 !== 0) {
    for (let j = 0; j < input.length; j += 2) {
      if (input[j + 1] === undefined) {
        result.push(input[j] + '_');
        break;
      }
      result.push(input[j] + input[j + 1]);
    }
  }
  return result;
}

//Highest Scoring Word - Difficulty: About even with TAA, perhaps more difficult
function highestScoringWord(string) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let words = string.split(' ');
  let chars = [];
  for (let fi = 0; fi < words.length; fi++) {
    let sum = 0;
    for (let ii = 0; ii < words[fi].length; ii++) {
      sum += alphabet.indexOf(words[fi][ii]);
    }
    chars.push(sum);
  }
  let longest = Math.max(...chars);
  return words[chars.indexOf(longest)];
}
highestScoringWord('taxi volcano semynak');

//Extract a Domain Name - Difficulty: More difficult than the TAA
function getDomain(url) {
  let domain = '';
  if (url.includes('//') && url.includes('www.')) {
    domain += url.slice(url.indexOf('www.') + 4)
  } else if (url.includes('//')) {
    domain += url.slice(url.indexOf('//') + 2)
  }
  domain = domain.substring(0, url.indexOf('.com') - );
  return domain;
}
console.log(getDomain("http://github.com/carbonfive/raygun")) // "github"
console.log(getDomain("http://www.zombie-bites.com")) // "zombie-bites"
console.log(getDomain("https://www.cnet.com")) // "cnet"