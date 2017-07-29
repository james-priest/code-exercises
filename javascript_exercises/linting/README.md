# JSLint, JSHint & ESLint 

Installed, configured & tested each of these linters

## JSLint

* performed a global install
    * `npm install -g jslint@latest`
* used command line `jslint a.js`
* no config or rc file necessary

## JSHint

* installed globally
    * `npm install -g jshint@latest`
* created `.jshintrc` in `./src` directory
* configured using [docs](http://jshint.com/docs/options/) and this [reference](https://github.com/jshint/jshint/blob/master/examples/.jshintrc)
* run `eslint a.js`
* installed VSCode JSHint extension

## ESLint

* installed globally and as a dev dependency
    * `npm install -g eslint@latest`
    * `npm install eslint@latest --save-dev`
* created `.eslintrc.json` in script `./src` directory and a global config in my home directory
* run using `eslint a.js`
* installed VSCode ESLint extension