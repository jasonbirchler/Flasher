jQuery.fn.Flasher = function (msg, options) {
  return this.each(function(index) {
    var defaults = {
      
    };
    var o;
    
    options ? o = jQuery.extend(defaults, options) : o = defaults;

    jQuery(this).on(options.event, function () {
      // body...
    })
  });
}