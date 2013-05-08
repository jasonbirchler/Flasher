(function($) {        
    $.fn.flasher = function( options ) {
        var defaults = {
                animation    : 'fadeIn', // animation used to show/hide the flash
                inDuration   : 1000, // how long the flash displays in miliseconds
                outDuration  : 1000, // how long the flash displays in miliseconds
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
                      '" style="display:none; position: absolute; z-index: 9999; top: 5%; left: 50%;"' +
                      /*
                          TODO apply layout instead of hard-coding left/right
                      */
                      ' />';
            var $flasher;
            
            if ( !$flasher ) {
                $('body').append( $el );
                $flasher = $('#flasher');
            };

            $flasher.text( o.message )
                    .removeClass()
                    .addClass( o.classNames );

            // show the flash message
            $flasher.fadeIn( o.inDuration );
            setTimeout( function() { $flasher.fadeOut(o.outDuration); }, o.msgDuration );
        });
    };
})(jQuery)