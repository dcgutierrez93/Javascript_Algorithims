/*
Binary Search: Given a sorted array arr[] of n element, write a function to
search a given element x in arr[];
input: 77
output: arr[4];
*/
var result = binarySearch([
    1,
    23,
    43,
    56,
    77,
    89,
    211,
    212,
    789,
    972,
    1001,
    4567,
    4599,
    83674
], 77);

console.log(result);

function binarySearch(stuff, searchElement) {

    // Set some starting values.
    var currentElement;
    var currentIndex;
    var maxIndex = stuff.length - 1;
    var minIndex = 0;

    // This is the main loop.
    while (minIndex <= maxIndex) {
        // Get a position near the middle
        currentIndex = Math.floor((minIndex + maxIndex) / 2);

        // Get that element.
        currentElement = stuff[currentIndex];

        // Test it.
        if (currentElement < searchElement) {
            // if it's less than we are looking for, look *Above* this value.
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {

            // If it's more than we are looking for, look *Below* this value.
            maxIndex = currentIndex - 1;
        }
        else {
            // We found it; return the index.
            return currentIndex;
        }
    }
    return false;
}
