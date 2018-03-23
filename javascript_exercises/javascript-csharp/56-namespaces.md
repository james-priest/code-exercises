<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 56. Namespaces in JavaScript

In this lesson, we will discuss **how to use namespaces to avoid polluting the global scope**. This is continuation to Part 55. Please watch Part 55 of JavaScript tutorial to understand the problem of global namespace pollution.

JavaScript lack namespaces. However we can use objects to create namespaces.

The following line says use the `PragimTech` object if it already exists, otherwise create an empty object.

```js
var PragimTech = PragimTech || {};
```

The following line adds a nested namespace. A nested namespace is a namespace inside another namespace. In JavaScript to define a nested namespace, you define an object inside another object.

```js
PragimTech.TeamA = PragimTech.TeamA || {};
```

Modify the script in **TeamA.js** file as shown below. In this example we are adding `customer()` function to `PragimTech.TeamA` namespace.

```js
var PragimTech = PragimTech || {};
PragimTech.TeamA = PragimTech.TeamA || {};

PragimTech.TeamA.customer = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };

    return this;
};
```

PragimTech will be added to the global namespace. `window` is the alias for global namespace in JavaScript. You can now access `customer()` function as shown below.

```js
PragimTech.TeamA.customer("Tom", "Grover")
```

OR

```js
window.PragimTech.TeamA.customer("Tom", "Grover")
```

Modify the script in **TeamB.js** file as shown below. In this example we are adding `customer()` function to `PragimTech.TeamB` namespace.

```js
var PragimTech = PragimTech || {};
PragimTech.TeamB = PragimTech.TeamB || {};

PragimTech.TeamB.customer = function (firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    };

    return this;
};
```

PragimTech will be added to the global namespace. You can now access `customer()` function as shown below.

```js
PragimTech.TeamB.customer("Tom", "T", "Grover")
```

OR

```js
window.PragimTech.TeamB.customer("Tom", "T", "Grover")
```

On any given HTML page you should be able to access both the versions of customer() function as shown below.

```html
<html>
    <head>
        <script type="text/javascript" src="TeamA.js" ></script>
        <script type="text/javascript" src="TeamB.js" ></script>
    </head>
    <body>
        <script type="text/javascript">
            var cust1 = PragimTech.TeamA.customer("Tom", "Grover");
            var cust2 = PragimTech.TeamB.customer("Tom", "T", "Grover");

            document.writeln(cust1.getFullName() + '<br>');
            document.writeln(cust2.getFullName());
        </script>
    </body>
</html>
```