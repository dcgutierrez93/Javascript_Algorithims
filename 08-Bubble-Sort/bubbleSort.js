// =============================================================================
// BubbleSort
// =============================================================================
// (1) Loop through the whole array starting from index 1
// (2) If the number in the array at index i-1 is greater than i, swap the numbers and continue
// (3) Once the end of the array is reached, start looping again from the beginning
// (3) Once no more elements can be swapped, the sorting is complete

function swap(arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

function bubbleSort(arr) {

    var swapped = true;

    // keep going unless no elements can be swapped anymore
    while(swapped) {
        // Set swapped to false so that the loop stops.
        // unless two element are actually swapped
        swapped = false;

        // loop through the whole array swapping adjacent elements
        for (var i = 1; i < arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                swap(arr, i-1, i);
                swapped = true;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([103, 45, 2, 1, 97, -4, 67])); 
