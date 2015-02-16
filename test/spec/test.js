/* global describe, it */
require.config({
    paths: {
        sudoku: '../../app/scripts/sudoku',
        jquery: '../../bower_components/jquery/dist/jquery'
    }
});


define(function(require) {
    var Sudoku = require('sudoku');
    var game = Sudoku.getInstance();

    'use strict';
    describe('Sudoku Unit Tests', function () {
      it('should be an object', function() {
          expect(game).to.be.a('object');
      });

      it('should have public method getGameBoard', function() {
          game.should.have.property('getGameBoard');
      });

      it('should have public method reset', function() {
          game.should.have.property('reset');
      });

      it('should have public method solve', function() {
          game.should.have.property('solve');
      });

      it('should have public method validate', function() {
          game.should.have.property('validate');
      });


    });

    mocha.run();
 
});