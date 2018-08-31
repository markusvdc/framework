/* ---------------------------------------------------------------------------------------
*    Altura banner igual tela
* --------------------------------------------------------------------------------------*/
function alturaBanner() {
    // $('.banneraltura').height(Math.max($(window).height(), 500));
    $('.banneraltura').height(Math.max($(window).height(), 500) - $('.cabecalho').innerHeight());
}



/* ---------------------------------------------------------------------------------------
*    Ancora
* --------------------------------------------------------------------------------------*/
$('.ancora a').on('click', function(){
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
    *    Dispara altura banner
    * --------------------------------------------------------------------------------------*/
    alturaBanner();


    /* ---------------------------------------------------------------------------------------
    *    Input check estilizado
    * --------------------------------------------------------------------------------------*/
    $('.item-inputcheck').click(function(){
        $('input', this).prop('checked', !$('input', this)[0].checked);
        $(this).toggleClass('ativo');
    });



    /* ---------------------------------------------------------------------------------------
    *    Input radio estilizado
    * --------------------------------------------------------------------------------------*/
    $('.inputradio label').click(function(){
        $(this).closest('.inputradio').find('b').removeClass("ativo");
        $('b', this).toggleClass("ativo");
    });



    /* ---------------------------------------------------------------------------------------
    *    Select estilizado
    * --------------------------------------------------------------------------------------*/
    $("select").change(function(){
        $(this).closest('.select').removeClass('placeholder');
        $(this).parent().find('.texto-campo-select').html($('option:selected', this).text());
    });



    /* ---------------------------------------------------------------------------------------
    *    Máscara telefone
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
    *    Máscara CEP
    * --------------------------------------------------------------------------------------*/
    // $('.cepmask').mask('00000-000');



    /* ---------------------------------------------------------------------------------------
    *    Abas
    * --------------------------------------------------------------------------------------*/
    $('.abas .menu-abas > li').click(function(){
		var aba_id = $(this).attr('data-aba');

		$('.abas .menu-abas > li').removeClass('ativo');
		$(this).addClass('ativo');

        $('.abas .conteudo-abas > li').hide();
		$("#"+aba_id).fadeIn();
	})
});



/* ---------------------------------------------------------------------------------------
*    Loading inicial
* --------------------------------------------------------------------------------------*/
$(window).on('load', function() {
    /* ---------------------------------------------------------------------------------------
    *    Custom Scrollbar
    * --------------------------------------------------------------------------------------*/
    if ($('.rolagem').length) {
        $(".rolagem").mCustomScrollbar();
    };

    setTimeout(function(){
        $('.inicio, .logo-inicio, .icone-inicio').fadeOut();
        setTimeout(function(){
            $('body').removeClass('inicioaberto');
        }, 500);
    }, 500);
});



$(window).resize(function(){
    alturaBanner();
}).trigger('resize');
