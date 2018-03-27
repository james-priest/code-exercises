<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 63. Abstract classes in JavaScript
In this lesson we will discuss, **how to implement the concept of abstract classes in JavaScript**.

Object oriented programming languages like C# and Java, support **abstract classes**. Abstract classes are incomplete in and of themselves. So, trying to create an instance of an abstract class raises a compiler error. Abstract classes can only be used as base classes.

Let us first look at a simple C# example.

1. Open visual studio and create a new empty asp.net web application project.

2. Add a web form to the project. Name it WebForm1.aspx. Copy and past the following code in the code-behind file.

```csharp
using System;
namespace Demo
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Error: Cannot create an instance of an abstract class
            // Shape s = new Shape();

            Circle circle = new Circle();
            circle.shapeName = "Circle";
            Response.Write(circle.draw() + "<br/><br/>");

            Response.Write(circle is Shape + "<br/>");  // Returns true
            Response.Write(circle is Circle + "<br/>"); // Returns true
        }
    }

    public abstract class Shape
    {
        public string shapeName = "None";
        public string draw()
        {
            return "Drawing " + this.shapeName;
        }
    }

    public class Circle : Shape
    {
        // Code specific to Circle class
    }
}
```

Since JavaScript is also an object oriented programming language, it also supports the concept of abstract classes. Here is an example.

Add a new HTML page to the project. Name it HTMLPage1.htm. Copy and paste the following code in HTMLPage1.htm. 

```html
<script type="text/javascript">
    // Create a Shape object which is abstract
    var Shape = function () {
        this.shapeName = "None";
        throw new Error("Cannot create an instance of abstract class");
    };

    // Error : Cannot create an instance of abstract class
    // var shape = new Shape();

    // Add draw function to the Shape prototype
    // Objects derived from Shape should be able to call draw() method
    Shape.prototype.draw = function () {
        return "Drawing " + this.shapeName;
    };

    // Create a Circle object
    var Circle = function (shapeName) {
        this.shapeName = shapeName;
    };

    // Make shape the parent for Circle
    // Object.create() allows to create an object without using constructor
    Circle.prototype = Object.create(Shape.prototype);

    var circle = new Circle("Circle");
    // Since Circle inherits from abstract Shape object, it can call draw() method
    document.write(circle.draw());

    alert(circle instanceof Circle); // Returns true
    alert(circle instanceof Shape);  // Returns true
</script>
```