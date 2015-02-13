var Sudoku = (function($) {
    var _instance,
        _ game,
        defaultConfig = {};

    function init(config) {
        var conf = $.extend({}, defaultConfig, config);
        _game = new Game(conf);
        
        return {
            // public methods
        }
    }

    function Game(config) {

    }

    Game.prototype = {
        /** game logic **/
    }


    return {
        // get singleton instance
        getInstance: function(config) {
            if (!_instance) {
                _instance = init(config);
            }
            return _instance;
        }
    }
})(jQuery);