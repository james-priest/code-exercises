<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 61. Overriding JavaScript Functions
In this lesson we will discuss **how to override a JavaScript function**. This is continuation to Part 60. Please review Part 60 from JavaScript tutorial before proceeding.

In Part 60, we discussed that one of the advantages of using prototype property to add functions is that it enables us to **override an existing function** if required. Let us continue with the same example we worked with in Part 60.

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
Output :
e1.name = Mark
e2.name = Sara
```

Let us say for some reason we want to override `getName()` function of Employee object. Notice that in `GetEmployeeDetails()` function we have overridden `getName()` function of the Employee object. The overridden version converts the name of the employee to UPPERCASE.

```html
<script type="text/javascript">
    GetEmployeeDetails();

    function GetEmployeeDetails() {
        Employee.prototype.getName = function () {
            return this.name.toUpperCase();
        }

        var e1 = new Employee("Mark");
        var e2 = new Employee("Sara");

        document.write("e1.name = " + e1.getName() + "<br/>");
        document.write("e2.name = " + e2.getName() + "<br/>");
    }

    function Employee(name) {
        this.name = name;
    }

    Employee.prototype.getName = function () {
        return this.name;
    }
</script>
```

```text
Output :
e1.name = MARK
e2.name = SARA
```

In this example, all the JavaScript is in the same file. i.e

1. The JavaScript that creates Employee constructor function and `getName()` function
2. The script that overrides `getName()` function

The JavaScript that creates Employee constructor function and `getName()` function could even be present in a separate JavaScript file.

1. Lets add a new JavaScript file and name it **EmployeeScript.js**.
2. Copy and paste the following JavaScript code in EmployeeScript.js file.

    ```js
    function Employee(name) {
        this.name = name;
    }

    Employee.prototype.getName = function () {
        return this.name;
    };
    ```

3. Modify the code on the HTML page as shown below.

    ```html
    <html>
        <head></head>
        <body>
            <script src="employee.js"></script>
            <script>
                GetEmployeeDetails();

                function GetEmployeeDetails() {
                    Employee.prototype.getName = function () {
                        return this.name.toUpperCase();
                    };

                    var e1 = new Employee("Mark");
                    var e2 = new Employee("Sara");

                    document.write("e1.name = " + e1.getName() + "<br/>");
                    document.write("e2.name = " + e2.getName() + "<br/>");
                }
            </script>
        </body>
    </html>
    ```

Run the page and the output should be exactly the same as the previous example.

JavaScript built-in methods can also be overridden. The following example overrides the built-in JavaScript `alert()` function.

```html
<script type="text/javascript">
    // Overriding JavaScript alert function to write to the page
    // instead of displaying the alert dialog box
    var alert = function (msg) {
        document.write(msg);
    };

    // The following calls will invoke the overridden alert() method   
    alert("Hello");
    window.alert(" JavaScript");
</script>
```

```text
Output : Hello JavaScript
```