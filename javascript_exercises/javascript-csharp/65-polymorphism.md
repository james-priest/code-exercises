<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 65. Polymorphism in JavaScript
In this lesson we will discuss, **how to implement polymorphism in JavaScript** with an example.

Object oriented programming languages like C# and Java, support polymorphism. Here is a C# example.

```csharp
public partial class WebForm1 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Shape[] shapes = new Shape[]
        {
            new Shape(), new Circle(), new Square(), new Triangle()
        };

        foreach (Shape shape in shapes)
        {
            Response.Write(shape.draw() + "<br/>");
        }
    }
}

public class Shape
{
    public virtual string draw()
    {
        return "I am a generic shape";
    }
}

public class Circle : Shape
{
    public override string draw()
    {
        return "I am a circle";
    }
}

public class Square : Shape
{
    public override string draw()
    {
        return "I am a square";
    }
}

public class Triangle : Shape
{ }
```

**Output**

```text
I am a generic shape
I am a circle
I am a square
I am a generic shape 
```

Since JavaScript is also an object oriented programming language, it also supports the concept of polymorphism. Here is an example.

```html
<script type="text/javascript">
    // Shape object is be the base object
    var Shape = function () { };

    // Add draw function to the Shape prototype
    // Objects derived from Shape will be able to override the draw() method
    Shape.prototype.draw = function () {
        return "I am a generic shape";
    };

    // Create a Circle object
    var Circle = function () { }

    // Make shape the parent for Circle
    Circle.prototype = Object.create(Shape.prototype);

    // Circle object overrides draw() method
    Circle.prototype.draw = function () {
        return "I am a circle";
    };

    var Square = function () { };
    Square.prototype = Object.create(Shape.prototype);
    Square.prototype.draw = function () {
        return "I am a square";
    };

    var Triangle = function () { };
    Triangle.prototype = Object.create(Shape.prototype);

    var shapes = [new Shape(), new Circle(), new Square(), new Triangle()];

    shapes.forEach(function (shape) {
        document.write(shape.draw() + "<br/>");
    });
</script>
```

**Live Sample:** [65-polymorphism.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/65-polymorphism.html)

**Output**

```text
I am a generic shape
I am a circle
I am a square
I am a generic shape
```