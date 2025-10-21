# Feedback: Data Types, Operators, Variables, & Functions

**Final Score: 10/14 (71.4%)**

Great job submitting this assignment! You've demonstrated a solid understanding of many core JavaScript concepts. Below is detailed feedback on what you did well and what needs improvement.

## Strengths 💪

- **Arrow Functions**: Excellent work converting function declarations to arrow functions in both the modify questions. Your syntax is clean and correct.
- **Implicit Returns**: You successfully simplified arrow functions to use implicit returns - this shows you understand the concise syntax.
- **Logic & Conditionals**: Your `isEven`, `getLarger`, and `isValidAge` functions all work correctly. The conditional logic is sound.
- **Formula Application**: Your `convertToFahrenheit` function correctly applies the temperature conversion formula.

## Areas for Improvement 🎯

### From Scratch Questions (5/8 passing)

#### 1. `createGreeting` ❌
**Issue**: You're using `console.log()` instead of `return`.

```js
// Current (incorrect):
const createGreeting = (name) => {
  console.log(`Hello, ${name}! `);
};

// Should be:
const createGreeting = (name) => {
  return `Hello, ${name}!`;
};
```

**Why it matters**: Functions that `console.log()` don't produce a value that can be used by other code. Always return values unless the function is specifically meant to perform a side effect.

#### 2. `getInitials` ❌
**Issue**: You're including a comma between the initials.

```js
// Current (incorrect):
return `${firstName[0]},${lastName[0]}`;
// Returns "J,D"

// Should be:
return `${firstName[0]}${lastName[0]}`;
// Returns "JD"
```

#### 3. `formatPrice` ❌
**Issue**: The logic for checking `if (price < 1)` doesn't match the requirements. The function should format ANY integer price as `"$X.00"`.

```js
// Current (incorrect):
if (price < 1) {
  return `$${price}`
} else {
  return `$${price}.00`
}

// Should be:
return `$${price}.00`;
```

All prices should get the `.00` suffix, regardless of value.

#### 4. `calculateArea` - Hidden Issue ⚠️
Your function works, but **line 4** creates an implicit global variable:

```js
area = width * height;  // Missing const/let!
```

This should be:

```js
const area = width * height;
```

Or even simpler:

```js
return width * height;
```

### Debug Question (3/4 passing)

Your `bad-hoist.js` file is mostly good! You correctly:
- ✅ Replaced `var` with `let`/`const`
- ✅ Used template literals
- ✅ Eliminated implicit globals
- ✅ Produced the correct output

**One small issue**: The test "uses let and const, but not var" failed. Double-check that there are no remaining `var` declarations anywhere in the file or that you're using `let` and `const` appropriately (use `const` when variables don't need to be reassigned).

## Next Steps 🚀

1. **Fix `createGreeting`**: Change `console.log()` to `return`
2. **Fix `getInitials`**: Remove the comma between initials
3. **Fix `formatPrice`**: Remove the conditional and always return `"$X.00"` format
4. **Fix `calculateArea`**: Add `const` before `area` variable declaration
5. **Review variable declarations**: Make sure you're using `const` for values that don't change and `let` for values that do

## Retesting Your Code

Run the tests again with:
```sh
npm test
```

Or to watch for changes:
```sh
npm run test:w
```

## Overall Comments

You're **71.4%** of the way there, which is approaching the 75% completion threshold! The issues are small and easy to fix - mostly about understanding when to use `return` vs `console.log()` and paying close attention to the exact output format required. 

Keep up the good work! With these small fixes, you'll have a fully passing assignment. Don't hesitate to reach out if you have questions.
