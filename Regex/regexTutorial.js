// =============================================================================
// Regular Expressions Tutorial.
// In Javascrip, a regular expression is simply a type of object that is used
// to match character combinations in strings.
// =============================================================================

// There are two ways to construct Regular Expressions.
// =============================================================================
// 1. Regular expression literal - uses slashes ( / ) to enclose.
var option1 = /cat/;
// =============================================================================
// 2. Regular expression constructor
var option2 = new RegExp("cat");
// =============================================================================

// We can test it since its an object.
console.log(/cat/.test("the cat says meow")); // true
console.log(/cat/.test("the dogs says bark")); // false

// =============================================================================
// Symbols:
// . Matches any single character, except for line breaks
// * Matches the preceding expression 0 or more times
// + Matches the preceding expression 1 or more times
// ? Preceding expression is optional (Matches 0 or 1 times)
// ^ Matches the beginning of the string
// $ Matches the end of the string
// =============================================================================
// Character Groups:
// \d.....Matches any single digit character
// \w.....Matches any word character (alphanumeric & underscore)
// [XYZ]..Character Set: Matches any single character from the character within the
//        brackets. You can also do a range such as [A-Z]
// [XYZ]+.Matches one or more of any of the characters in the set
// [^A-Z].Inside a character set, the ^ is used for negation. In this example,
//        match anything that is NOT an uppercase letter
// =============================================================================
// Flags: There are five optional flags. They can be used seperately or together
// and are placed after the closing slash
// Example: /[A-Z]/g
// g Global search
// i Case is insensitive search
// =============================================================================
// Advanced:
// (x)....Capturing Parenthesis: Matches x and remembers it so we can use it later
// (?:x)..Non-capturing Parenthesis: Matches x and does not remembers it
// x(?=y).Lookahead: Matches x only if it is followed by y
// =============================================================================
client id:
771002584056-sse75qqpo7e4gtpfv7npusr112krj1bk.apps.googleusercontent.com

client secret:
vn6URr-Zq7tRk54PT8WoGymx
