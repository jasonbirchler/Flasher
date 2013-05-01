(function($) {        
    var methods = {
        init : function (options) {
            var defaults = {
                    event        : 'click', // event to listen for
                    animation    : 'fadeIn', // animation used to show/hide the flash
                    inDuration   : 2000, // how long the flash displays in miliseconds
                    outDuration  : 2000, // how long the flash displays in miliseconds
                    msgDuration  : 2000 // how long the flash displays in miliseconds
                },
            
                o = $.extend(defaults, options),

                //create a counter to use as id for multiple flashers
                flashCounter = 0;

            return this.each(function(index) {
                var $this     = $(this),
                    container = '<div class="flasher" id="flash-msg-' + flashCounter + '" style="display:none;"/>';
                
                $('body').append(container);
                
                $this.$el = $('#flash-msg-' + flashCounter);
                $this.$el.text(o.message);

                $this.on(o.event, function () {
                    // show the flash message
                    $this.$el.fadeIn(o.inDuration);
                    setTimeout(function() {$this.$el.fadeOut(o.outDuration);}, o.msgDuration);
                })
                flashCounter++;
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