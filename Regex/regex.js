// =============================================================================
// Regular Expressions.
// =============================================================================
// Regular expressions are patterns you define that are then searched for in a string.
// You can modify, replace, or remove the pattern from the string. For example, you
// could write a regular expression pattern to search for the characters a, b, or c
// in a string, and then do something with all matches found. The following easy
// challenges make use of regular expressions:


// =============================================================================
// TODO a pattern has the following structure.
var pattern = /(a|b|c)/gi

// The pattern above looks for either an a, b, or c character and the g specifies
// to globally find all matches in a string, not just the first match, and the i
// specifies the search to be case-insensitive, meaning A, B, or C match the
// pattern as well. You can view a full list of regular expression examples and
// keywords
// =============================================================================

/*
  TODO: replace the 'a' character everywhere in string
*/
var str = "An apple was eaten";
str.replace(/a/gi, "4"); // 4n 4pple w4s e4ten

// =============================================================================

/*
  TODO: replace all numbers with x's
*/
var str = "My phone number is 551-555-5555";
str.replace(/[0-9]/gi, "x"); // My phone number is xxx-xxx-xxxx

// =============================================================================

/*
  TODO: get all words that only start with a letter
*/
var str = "Hey 4get these words 3_please";
var wor = str.match(/\b[a-z]+/gi); // ["Hey", "these", "words"]

// =============================================================================

/*
  TODO: find the position in the string where the character A is exactly 2
  spaces away from B
*/
var str = "ABxxAxxB"
var pos = str.search(/A..B/gi); // 4

// =============================================================================
