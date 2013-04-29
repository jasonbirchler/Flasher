(function($) {        
    var methods = {
        init : function (options) {
            var defaults = {
                event     : 'click', // event to listen for
                $el       : '<div class="flasher"/>',
                animation : '', // animation used to show/hide the flash
                duration  : 1000 // how long the flash displays in miliseconds
            };
            var o = $.extend(defaults, options);

            return this.each(function(index) {
                var $this = $(this);

                // insert the message into $el

                $this.on(o.event, function () {
                    console.log(o.message);
                    // show the flash message
                })
            });
        },
        
        show : function (args) {
            return this.each(function(index) {
                console.log("show me!" + o.message);
            });
        },
        
        destroy : function (args) {
            return this.each(function(index) {
                console.log("destroyed!");
            });
        }
    };

    $.fn.flasher = function( method ) {

        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }    

    };
})(jQuery)