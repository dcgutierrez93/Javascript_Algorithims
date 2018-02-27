// =============================================================================
// String Methods.
// =============================================================================

// TODO: charAt() :
// Charater and index.
var str = "hello";
str.charAt(0); // => h
str.chatAt(1); // => e

// =============================================================================
// TODO: charCodeAt() :
// The first function returns a unicode number in place of the
// character. This is useful for moving some places down or up in the alphabet.
// The second function does the opposite, it returns a character from the unicode
// number.
var str = "Hello world";

str.charCodeAt(0); // 72  because H = 72
str.charCodeAt(6); // 119 because w = 119

// you can now easily change the first character to the next one in the
// alphabet using a combination of both functions
String.fromCharCode( str.charCodeAt(0) + 1 ); // I
// =============================================================================

// TODO: toUpperCase() & toLowerCase()
var str = "Hello";

str.toUpperCase(); // HELLO
str.charAt(1).toUpperCase(); // HEllo

// =============================================================================
// TODO: split()
// Convert a string into an array for easy access and looping.
var str = "Hello planet earth";

var arr1 = str.split("");
// ["H", "e", "l", "l", "o", " ", "p", "l", "a", "n", "e", "t", " ", "E", "a", "r", "t", "h"]
var arr2 = str.split(" ");
// // ["Hello", "planet", "Earth"]
// =============================================================================

// TODO: replace() : a specified part of the string.
var str = "Hello planet earth";
var str2 = str.replace("earth, mars"); // Hello planet mars

// =============================================================================

// TODO: subtr() returns a substring of the original string.
var str = "Hello planet Earth";
var str2 = str.substr(6, 6); // planet

// =============================================================================

// TODO: concat() Method- joins two or more strings
var str = "Hello";
var str2 = "World";
var str3 = str.concat(" ", str2);

// =============================================================================

// TODO: search() Method- searches a string for a specified value and returns the
// position of the match
var str = "Please locate where 'locate' occuse!";
var pos = str.search("locate"); // 7

// =============================================================================

// TODO: lastIndexOf() Method- resturns the index of the LAST occurence of a
// specified text in a string.
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate"); // 21

// =============================================================================

// TODO: length() property returns the length of a string.
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length; // 26

// =============================================================================
