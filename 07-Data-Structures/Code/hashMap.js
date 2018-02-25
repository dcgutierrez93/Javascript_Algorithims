// =============================================================================
// Find all duplicates in an array in linear time (v2)
// =============================================================================

// (1) Loop through the array
// (2) At each element check if it exists in the hash table, which has a lookup of O(1) time
// (3) If the element exists in the hash table then it is a duplicate, if it doesn't
//  exist, insert it into the hash table, also O(1)

function duplicates(arr) {
    // our hash table to store each element
    // in the array as we pass through it
    var hashTable = [];

    // Store duplicates
    var dups = [];

    // check each element in the array
    for (var i = 0; i < arr.length; i++) {
        // if element does not exist in hash table
        // then insert it
        if (hashTable[arr[i].toString()] === undefined) {
            hashTable[arr[i].toString()] = true;
        }

        // if element does exist in hash table
        // then we know it is a duplicate
        else {
            dups.push(arr[i]);
        }
    }
    return dups;
}

console.log(duplicates([1, 21, -4, 103, 21, 4, 1]));
