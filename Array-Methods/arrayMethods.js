// =============================================================================
// Array Methods.
// =============================================================================
// TODO: indexOf
var arr = [1, 2, 100, 12, -1];

arr.indexOf(100); // 2
arr.indexOf(5); // -1

// =============================================================================
// TODO: push() pop()
var arr = [1, 2, 3, 4];

arr.push(5) // [1, 2, 3, 4, 5]
arr.push(6, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]

arr.pop(); // [1, 2, 3, 4, 5, 6, 7]

// =============================================================================
// TODO: shift() unshift()
// Remove the first element from an array and return that element or add an
// element to the front of an array.
var arr = [1, 2, 100, 12, -1];

var first = arr.shift(); // 1
// arr is now => [2, 100, 12, -1]

arr.unshift(5000); // arr is now => [5000, 2, 100, 12, -1]

// =============================================================================
// TODO: reverse()
var arr = [1, 2, 100, 12, -1];
arr.reverse(); // [-1, 12, 100, 2, 1]

// =============================================================================
// TODO: sort()
var arr = [1, 2, 100, 12, -1];

// sort in ascending order
arr.sort(function(a, b) { return a - b; }); // [-1, 1, 2, 12, 100]

// sort in descending order
arr.sort(function(a, b) { return b - a; }); // [100, 12, 2, 1, -1]
// =============================================================================
// TODO: slice()
// Return a part of the array specified by two numbers, the start and end indices.
var arr = [1, 2, 100, 12, -1];
var cutArr = arr.slice(1, 3); // [2, 100]
// =============================================================================
