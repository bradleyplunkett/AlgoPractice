// [1,2,3,9]
// sum = 8 
// return NO

// [1,2,4,4]
// sum = 8
//return YES

//numbers in ascending order

function findPair(array, sum) {
    let currentSum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                return true;
            }
        }
    }
    return false
}





console.log('below is the console log')
console.log(findPair([1, 2, 4, 4], 8))