// @flow
/**
 * Testing Flow
 * Blog Post: https://mdcox.net/posts/static-checking-with-flow.html
 */

function square(n) {
    return n * n; // Error!
}

square("2");