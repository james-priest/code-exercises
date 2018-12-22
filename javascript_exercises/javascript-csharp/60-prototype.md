<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 60. Prototype in JavaScript
In this lesson we will discuss the **Prototype object** in JavaScript. Let us understand it's use with an example.

The following `Employee` constructor function constructs an Employee object.

```js
function Employee(name) {
    this.name = name;
}
```

There are several ways to add a function to the Employee object. One way is as shown below. This works but the problem with this approach is that, **if you create 100 employee objects there will be 100 copies of the `getName()` function**.

```js
function Employee(name) {
    this.name = name;

    // privileged method
    this.getName = function () {
        return this.name;
    }
} 

var e1 = new Employee("Mark");
var e2 = new Employee("Sara"); 

document.write("e1.name = " + e1.getName() + "<br/>");
document.write("e2.name = " + e2.getName() + "<br/>"); 
```

```text
Output:
e1.name = Mark
e2.name = Sara
```

**Live Sample:** [60-privileged-method.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/60-privileged-method.html)

We don't want to be creating copies of functions, instead **we want all the objects to share the same function code**. This can be achieved using JavaScript prototype object.

In this example, the `getName()` function is added just to the `e1` object, and not to `e2` object. So `e2.getName()` would throw an `undefined` error.

```js
function Employee(name) {
    this.name = name;
}

var e1 = new Employee("Mark");

// instance method
e1.getName = function () {
    return this.name;
}

var e2 = new Employee("Sara");

document.write("e1.name = " + e1.getName() + "<br/>");
document.write("e2.name = " + e2.getName() + "<br/>");
```

**Live Sample:** [60-instance-method.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/60-instance-method.html)

In the following example `getName()` function is added to the Employee object using the name of the constructor function. **This would also result in `undefined` error.**

```js
function Employee(name) {
    this.name = name;
}

// static method
Employee.getName = function () {
    return this.name;
}

var e1 = new Employee("Mark");
var e2 = new Employee("Sara");

document.write("e1.name = " + e1.getName() + "<br/>");
document.write("e2.name = " + e2.getName() + "<br/>");
```

**Live Sample:** [60-static-method.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/60-static-method.html)

### Using the prototype object to add functions
The following are the advantages of using the prototype object to add functions.

1. No matter how many objects you create, functions are loaded only once into memory
2. Allows you to override functions if required.

```js
function Employee(name) {
    this.name = name;
}

Employee.prototype.getName = function () {
    return this.name;
}

var e1 = new Employee("Mark");
var e2 = new Employee("Sara");

document.write("e1.name = " + e1.getName() + "<br/>");
document.write("e2.name = " + e2.getName() + "<br/>");
```

```text
Output:
e1.name = Mark
e2.name = Sara
```

**Live Sample:** [60-prototype-method.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/60-prototype-method.html)