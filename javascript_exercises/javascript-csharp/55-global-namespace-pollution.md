<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 55. Global namespace pollution in JavaScript

In this lesson we will understand the **problem of global namespace pollution in JavaScript** with an example. When working with JavaScript on a big project, you might hear senior developers saying during the code review, this code pollutes the global scope.

In this lesson let's understand the problem of global namespace pollution. In our next lesson we will discuss how to write JavaScript in such a way that it does not pollute the global scope.

Let us say we have 2 software development teams (**TeamA** & **TeamB**) working on a large project for **Pragim Technologies**.

**TeamA** has created a `customer` constructor function with 2 parameters (`firstName` & `lastName`) and added it to **TeamA.js** file

```js
function customer(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
}
```

**TeamB** has also created a `customer` constructor function but with 3 parameters (`firstName`, `middleName` & `lastName`) and added it **TeamB.js** file.

```js
function customer(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
}
```

So at the moment we have **2 customer constructor functions**. One version has 2 parameters (`firstName` & `lastName`) and the other version has 3 parameters (`firstName`, `middleName` & `lastName`).

**HTML Page code:** In this HTML page we want to use the customer constructor function that has 2 parameters (firstName & lastName). Notice that in the header section we are first loading **TeamA.js** and then **TeamB.js**.

```html
<html>
    <head>
        <script type="text/javascript" src="TeamA.js" ></script>
        <script type="text/javascript" src="TeamB.js" ></script>
    </head>
    <body>
        <div id="resultDiv"></div>

        <script type="text/javascript">
            var customer1 = new customer('Tom', 'Grover');
            document.getElementById('resultDiv').innerHTML = customer1.getFullName();
        </script>
    </body>
</html>
```

When you view the page in the browser, we get the following output. We expected it to print to "Tom Grover".

```text
Tom Grover undefined
```

**This is because JavaScript does not support function overloading and as a result**, the `customer()` constructor function with 3 parameters simply overwrites the `customer()` constructor function with 2 parameters.

You may be wondering why didn't it happen the other way round. Why didn't `customer()` constructor function with 2 parameters overwrite the `customer()` constructor function with 3 parameters. That is because **TeamB.js** is loaded after **TeamA.js**. So the `customer()` constructor function in **TeamB.js** has overwritten the `customer()` constructor function in **TeamA.js**.

The reason, one of the `customer()` constructor function got overwritten is because we have already **polluted the global scope**. Let's understand what we mean by this.

1. `window` is the Global object in JavaScript.
1. When **TeamA.js** script file is loaded, the `customer()` function in **TeamA.js** file is added to the global namespace.
1. When **TeamB.js** script file is loaded, the `customer()` function in **TeamB.js** file is added to the global namespace. Since 2 functions with the same name cannot exist in the global namespace, the `customer()` function in **TeamB.js** overwrites the `customer()` function in **TeamA.js**. As a result we cannot use the `customer()` function in **TeamA.js** file.
1. In JavaScript if you declare a variable or a function second time, it simply overwrites the one you created earlier. JavaScript does not raise any errors like C# or Java if you redefine a variable or a function.

If we were to `console.log(this)` from the `customer()` function in TeamB.js as such.

```js
function customer(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    };

    console.log(this);
}
```

**Live Sample:** [55-collision.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/55-collision.html)

It would produce this.

```text
customer {firstName: "Tom", middleName: "Grover", lastName: undefined, getFullName: f}
```

### Summary
Polluting global namespace causes name collision. This is especially true in large projects where you may be using several JavaScript libraries (both internally developed as well as third party libraries). That's why it is very important not to add everything to the global namespace. If someone else use the same variable or function names it can lead to name collision.

In our next we will discuss, how to write JavaScript code in such a way that it does not pollute the global scope.