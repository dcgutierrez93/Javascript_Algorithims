// Two Sum Problem
// =============================================================================

// If the array is: [4, 5, 1, 8] and the sum is 6 the algorithm would proceed
// with the steps below

// (1) The hash table is initially empty and the first element in the array is 4.
//     We simply put 4 into the hash table.
//
// (2) The next element is 5. We check to see if the sum minus the current element
//     exists in the hash table. 6 - 5 = 1 does not exist in the hash table. So add
//     5 to the hash table.
//
// (3) The next element is 1. We check to see if the sum minus the current element
//     exists in the hash table. 6 - 1 = 5 does exist in the hash table so we found
//     a pair!

// Sum funciton returns all pairs in the array that sum up to S.
function twoSum(array, S) {
    var sums = [];
    var hashTable = {};

    // check element in the array
    for (var i = 0; i < array.length; i++) {

        // calculate s - current element.
        var sumMinusElement = S - array[i];

        // Check if this number exists in the hashtable
        // if so we found a pair of numbers that add up to s
        if (hashTable[sumMinusElement.toString()] !== undefined) {
            sums.push([array[i], sumMinusElement]);
        }

        // add the current number to the hashtable.
        hashTable[array[i].toString()] = array[i];
    }

    // return all the pairs of integers that sum up to S.
    return sums;
}


console.log(twoSum([3, 5, 2, -4, 8, 11], 7));
console.log(twoSum([4, 5, 1, 8], 6));
