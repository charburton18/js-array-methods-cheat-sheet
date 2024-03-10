// ARRAY METHODS

//Declare constant variable called myLetters as an array
const myLetters = ['A', 'B', 'C']
console.log('myLetters:', myLetters);


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
console.log(myLetters.splice(1, 1, 'SPLICED IN FIRST', 'SPLICED IN SECOND'));
// Splice adds and/or removes specified array elements. 1st value = starting index, 2nd value = remove this number of elements starting at your starting index, 
// 3rd+ value = name of element(s) to be added at 1st value
// returns a new array containing ONLY the removed elements (if any): ['B']
// Splice DOES affect the original array. So if we console.log myLetters after only myLetters.splice(1, 1, 'SPLICED IN FIRST', 'SPLICED IN SECOND') we get:
// ['A', 'SPLICED IN 1', 'SPLICED IN 2', 'C']