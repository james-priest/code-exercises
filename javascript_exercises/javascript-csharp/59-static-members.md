<!-- markdownlint-disable MD022 MD033 -->
# JavaScript Tutorial

## 59. Static Members in JavaScript
In an object oriented programming language, classes can have **static members**, that is **static methods** and **static fields**. For example a class in C# is shown below. In this example PI is a static field and _radius is an instance field.

```csharp
public class Circle
{
    // Static field
    static float PI = 3.141F;

    // Instance field
    public int Radius;

    public Circle(int radius)
    {
        this.Radius = radius;
    }

    public float CalculateArea()
    {
        return Circle.PI * this.Radius * this.Radius;
    }
}
```

What is the difference between **static member** and **instance member** and when to use one over the other?

An instance member belong to a specific instance. So if I create 3 instances (objects) there will be 3 copies of instance fields in memory where as there will ever be only one copy of a static field no matter how many instances we create.

In the above example, radius is specific to the circle instance you are creating but the PI value need to be shared by all the circle objects. So, if you want a member to be shared by all instances then make it a static member.

Since JavaScript is also an object oriented programming language, objects in JavaScript can also have static and instance fields and methods. Here is an example. In this example PI is a static field and _radius is an instance field.

```js
function Circle(radius) {
    // Instance field
    this.Radius = radius;

    // Static field
    Circle.PI = 3.141;

    this.CalculateArea = function() {
        return Circle.PI * this.Radius * this.Radius;
    };
}

var circleObject = new Circle(10);
document.write('Area = ' + circleObject.CalculateArea());
```

**Live Sample:** [59-static-field.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/59-static-field.html)

### Points to remember

1. Define a static member using the name of the constructor function.
2. To invoke a static member use the name of the constructor function.
3. To invoke an instance member use the instance of the constructor function.

### Static methods in JavaScript
In the following example `ShowCount()` is a static method. Notice that, just like a static variable, static method is also defined using the name of the constructor function. To keep track of the number of Shape objects created we are using `Shape.Count` static field.

`Shape.ShowCount()` method returns the count of shapes when called.

```js
function Shape(shapeName) {
    // Instance field
    this.ShapeName = shapeName;

    // Static field
    Shape.Count = ++Shape.Count || 1;

    // Static method
    Shape.ShowCount = function() {
        return Shape.Count;
    };
}

var shape1 = new Shape('Circle');
var shape2 = new Shape('Rectangle');
var shape3 = new Shape('Triangle');

document.write('Shape.Count = ' + Shape.ShowCount());
```

**Live Sample:** [59-static-method.html](https://james-priest.github.io/code-exercises/javascript_exercises/javascript-csharp/public/59-static-method.html)

Since we have created 3 shapes, the output will be 3.