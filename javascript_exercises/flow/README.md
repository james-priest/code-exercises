# Flow type checking tests

## From the Flow website

Flow ([https://flow.org/en/docs/getting-started/](https://flow.org/en/docs/getting-started/ "flow.org website")) is a static type checker for your JavaScript code. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale.

Flow checks your code for errors through static type annotations. These types allow you to tell Flow how you want your code to work, and Flow will make sure it does work that way.

## My tests

I created a.js and b.js to run type checking against. Followed this tutorial [https://mdcox.net/posts/static-checking-with-flow.html](https://mdcox.net/posts/static-checking-with-flow.html) to get my feet wet.

I also installed `flow-bin` and `flow-remove-types` as dev dependencies.

Lastly I installed VSCode Flow Language Support extension

These are the test scenarios used:

* added `.jshintrc` in `./src` directory to test JSHint
* added `.eslintrc.js` in `./src` directory with `"extends": "airbnb-base"` option configured to test AirBnB Style Guide recommendations
* added `.flowconfig` with `eslint-config-airbnb-base` and other dependency packages set-up in `package.json` in project root so that AirBnB could work with and extend ESLint

## Conclusion

Next step is to try TypeScript and Babel to see how they compare.