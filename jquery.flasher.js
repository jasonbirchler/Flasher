(function($) {        
    $.fn.flasher = function( options ) {
        var defaults = {
                classNames : 'flasher',
                animation    : 'fadeIn', // animation used to show/hide the flash
                inDuration   : 2000, // how long the flash displays in miliseconds
                outDuration  : 2000, // how long the flash displays in miliseconds
                msgDuration  : 2000, // how long the flash displays in miliseconds
                layout       : 'top'
            },
    
            o = $.extend( defaults, options );
            
        switch (o.layout) {
          case "top":
            /*
                TODO calculate top position
            */
            break;
          case "bottom":
          /*
              TODO calculate bottom position
          */
            break;
          case "center":
          /*
              TODO calculate center position
          */
            break;
        }
            
        return this.each( function( index ) {
            var $el = '<div id="flasher" class="' +
                      o.classNames +
                      '" style="display:none; position: absolute; z-index: 9999; top: 5%; left: 50%;">' +
                      /*
                          TODO apply layout instead of hard-coding left/right
                      */
                      o.message +
                      '</div';
            var $flasher;

            $('body').append( $el );
            $flasher = $('#flasher');

            // show the flash message
            $flasher.fadeIn( o.inDuration );
            setTimeout( function() { $flasher.fadeOut(o.outDuration); }, o.msgDuration );
            
            /*
                TODO destroy the DOM element
            */
        });
    };
})(jQuery)