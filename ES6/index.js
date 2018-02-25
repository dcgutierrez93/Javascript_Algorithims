// =============================================================================
// Javascript ES6
// =============================================================================

// =============================================================================
// Two new ways of declaring variables (let const)
// TODO: let: The let variable declaration works similarly to var, except var is
// function-scoped in JavaScript, while let is block-scoped. Below is an example
// of functional scoping in JavaScript:
(function foo() {
  var a = 10;
  if (true) {
    var a = 20;
    var b = 30;
  }
  console.log(a); // => 20
  console.log(b); // => 30
})();

(function foo() {
  var a = 10;
  if (true) {
    // these variables are only available within this block now
    let a = 20;
    let b = 30;
  }
  console.log(a); // => 10
  console.log(b); // => ReferenceError: b is not defined
})();

// TODO: const
(function() {
  if (true) {
    const name = 'Daniel';
    console.log(name); // => Daniel
  }
  console.log(name); // => ReferenceError: name is not defined
})();

const name; // => SyntaxError: Missing initializer in const declaration

const name = 'Daniel';
name = 'John'; // => TypeError: Assignment to constant variable
// =============================================================================
