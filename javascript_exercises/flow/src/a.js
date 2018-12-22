// @flow
/**
 * Testing Flow
 * Blog Post: https://mdcox.net/posts/static-checking-with-flow.html
 */

function square(n: number): number {
    return n * n;
}

square("2"); // Error!