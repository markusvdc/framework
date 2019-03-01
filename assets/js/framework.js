/* ---------------------------------------------------------------------------------------
*    Banner screen height
* --------------------------------------------------------------------------------------*/
function bannerHeight() {
    // $('.bannerheight').height(Math.max($(window).height(), 500));
    $('.bannerheight').height(Math.max($(window).height(), 500) - $('.header').innerHeight());
}



/* ---------------------------------------------------------------------------------------
*    Anchor links
* --------------------------------------------------------------------------------------*/
$('.anchor a').on('click', function(){
    var href = $.attr(this, 'href');
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});



$(document).ready(function(){
    /* ---------------------------------------------------------------------------------------
    *    Triggers
    * --------------------------------------------------------------------------------------*/
    bannerHeight();


    /* ---------------------------------------------------------------------------------------
    *    Stylized input check
    * --------------------------------------------------------------------------------------*/
    $('.item-inputcheck').click(function(){
        $('input', this).prop('checked', !$('input', this)[0].checked);
        $(this).toggleClass('active');
    });



    /* ---------------------------------------------------------------------------------------
    *    Stylized input radio
    * --------------------------------------------------------------------------------------*/
    $('.inputradio label').click(function(){
        $(this).closest('.inputradio').find('b').removeClass("active");
        $('b', this).toggleClass("active");
    });



    /* ---------------------------------------------------------------------------------------
    *    Stylized select
    * --------------------------------------------------------------------------------------*/
    $("select").change(function(){
        $(this).closest('.select').removeClass('placeholder');
        $(this).parent().find('.texto-campo-select').html($('option:selected', this).text());
    });



    /* ---------------------------------------------------------------------------------------
    *    Phone mask
    * --------------------------------------------------------------------------------------*/
    // SPMaskBehavior = function (val) {
    //     return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    // },
    // spOptions = {
    //     onKeyPress: function(val, e, field, options) {
    //         field.mask(SPMaskBehavior.apply({}, arguments), options);
    //     },
    //     clearIfNotMatch: true
    // };
    // $('.spmask').mask(SPMaskBehavior, spOptions);



    /* ---------------------------------------------------------------------------------------
    *    ZIP mask
    * --------------------------------------------------------------------------------------*/
    // $('.zipmask').mask('00000-000');



    /* ---------------------------------------------------------------------------------------
    *    Tabs
    * --------------------------------------------------------------------------------------*/
    $('.tabs .menu-tabs .item-menu-tabs').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs .menu-tabs .item-menu-tabs').removeClass('active');
		$(this).addClass('active');

        $('.tabs .content-tabs .item-content-tabs').hide();
		$("#"+tab_id).fadeIn();
	})
});



/* ---------------------------------------------------------------------------------------
*    First loading
* --------------------------------------------------------------------------------------*/
$(window).on('load', function() {
    /* ---------------------------------------------------------------------------------------
    *    Custom Scrollbar
    * --------------------------------------------------------------------------------------*/
    if ($('.scroll').length) {
        $(".scroll").mCustomScrollbar();
    };

    setTimeout(function(){
        $('.first, .logo-first, .icon-first').fadeOut();
        setTimeout(function(){
            $('body').removeClass('firstopen');
        }, 500);
    }, 500);
});



$(window).resize(function(){
    bannerHeight();
}).trigger('resize');
