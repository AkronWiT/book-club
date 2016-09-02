// Exercise 1: write a regular expression to test whether a given substring occur in a given string //

// car and cat
/ca[rt]/

// pop and prop
/pr*op/

// ferret, ferry, and ferrari
/ferr(et|y|ari)/

// Any word ending in ious
/\w+ious\b/

// A whitespace character followed by a dot, comma, colon, or semicolon
/\s[/./,/:/;]/

// A word longer than six letters
/\w{7,}/

// A word without the letter e
/\b[^e\s]+\b/

// Exercise 2: replace all the dialogue quotes with double quotes,
// while keeping the single quotes used in contractions like aren’t

(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'))

// Exercise 3: Write an expression that matches only JavaScript-style numbers

var number = /^[+|-]?(\.*\d+|\d+\.*\d*)([eE](\+|-|)\d+)?$/
