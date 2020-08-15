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