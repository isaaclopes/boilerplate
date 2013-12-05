jQuery.noConflict();
;
(function($) {
    'use strict';
    
    var body = $("body, html");
    var top = body.scrollTop() // Get position of the body
    if(top!=0)
    {
        body.animate({
            scrollTop :0
        }, '500',function(){
            //DO SOMETHING AFTER SCROLL ANIMATION COMPLETED
            alert('Hello');
        });
    }
    
    
    
    
    jQuery(window).scroll(function() {
        var tela = jQuery(document).width();
        if (jQuery(window).scrollTop() > 500 && tela > 1250) {
            var $scrollprice=jQuery('.product-shop > .price-box'),$scrollbutton=jQuery('.product-shop').find('.input-group-btn');
            jQuery('.scrollprice').html($scrollprice.html());
            jQuery('.scrollbutton').html($scrollbutton.html());
            jQuery('.pricescroll').show();
            // > 100px from top - show div
        }
        else {
            jQuery('.pricescroll').hide();
            // <= 100px from top - hide div
        }
    });
    
    
    jQuery(document).ready(function($) {

    });

})(jQuery);
