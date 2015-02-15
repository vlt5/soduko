'use strict';
var bower = '../../bower_components/';

requirejs.config({
    paths: {
        jquery: bower + 'jquery/dist/jquery'
    }
});

require(['jquery', 'sudoku'], function($, Sudoku){
    $( document ).ready( function() {
        var game = Sudoku.getInstance();
        $( '#container').append( game.getGameBoard() );

        $( '#solve').click( function() {
            game.solve();
        } );
        $( '#validate').click( function() {
            game.validate();
        } );
        $( '#reset').click( function() {
            game.reset();
        } );
    } );
});

