<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 57. Private members in JavaScript
In any object oriented programming language, **classes can have private and public members**. For example a class in C# can have private and public fields and functions.

An example is shown below.

```csharp
// CSharp
public class Employee
{
    // Private Field
    private string privateFullName;

    // Public Fields
    public string firstName;
    public string lastName;

    // Private Function
    private string privateGetFullName()
    {
        privateFullName = this.firstName + " " + this.lastName;
        return privateFullName;
    }

    // Public Function
    public string publicGetFullName()
    {
        return privateGetFullName();
    }
}
```

JavaScript is object oriented programming language, so objects in JavaScript can also have private and public fields and functions. An example is shown below.

```js
// JavaScript
function Employee(firstName, lastName) {
    // Private Field
    var privateFullName;

    // Public Fields
    this.firstName = firstName;
    this.lastName = lastName;

    // Private Function
    var privateGetFullName = function () {
        privateFullName = firstName + " " + lastName;
        return privateFullName;
    };

    // Privileged Function
    this.privilegedGetFullName = function () {
        return privateGetFullName();
    };

    // Public Function
    Employee.prototype.publicGetFullName = function () {
        return this.privilegedGetFullName();
    };
}
```

In the example above, we also have a privileged Function. **So, what is a Privileged Function?**

1. Privileged methods are created using `this` keyword and Public methods are created using `prototype` property of the constructor function.
1. Privileged method can access private variables and methods
1. Public methods can call Privileged methods but not Private methods.
1. Like Public methods, Privileged methods are also available outside the constructor function.

**Public fields and functions** are available both inside and outside of the `Employee()` constructor function.

**Private fields and functions** are available only inside the `Employee()` constructor function. Attempting to access private fields and properties outside of the constructor function will result in undefined error.

```js
var employee = new Employee("Tom", "Grover");

employee.publicGetFullName();       // Calling public function - "Tom Grover"
employee.privilegedGetFullName();   // Calling Privileged function - "Tom Grover"
employee.privateGetFullName();      // Calling private method - Uncaught TypeError
employee.privateFullName;           // Calling private field - undefined error
```

**Live Sample:** [57-member-calls.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/57-member-calls.html)

**Can we modify a private field outside of the constructor function?**
Straight answer, no you can't.

In the example below, when we call the private field `employee.privateFullName`, it results in `undefined` error. On the next line we are adding a new public field with same name as the private field to the employee object. Is this going to change the private field (privateFullName). The answer is NO. You cannot access or modify private fields outside of the object. In this example, you are just adding new public field (employee.privateFullName) to the employee object.

```js
var employee = new Employee("Tom", "Grover");
employee.privateFullName            // Calling private field - undefined error

employee.privateFullName = "ABC";   // Add a field with same name as private field
employee.publicGetFullName();       // "Tom Grover"
employee.privateFullName;           // "ABC"
```

### Summary

- **Private fields** - Declared using the `var` keyword inside the object, and can only be accessed by private functions and privileged methods.
- **Public fields** - Declared using `this` keyword and are available outside the object.
- **Private functions** - Declared inside the object using one of the two ways shown below. ***Private functions can only be called by privileged methods or other private functions.***

    ```js
    var privateGetFullName = function () {
        privateFullName = firstName + " " + lastName;
        return privateFullName;
    }

    // OR

    function privateGetFullName() {
        privateFullName = firstName + " " + lastName;
        return privateFullName;
    }
    ```

- **Privileged methods** - Declared using `this` keyword and are available both within and outside the object. ***Privileged methods can access private fields and private methods.***

    ```js
    this.privilegedGetFullName = function () {
        return privateGetFullName();
    }
    ```

- **Public methods** - Defined by using the object's prototype property and are available both within and outside the object. ***Public methods can call privileged methods but they cannot access private fields or call private methods.***

    ```js
    Employee.prototype.publicGetFullName = function () {
        return this.privilegedGetFullName();
    }
    ```