<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 53. JavaScript and object oriented programming

**JavaScript is object oriented programming language. The following are the 4 pillars of any object oriented programming language.** We will discuss examples of these in a later video session.

1. Inheritance
1. Encapsulation
1. Abstraction
1. Polymorphism

In this video let's focus on **creating objects in JavaScript**. Objects in JavaScript can be broadly classified into 2 categories.

1. Standard built-in objects
1. Custom objects

**Standard built-in objects:** So far in this video series, we have already seen many of the JavaScript standard built-in objects. Examples include `string`, `array`, `RegExp`, `Date`, etc. In the example below we are creating Date object using the Date constructor function and then using it's getFullYear() method to get the year.

```js
var currentDate = new Date();
document.write(currentDate.getFullYear());
```

**Custom objects:** In C#, to create a custom object, we create a Custom class and then create an instance of a class. In JavaScript we don't have classes. Instead we use functions. **In JavaScript there are two ways to create a custom object**.

1. **Constructor function**
1. **Literal notation**

### Creating an object in JavaScript using constructor function

```html
<script type="text/javascript">
    // Constructor function
    function Employee(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;

        this.getFullName = function ()
        {
            return this.firstName + " " + this.lastName;
        }
    }

    var employee = new Employee("Pragim", "Tech");

    document.write("FirstName = " + employee.firstName + "<br/>");
    document.write("LastName = " + employee.lastName + "<br/>");
    document.write("FullName = " + employee.getFullName() + "<br/>");
</script>
```

### Creating an object in JavaScript using literal notation

```html
<script type="text/javascript">
    // Object literal notation
    var employee =
    {
        firstName: "Pragim",
        lastName: "Tech",

        getFullName: function ()
        {
            return this.firstName + " " + this.lastName;
        }
    }

    document.write("FirstName = " + employee.firstName + "<br/>");
    document.write("LastName = " + employee.lastName + "<br/>");
    document.write("FullName = " + employee.getFullName() + "<br/>");
</script>
```

Both the examples above produce the same output

> FirstName = Pragim
> LastName = Tech
> FullName = Pragim Tech

What is the difference between creating an object using constructor function and literal notation.

1. In the constructor function the properties and their values separated using an equal-to sign(=) whereas in the literal version, they are separated using a colon `:`
1. In constructor function at the end of each property you can have a semi-colons `;` whereas in the literal version properties must be separated with a comma `,`
1. With literal notation you have already created an object, so to access firstName value you simply use `employee.firstName`. With the constructor function you have to first create an instance and then use the created instance and the property name separated by DOT as shown below.

    ```js
    var employee = new Employee("Pragim", "Tech");
    employee.firstName
    ```

This is a ==test== of highlighting.