// ARRAY METHODS

//Define a constant variable called myLetters as an array
const myLetters = ['A', 'B', 'C']
//console.log('myLetters:', myLetters);


// POP
myLetters.pop();
// Pop “pops” the last item off the list.
// returns whatever was "popped off": C
// if we console.log myLetters after only myLetters.pop we get: ['A', 'B']

// PUSH
myLetters.push('D');
// Push pushes a new element to the array (at the end)
// returns the new array length: 3 
// if we console.log myLetters after only myLetters.push we get: ['A', 'B', 'C', 'D']

// SHIFT
myLetters.shift();
// Shift "shifts" the whole array one index forward, thus removing the element at the first index
// returns the removed element: A
// if we console.log myLetters after only myLetters.shift() we get: ['B', 'C']

// UNSHIFT
myLetters.unshift('Y', 'Z');
// Unshift "unshifts" the whole array by adding element(s) to the beginning of the array
// returns the new length of the array: 5
// if we console.log myLetters after only myLetters.unshift() we get: ['Y', 'Z', 'A', 'B', 'C']

// SLICE
myLetters.slice(0,2);
// Slice "takes a picture of a pizza slice" by selecting from a given start index (first value), up to a (not inclusive) given end index (second value) and
// returns the selected elements as a new array: ['A', 'B']
// Slice does NOT affect the original array. So if we console.log myLetters after only myLetters.slice(0,2) we still get: ['A', 'B', 'C']

// SPLICE
myLetters.splice(1, 1, 'SPLICED IN FIRST', 'SPLICED IN SECOND');
// Splice adds and/or removes specified array elements. 1st value = starting index, 2nd value = remove this number of elements starting at your starting index, 
// 3rd+ value = name of element(s) to be added at 1st value
// returns a new array containing ONLY the removed elements (if any): ['B']
// Splice DOES affect the original array. So if we console.log myLetters after only myLetters.splice(1, 1, 'SPLICED IN FIRST', 'SPLICED IN SECOND') we get:
// ['A', 'SPLICED IN 1', 'SPLICED IN 2', 'C']

// INDEX OF
// indexOf returns the first index (position) of a specified value in an array or string. 
// Define a constant variable called happyString as a string
const happyString = 'I am so happy!';
// invoke .indexOf(value)
happyString.indexOf('m'); // return 3
// OR use indexOf on an array!
myLetters2.indexOf('B'); // return 1
// indexOf's required parameters are: (item) which is the value to search for
// indexOf returns the first index (position) of a specified value
// Does not modify the original string or array

/* --------------------------------------------- */


// ADVANCED ARRAY METHODS

//Define a constant variable called myLetters2 as an array
const myLetters2 = ['A', 'B', 'C', 'D'];
console.log('myLetters2:', myLetters2);


// FIND
// Find "finds" the first element in the array that satisfies its callback function (the function in the () after .find) and returns it
// first, define a function to pass into .find()
const firstLetterD = (name) => {
	return name[0] === 'D';
}
// second, use arrayName.find(callbackFunction)
myLetters2.find(firstLetterD); // console logging this prints D
// Find's required parameter(s) are: (callbackFunction)
  // (remember: a callback function is just a function that is being passed in as an argument for another function. You can write it as callbackFunction or as an anonymous function.)
// Find returns the value of the element in the array that satisfies the function FIRST. Find does not return multiple values.
// Does not modify the original array


// FOR EACH
//forEach executes a function "for each" element of the array, and returns undefined
// first, define a function to pass into .forEach()
const logItem = (item) => {
	console.log(`${item} is awesome!`);
}
// second, use arrayName.forEach(callbackFunction)
myLetters2.forEach(logItem); // by invoking the function here, the following is printed to the console: 
/*
A is awesome! 
B is awesome! 
C is awesome! 
D is awesome!
*/
// forEach's required parameter(s) are: (callbackFunction) 
// forEach returns undefined
// Does not modify the original array


// FILTER
// Filter "filters" through the array by checking which array elements satisfy the function. Array elements which satisfy the function are returned into a new array.
// first, define a function to pass into .filter(). The callbackFunction must evaluate to a boolean.
const isGreaterThan54 = (num) => {
	return num > 54;
}
// this example happens to takes in numbers, so let's make an array of numbers
const favNums = [32, 76, 89, 12, -56, 1000, 54];
// second, invoke the function by using arrayName.filter(callbackFunction)
favNums.filter(isGreaterThan54); // invoking the function here returns: [76, 89, 1000]
// Filter's required parameter(s) are: (callbackFunction)
// Filter returns a new array with all the elements that satisfy the function. If no elements pass the test, an empty array is returned.
// Does not modify the original array


// MAP
// Map executes the callbackFunction on each element of the array and returns a new "map" - an array with the resulting values.
// first, define a function to pass into .map()
const makeAwesome = (item) => {
	return `${item} is awesome!`;
}
// second, invoke the function by using arrayName.map(callbackFunction)
myLetters2.map(makeAwesome);// invoking the function here returns: [A is awesome!, B is awesome!, C is awesome!, D is awesome!]
// Map's required parameter(s) are: (callbackFunction)
// Map returns a new array with each element being the result of the callback function.
// Does not modify the original array


// REDUCE
// Reduce "reduces" the array into a single value. It can be used to take the sum of numbers, create a string of elements, etc.
// First, define a function to pass into .reduce(). 
// This function's required parameters are (total, currentValue)
// where total is defined as the initialValue, or the previously returned value of the function
// and where currentValue is defined as the value of the current element you are on (during the loop)
const sum = (total, currentValue) => {
	return total + currentValue;
}
// this example happens to takes in numbers, so let's make an array of numbers
const myNums = [2, 4, 6];
// second, invoke the function by using arrayName.reduce(callbackFunction, initialValue) where initialValue = the starting value before you start looping through your callbackFunction.
myNums.reduce(sum, 0); //invoking the function here returns our sum: 12
myLetters2.reduce(sum, 'I love '); //if we invoke the function on myLetters2 array, with an initialValue of 'I love ' returns: I love ABCD
// Reduce's required parameters are: (callbackFunction, initialValue). The callbackFunction's required arguments are (total, currentValue)
// Reduce returns a single value: the function's accumulated result
// Does not modify the original array