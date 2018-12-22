# Transition notes

This can apply to color, position, visibility.

`transition: <property> <duration>`

`transition: <property> <duration> <timing-function> <delay>`

Transition properties default to:

- property: all
- timing-function: ease
- delay: 0

Leave defaults out unless you need to change them.

`transition: all 0.4s ease 0;`

Should be:

`transition: 0.4s;`

Always include vendor prefixes before going in to production.

```css
.btn {
    -webkit-transition: background-color: .4s;
    -moz-transition: background-color: .4s;
    -ms-transition: background-color: .4s;
    -o-transition: background-color: .4s;
    transition: background-color: .4s;
}
```
            