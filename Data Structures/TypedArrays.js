//There are two ways in creating these kind of arrays. One way is to create it directly. Below is how to create a 3 length Int16Array.


var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]

//You can also create a buffer to assign how much data (in bytes) you want the array to take up. Note
//To create typed arrays using buffers, you need to assign the number of bytes to be a multiple of the bytes listed above.

// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]

//Buffers are general purpose objects that just carry data. You cannot access them normally. 
//To access them, you need to first create a view.

i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
