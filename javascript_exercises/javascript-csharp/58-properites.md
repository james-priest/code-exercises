<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 58. Properties in JavaScript
In an object oriented programming language, classes can have properties. For example a class in C# can have the following types of properties.

1. Read / Write properties
1. Read only properties
1. Write only properties

An example of a C# `Employee` class is shown below. `name` is read-only property and `age` is read/write property.

```csharp
// CSharp
public class Employee
{
    string _name;
    int _age;

    public Employee(string name, int age) {
        _name = name;
        _age = age;
    }

    // Read/Write property
    public int age {
        get { return _age; }
        set { _age = value; }
    }

    // ReadOnly property
    public string name {
        get { return _name; }
    }
}
```

Since JavaScript is also an object oriented programming language, objects in JavaScript can also have properties.

**Why do we need properties when we have public fields**
Encapsulation is one of the pillars of object oriented programming language. Properties provide encapsulation. If you use public fields you cannot control on what is assigned and returned from that public field.

In the example below we have an employee object with age public field. There is nothing stopping us from setting the age value of the employee object to 1000. Using properties you can control on what values can be assigned. You can also use properties to create just read-only or write-only properties.

```js
function Employee(age) {
    this.age = age;
}

var employee = new Employee(50);
// Nothing stops you from assigning a value of 1000 to age field
employee.age = 1000;
```

An example is shown below. In the example **name is read-only property** and **age is read/write property**.

```js
function Employee(name, age) {
    var _name = name;
    var _age = age;

    Object.defineProperty(this, 'age', {
        get: function () {
            return _age;
        },
        set: function (value) {
            if (value > 100 || value < 1) {
                alert("Invalid age");
            } else {
                _age = value;
            }
        }
    });

    Object.defineProperty(this, "name", {
        get: function () {
            return _name;
        }
    });
}

var employee = new Employee("Tom", 55);

employee.name = "Tommy";    // value of name property will not change (read-only)
employee.age = 195;         // Will alert an error - Invalid age

document.write(employee.name + " " + employee.age); // "Tom 55"
```