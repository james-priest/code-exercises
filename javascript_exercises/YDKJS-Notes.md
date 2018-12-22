# JavaScript Notes

Taken from [You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going) by Kyle Simpson

## Interpretation & Compilation

Chapter 1: Into Programming - pg. 4

* A special utility on a computer (either an _interpreter_ or _compiler_) is used to translate code into commands a computer can understand
* For some computer languages, this translation happens from top to bottom, line by line, every time the program is run. This is called _interpreting_ the code.
* For other languages, the translation is done ahead of time, called _compiling_ the code, so when the program _runs_ later, what's running is actually the already compiled computer instructions.
* **JavScript is commonly referred to as an _interpreted_ language because the JavaScript source code is processed each time it's run. But that's not entirely accurate. The JavaScript engine actually _compiles_ the program on the fly and then immediately runs the compiled code.**
* This is why we have hoisting, closures, scope-chains etc...
* JavaScript is different than any other interpreted language because it has a two phase process. The _compilation phase_ and the _execution phase_.
* Like other interpreted languages, JavaScript is executed on the fly, but it does also go through a compilation phase before execution in which things like variable hoisting takes place.

## Values & Types

Chapter 1: Into Programming - pg. 10

* Representations for values are called _types_
* _Primitives_ are different representations for each type:
  * `number`
  * `string`
  * `boolean`
* Values that are included directly in the source code are called _literals_
  * `string` literals are surrounded by double ("...") or single ('...') quotes
  * `number` and `boolean` are presented as is (e.g. 42, true, etc.)
* There is also _arrays, objects, functions,_ and more.

### Converting Between Types

* In JavaScript, a conversion between types is called "coercion"
* There can be _explicit_ coercion using `Number(..)` and implicit coercion which occurs when comparing values of different types
