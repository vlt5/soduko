# Soduko
Soduko game written using javascript. See the [demo](http://vlt5.github.io/sudoku/index.html) here.

#### Summary
1. Use [Singleton](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) design pattern
2. Use [yeoman](http://yeoman.io/) to generate basic template for project. ([gulp-webapp](https://github.com/yeoman/generator-gulp-webapp))
3. Use [requirejs](http://requirejs.org/) to load modules
4. Use [sass](http://sass-lang.com/) as CSS pre-processor
5. Use [mocha](http://mochajs.org/) for unit testing. (Along with [chai](http://chaijs.com/))


#### Setup
1. `git clone https://github.com/vlt5/sudoku.git`
2. `cd sudoku`
3. `npm install`
4. `bower install`
5. `gulp serve`


#### Todo
There are some things sitting in my mind, will try to implement once I have additional time.  
1. CSS animation
2. Write a React version of this game
3. Try `webpack` for bunding
4. Write a `make` file to do all the setup in one command


##### Reference
[Designing a JavaScript Sudoku Puzzle: An Adventure in Algorithms](http://moriel.smarterthanthat.com/tips/javascript-sudoku-backtracking-algorithm/) for the algorithm.