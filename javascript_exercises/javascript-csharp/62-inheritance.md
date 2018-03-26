<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 62. Inheritance in JavaScript
In this lesson we will discuss **Inheritance in JavaScript** with an example.

Object oriented programming languages support inheritance. Since JavaScript is also an object oriented programming language, it supports inheritance.

In object-oriented programming, languages like C# and Java implement inheritance when a *class* inherits from another *class*.

In JavaScript, we don't have a traditional class inheritance model. Instead, **JavaScript inheritance is prototype-based**. This means that to implement inheritance in JavaScript, an *object* inherits from another *object*. Let us understand this with an example.

```html
<script type="text/javascript">
    // Employee will be the base object (Similar to base class in c#)
    var Employee = function (name) {
        this.name = name;
    };

    // getName() function is added to the base object (Employee)
    Employee.prototype.getName = function () {
        return this.name;
    };

    // PermanentEmployee will be the derived object
    var PermanentEmployee = function (annualSalary) {
        this.annualSalary = annualSalary;
    };

    // Use prototype to associate Employee as the base object for PermanentEmployee
    PermanentEmployee.prototype = new Employee("Mark");

    var pe = new PermanentEmployee(50000);
    // Derived object (permanentEmployee) can see the
    // base object (Employee) getName() method
    document.write(pe.getName());

    alert(pe instanceof Employee);          // Returns true
    alert(pe instanceof PermanentEmployee); // Returns true
</script>
```

Notice that the derived object (PermanentEmployee) can see the base object (Employee) `getName()` method. When `getName()` method is called, JavaScript first tries to find this method in the derived object. If it can't find the method there, it goes up the chain to the parent object and finds it there.

If you add a new method to the parent object, it becomes available in the derived object.

```html
<script type="text/javascript">
    var Employee = function (name) {
        this.name = name;
    };

    Employee.prototype.getName = function () {
        return this.name;
    };

    // Adding getNameLength() method to the parent object
    // which becomes available in the derived object
    Employee.prototype.getNameLength = function () {
        return this.name.length + " characters";
    };

    // PermanentEmployee will be the derived object
    var PermanentEmployee = function (annualSalary) {
        this.annualSalary = annualSalary;
    }

    PermanentEmployee.prototype = new Employee("Mark");

    var pe = new PermanentEmployee(50000);
    // Call getNameLength() method added to the parent object
    document.write(pe.getNameLength()); // Output : 4 characters
</script>
```

Use `hasOwnProperty()` method to determine if a property is defined on the actual object or it's prototype. Here is an example.

```html
<script type="text/javascript">
    var Employee = function (name) {
        this.name = name;
    };

    var PermanentEmployee = function (annualSalary) {
        this.annualSalary = annualSalary;
    };

    var employee = new Employee("Mark");

    PermanentEmployee.prototype = employee;

    var pe = new PermanentEmployee(50000);

    document.write("Employee.name: " +
                     employee.hasOwnProperty('name') + "<br/>");
    document.write("Employee.annualSalary: " +
                     employee.hasOwnProperty('annualSalary') + "<br/><br/>");

    document.write("PermanentEmployee.name: " +
                     pe.hasOwnProperty('name') + "<br/>");
    document.write("PermanentEmployee.annualSalary: " +
                     pe.hasOwnProperty('annualSalary') + "<br/>");
</script>
```

```text
Output :
Employee.name: true
Employee.annualSalary: false

PermanentEmployee.name: false
PermanentEmployee.annualSalary: true
```