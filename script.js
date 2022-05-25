"use script";
var arr = [2, 8, 4, 9, 7, 2, 1, 0];
var sumEv = 0;
var sumOdd = 0;
var evenOdd = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 || arr[i] === 0) {
      sumEv += arr[i];
    } else sumOdd += arr[i];
  }
  return;
};
evenOdd(arr);
console.log(`The sum of the even number of this array ${sumEv}`);
console.log(`The sum of the odd number of this array ${sumOdd}`);
