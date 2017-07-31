# JavaScript Notes

## Interpretation & Compilation

* A special utility on a computer (either an _interpreter_ or _compiler_) is used to translate code into commands a computer can understand
* For some computer languages, this translation happens from top to bottom, line by line, every time the program is run. This is called _interpreting_ the code.
* For other languages, the translation is done ahead of time, called _compiling_ the code, so when the program _runs_ later, what's running is actually the already compiled computer instructions.
* **JavScript is commonly referred to as an _interpreted_ language because the JavaScript source code is processed each time it's run. But that's not entirely accurate. The JavaScript engine actually _compiles_ the program on the fly and then immediately runs the compiled code.**
* This is why we have hoisting, closures, scopechains etc...
* JavaScript is different than any other interpreted language because it has a two phase process. The _compilation phase_ and the _execution phase_.
* Like other interpreted languages, JavaScript is executed on the fly, but it does also go through a compilation phase before execution in which things like variable hoisting takes place.