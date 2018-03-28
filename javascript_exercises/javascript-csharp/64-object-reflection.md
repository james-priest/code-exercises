<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 64. Object reflection in JavaScript
In this lesson we will discuss, **object reflection in JavaScript** with an example.

Object oriented programming languages like C# and Java, support reflection. **Reflection allows us to inspect meta data of assemblies, modules and types.** Since JavaScript is also an object oriented programming language, it also supports the concept of reflection.

Let's understand object reflection in JavaScript with an example.

The `Employee` object in the following example has **4 public properties**.

1. `firstName`
2. `lastName`
3. `email`
4. `gender`

It also has **3 public functions**.

1. `getFullName()`
2. `getEmail()`
3. `getGender()`

```js
var Employee = function (firstName, lastName, gender, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
}

Employee.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

Employee.prototype.getEmail = function () {
    return this.email;
}

Employee.prototype.getGender = function () {
    return this.gender;
}
```

### Sample 1
The following code creates an object instance and then retrieves all the **public properties and methods of the `employee1` object**.

**Code 1**

```js
var employee1 = new Employee("Mark", "Matt", "Male", "a@a.com");

for (var property in employee1) {
    document.write(property + "<br/>");
}
```

**Output 1**

```text
firstName
lastName
gender
email
getFullName
getEmail
getGender
```

**Live Sample:** [64-object-reflection1.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/64-object-reflection1.html)

### Sample 2

The following code retrieves all the **public properties & functions of the Employee object along with their values**.
 
**Code 2**

```js
for (var property in employee) {
    document.write(property + " : " + employee[property] + "<br/>");
}
```

**Output 2**

```text
firstName: Mark
lastName: Matt
gender: Male
email: a@a.com
getFullName: function () { return this.firstName + " " + this.lastName; }
getEmail: function () { return this.email; }
getGender: function () { return this.gender; }
```

**Live Sample:** [64-object-reflection2.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/64-object-reflection2.html)

### Sample 3

The following code retrieves only the public properties of the Employee object.

**Code 3**

```js
for (var property in employee) {
    if (typeof employee[property] != "function") {
        document.write(property + " : " + employee[property] + "<br/>");
    }
}
```

**Output 3**

```js
firstName : Mark
lastName : Matt
gender : Male
email : a@a.com
```

**Live Sample:** [64-object-reflection3.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/64-object-reflection3.html)

### Sample 4

The following code retrieves only the public functions of the Employee object. 

**Code 4**

```js
for (var property in employee) {
    if (typeof employee[property] == "function") {
        document.write(property + " : " + employee[property] + "<br/>");
    }
}
```

**Output 4**

```text
getFullName : function () { return this.firstName + " " + this.lastName; }
getEmail : function () { return this.email; }
getGender : function () { return this.gender; }
```

**Live Sample:** [64-object-reflection4.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/64-object-reflection4.html)

### Sample 5

When 2 objects are related thru inheritance, the child object will have access to parent object methods and properties. In this example, `PermanentEmployee` is a child of `Employee`. The following code shows all the properties and methods of the `PermanentEmployee` object including those it inherited from the Employee object.

**Code 5**

```js
var employee = new Employee("Mark", "Matt", "Male", "a@a.com"); 

var PermanentEmployee = function (annualSalry) {
    this.annualSalary = annualSalry;
};

PermanentEmployee.prototype = employee;

var pe = new PermanentEmployee(50000);

for (var property in pe) {
    document.write(property + " : " + pe[property] + "<br/>");
}
```

**Output 5**

```text
annualSalary : 50000
firstName : Mark
lastName : Matt
gender : Male
email : a@a.com
getFullName : function () { return this.firstName + " " + this.lastName; }
getEmail : function () { return this.email; }
getGender : function () { return this.gender; }
```

**Live Sample:** [64-object-reflection5.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/64-object-reflection5.html)

### Sample 6

In this example, we are using `hasOwnProperty()` method to determine if a property is defined on the actual object or it's prototype. This method returns `true` if the property is defined by the object itself, otherwise `false`.

The following code retrieves only the public members that are defined in the `PermanentEmployee` object. The members inherited from the base `Employee` object are excluded.

**Code 6**

```js
for (var property in pe) {
    if (pe.hasOwnProperty(property)) {
        document.write(property + " : " + pe[property] + "<br/>");
    }
}
```

**Output 6**

```text
annualSalary : 50000
```

**Live Sample:** [64-object-reflection6.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/64-object-reflection6.html)

### Sample 7

The following code retrieves only the public members inherited from the parent object. Public members defined in PermanentEmployee object are excluded.

**Code 7**

```js
for (var property in pe) {
    if (!pe.hasOwnProperty(property)) {
        document.write(property + " : " + pe[property] + "<br/>");
    }
}
```

**Output 7**

```text
firstName : Mark
lastName : Matt
gender : Male
email : a@a.com
getFullName : function () { return this.firstName + " " + this.lastName; }
getEmail : function () { return this.email; }
getGender : function () { return this.gender; }
```

**Live Sample:** [64-object-reflection7.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/64-object-reflection7.html)
