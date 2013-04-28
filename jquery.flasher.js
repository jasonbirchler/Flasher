(function($) {
    jQuery.fn.flasher = function (msg, options) {
        var defaults = {
            message   : msg, // because a message is required
                             // it's not passed as an option
            event     : 'click', // event to listen for
            $el       : '<div class="flasher"/>',
            animation : '', // animation used to show/hide the flash
            duration  : 1000 // how long the flash displays in miliseconds
        };
        var o = $.extend(defaults, options);

        return this.each(function(index) {
            var e = $(this);

            // insert the message into $el

            e.on(o.event, function () {
                console.log(o.message);
                // show the flash message
            })

            // show method

            //destroy method
        });
    }
})(jQuery)