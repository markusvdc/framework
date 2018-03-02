// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

var navegadorClasses = '';
if (isChrome){
    navegadorClasses += 'simChrome naoEdge naoFirefox naoIE naoOpera naoSafari';
} else if(isEdge){
    navegadorClasses += 'simEdge naoChrome naoFirefox naoIE naoOpera naoSafari';
} else if(isFirefox){
    navegadorClasses += 'simFirefox naoChrome naoEdge naoIE naoOpera naoSafari';
} else if(isIE){
    navegadorClasses += 'simIE naoChrome naoEdge naoFirefox naoOpera naoSafari';
} else if(isOpera){
    navegadorClasses += 'simOpera naoChrome naoEdge naoFirefox naoIE naoSafari';
} else if(isSafari){
    navegadorClasses += 'simSafari naoChrome naoEdge naoFirefox naoIE naoOpera';
}

/* ---------------------------------------------------------------------------------------
*    Altura banner igual tela
* --------------------------------------------------------------------------------------*/
function alturaBanner() {
    // $('.banneraltura').height(Math.max($(window).height(), 500));
    $('.banneraltura').height(Math.max($(window).height(), 500) - $('.cabecalho').innerHeight());
}



/* ---------------------------------------------------------------------------------------
*    Mascara
* --------------------------------------------------------------------------------------*/
//Abrir
function abreMascara() {
    $('body').addClass('mascaraaberta');
    $('.mascara').stop(false, false).fadeIn();
    $('#modal').stop(false, false).fadeIn();
    setTimeout(function(){
        centralizar();
    });
}
//Fechar
function fechaMascara() {
    $('.mascara').fadeOut();
    $('body').removeClass('mascaraaberta');
    $('#modal').css('padding-top', 0);
}



/* ---------------------------------------------------------------------------------------
*    Centralizar modal
* --------------------------------------------------------------------------------------*/
function centralizar(){
    var tamanhoTela = $(window).height();
    var tamanhoModal = $('#modal .centraliza-modal').outerHeight();
    var contraCentralizar = (tamanhoTela - tamanhoModal)/2
    if (tamanhoTela > tamanhoModal) {
        $('#modal').css("padding-top", contraCentralizar);
    }else {
        $('#modal').css("padding-top", 0);
    }
    // console.log(tamanhoTela);
    // console.log(tamanhoModal);
}

function fechaMmodal() {
    $('#mmenu, #mmodal').toggleClass('ativo');
}

$('#mmodal .ancora a').on('click', function(){
    fechaMmodal();
});

$('#mmenu').on('click', function(){
    fechaMmodal();
});

/* ---------------------------------------------------------------------------------------
*    Modal: Recursos comuns
* --------------------------------------------------------------------------------------*/
//Fechar
function fechaModal() {
    $('#modal, #modal .wrap-modal').hide();
    $('#modal .wrap-modal').removeClass('centraliza-modal');
    $('.videomodal .videoresponsivo, .imagemmodal .legenda-imagemmodal').empty();
    fechaMascara();
}
$('#modal .fechar-modal').click(function(){
    fechaModal();
});



/* ---------------------------------------------------------------------------------------
*    Modal: Mensagem
* --------------------------------------------------------------------------------------*/
function mensagem(texto, icone, link, botao, classes) {
    $('#modal').attr('class','mensagemmodal ' + classes);
    $('.wrap-mensagemmodal p').html(texto);
    $('.wrap-mensagemmodal .icone-texto-modal').html(icone);
    if (botao){
        $('.botao-mensagemmodal').show();
        $('.botao-mensagemmodal a').html(botao).attr('href', link);
    }else{
        $('.botao-mensagemmodal').hide();
    }
    $('.wrap-mensagemmodal').addClass('centraliza-modal');
    $('.wrap-mensagemmodal').fadeIn();
    abreMascara();
}

//Icones
$.get('assets/img/icones/erro.svg', function(svg){ iconeCuidado = svg; }, 'text');
$.get('assets/img/icones/correto.svg', function(svg){ iconeSucesso = svg; }, 'text');



/* ---------------------------------------------------------------------------------------
*    Modal: Imagem
* --------------------------------------------------------------------------------------*/
function imagem(src, legenda, classes) {
    $('#modal').attr('class','imagemmodal ' + classes);
    $('.wrap-imagemmodal img').attr('src', src);
    if (legenda){
        $('.wrap-imagemmodal .legenda-imagemmodal').html('<p>' + legenda + '</p>');
    }
    $('.wrap-imagemmodal').addClass('centraliza-modal');
    $('.wrap-imagemmodal').fadeIn();
    abreMascara();
}
//Click padrão
$('.abreimagem').click(function(){
    imagem($(this).attr('data-imagem'), $(this).attr('data-legenda'), $(this).attr('data-classes'));
});



/* ---------------------------------------------------------------------------------------
*    Modal: Video
* --------------------------------------------------------------------------------------*/
function video(url){
    $('#modal').attr('class','videomodal');
    $('.wrap-videomodal .videoresponsivo').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '?rel=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
    $('.wrap-videomodal').addClass('centraliza-modal');
    $('.wrap-videomodal').fadeIn();
    abreMascara();
}
//Click padrão
$('.abreVideo').click(function(){
    video($(this).attr('data-video'));
});



/* ---------------------------------------------------------------------------------------
*    Modal: Carregando
* --------------------------------------------------------------------------------------*/
function carregar(){
    $('#modal').attr('class','carregarmodal forcamodal');
    $('.wrap-carregarmodal').fadeIn();
    abreMascara();
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



/* ----------------------------------------------------------------------------------------
*    Click menu hamburguer
* ---------------------------------------------------------------------------------------*/
$('#hamburguer').click(function(){
    menuMobile();
});



/* ---------------------------------------------------------------------------------------
*    Verifica se é dispositivo mobile
* --------------------------------------------------------------------------------------*/
var verificaMobile;
function verificaMobile() {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))  {
        verificaMobile = true;
    }else{
        verificaMobile = false;
    }
    return verificaMobile;
}
verificaMobile()



/* ---------------------------------------------------------------------------------------
*    Fechar modal com ESC
* --------------------------------------------------------------------------------------*/
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if (!$(".forcamodal")[0]){
            fechaModal();
            $('#hamburguer > div').attr('class', '');
        }
    }
});



/* ---------------------------------------------------------------------------------------
*    Menu mobile
* --------------------------------------------------------------------------------------*/
function menuMobile(){
    $('#modal').attr('class','menumodal');
    $('.wrap-menumodal').addClass('centraliza-modal');
    $('.wrap-menumodal').fadeIn();
    $('.cabecalho').css('z-index','15');
    abreMascara();
}



$(document).ready(function(){
    /* ---------------------------------------------------------------------------------------
    *    Adiciona classes dos browsers
    * --------------------------------------------------------------------------------------*/
    $('body').addClass(navegadorClasses);

    /* ---------------------------------------------------------------------------------------
    *    Dispara altura banner
    * --------------------------------------------------------------------------------------*/
    alturaBanner();



    /* ---------------------------------------------------------------------------------------
    *    Click capa vídeo
    * --------------------------------------------------------------------------------------*/
    $('.videoclick').click(function(){
        $(this).append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+$(this).attr('video-src')+'?rel=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
        $('img', this).hide();
        $('button', this).hide();
    });



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
    centralizar();
}).trigger('resize');
