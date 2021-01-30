function add (a, b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (tosum) {
	let total = 0;
	for (let i=0; i < tosum.length; i++){
    total += tosum[i];
	}
	return total;
}

function multiply (tomultiply) {
	let total = tomultiply[0];
	for (let i=1; i < tomultiply.length; i++){
		total *= tomultiply[i];
	}
	return total;
}

function power(a,b) {
	return a**b;
}

function factorial(a) {
	let total = 1;
	for (let i=1; i <= a; i++){
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}