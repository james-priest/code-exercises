<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 54. Object literal vs object constructor

In this lesson we will discuss the main **difference between objects created using object literal and constructor function** and when to use one over the other. In Part 53 of JavaScript tutorial we discussed some of the syntactical differences.

### Creating an object using object literal notation

```js
var employee = {
    name: "John"
};

// Create a new variable and assign the employee object
var newEmployee = employee;

// Change the name property of the employee object using the new variable
newEmployee.name = "Mary";

// Retrieve the name property from the original employee object
// Notice that name is changed to Mary
document.write(employee.name);
```

**Live Sample:** [54-literal-notation.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/54-literal-notation.html)

```text
Output: Mary
```

**Objects created using object literals are singletons.** This means when a change is made to the object, it effects that object across the entire script.

### Creating an object using constructor function

```js
var Emp = function () {
    this.name = "John";
};

// Create an instance of employee
// employee.name will return John
var employee = new Emp();

// Create an other instance of employee
// newEmployee.name will return John
var newEmployee = new Emp();

// Change the name property of the newEmployee object
newEmployee.name = "Mary";

// Retrieve the name property from the original employee object
// Notice that name is not changed to Mary, it is still John
document.write(employee.name);
```

**Live Sample:** [54-constructor-function.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/54-constructor-function.html)

```text
Output : John
```

**Objects defined with the `new` keyword are created with the function acting as constructor function. Constructors function lets you have multiple instances of that object.** This means changes made to one instance, will not affect other instances.

If a function invocation is preceded with the **new** keyword, it is a constructor invocation.

> Note: It's good practice to name constructor functions with an upper-case first letter. (e.g. `Emp`)

### When to use one over the other
If you need **multiple instances** of the object **use constructor function** where as if you need just **one instance** of the object then **use literal notation**.