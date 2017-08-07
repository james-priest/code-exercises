# JSLint, JSHint, & ESLint

Installed, configured, & tested each of these linters. Followed blog post [JS Static Analysis Part 2 - Linting with JSLint, JSHint, & ESLint](https://mdcox.net/posts/static-checking-jslint-jshint-eslint.html "By Michael Cox") by Michael Cox

## JSLint

This is the granddaddy of them all and was originally written by Douglas Crockford in 2002 with the latest stable version released in 2011. It offers no config and is highly opinionated as to what "The Good Parts" are. See [JavaScript: The Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf "Book in pdf"). Still, this is the staple linter to use if you are just starting out and want to see where it all began. Simple install. No configuration needed.

* performed a global install
  * `npm install -g jslint@latest`
* run
  * `jslint a.js`
* no config or rc file necessary
* JSLint test playground ([http://www.jslint.com/](http://www.jslint.com/))

## JSHint

This linter came about in 2010 and originated from JSLint. It was originally maintained by Crawford who then handed it over to Anton Kovalyov, followed by Mike Sherov. It offers the ability to configure the error checks by turning them on or off.

* installed globally
  * `npm install -g jshint@latest`
* created `.jshintrc` in my home directory & `./src` directory
  * configured using [docs](http://jshint.com/docs/options/) and this [reference](https://github.com/jshint/jshint/blob/master/examples/.jshintrc)
* run
  * `jshint a.js`
* installed VSCode JSHint extension
* [http://jshint.com](http://jshint.com) has a configurable code test playground on the homepage

## ESLint

This is the third linter in the series and was developed in 2013 by Nicholas C. Zakas. It is the most popular and widely used linter and also the most configurable. It allows developers to create their own linting rules and allows three levels of severity for any violation - ERROR, WARN, and INFO

* installed globally and as a dev dependency
  * `npm install -g eslint@latest`
  * `npm install -g eslint-plugin-html`
  * `npm install eslint@latest --save-dev`
* created `.eslintrc.json` in `./javascript_exercises/flow/src` & `./javascript_exercises/linting` directory and a global config in my home directory
  * `eslint --init`
* run
  * `eslint a.js`
* installed VSCode ESLint extension
* Test Playground: [http://eslint.org/demo/](http://eslint.org/demo/)