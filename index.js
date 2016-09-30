'use strict'

let numberArray = [2, 34, 451, 2, 234, 5, 68, 81, 0];

function sort(array) {
	return array.sort();
}

function duplicateArray(array) {
	return numberArray.map(val => {
		return val * 2;
	});
}

function checkNumber(array) {
	return array.map(val => {
		return !(val % 2) ? 0 : 1;
	})
}

numberArray.map(function(val, index) {
console.log(val,index);
})

//console.log(duplicateArray(numberArray));
console.log(checkNumber(numberArray));