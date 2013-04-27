jQuery.fn.flasher = function (msg, options) {
  return this.each(function(index) {
    var defaults = {
        message: msg,
        event  : 'click',
        el     : '<div class="flasher"/>'
    };
    var o = jQuery.extend(defaults, options);

    jQuery(this).on(o.event, function () {
      console.log(o.message);
    })
  });
}