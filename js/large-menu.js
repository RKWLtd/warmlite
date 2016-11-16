var targetOffset = $("#logo-anchor").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
        $('.navbar').css({"background-color":"#252525", "padding":"10px 0"});
        $('.navbar-brand').css({"display":"block"});
        $('.navbar-nav li:last-child a:last-child').css({"border":"none", "background-color":"#252525", "margin-left":"0", "font-size":"1em"});
    } else {
        $('.navbar').removeAttr( 'style' );
        $('.navbar-brand').removeAttr( 'style' );
        $('.navbar-nav li:last-child a:last-child').removeAttr( 'style' );
    }
});