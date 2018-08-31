/* ---------------------------------------------------------------------------------------
*    Mascara
* --------------------------------------------------------------------------------------*/
//Abrir
function abreMascara() {
    $('body').addClass('mascaraaberta');
    $('.mascara').stop(false, false).fadeIn();
    $('#modal').stop(false, false).fadeIn();
    // setTimeout(function(){
    //     centralizar();
    // });
}
//Fechar
function fechaMascara() {
    $('.mascara').fadeOut();
    $('body').removeClass('mascaraaberta');
    $('#modal').css('padding-top', 0);
}


/* ---------------------------------------------------------------------------------------
*    Modal: menu mobile
* --------------------------------------------------------------------------------------*/
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
$.get('./assets/img/icones/erro.svg', function(svg){ iconeCuidado = svg; }, 'text');
$.get('./assets/img/icones/correto.svg', function(svg){ iconeSucesso = svg; }, 'text');



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
*    Modal: Portfolio
* --------------------------------------------------------------------------------------*/
function portfolio(imagem, nome, texto) {
    $('#modal').attr('class','portfoliomodal');

    $('.wrap-portfoliomodal .imagem-portfoliomodal img').attr('src', imagem);
    $('.wrap-portfoliomodal .nome-portfoliomodal').html(nome);
    $('.wrap-portfoliomodal .texto-portfoliomodal p').html(texto);

    $('.wrap-portfoliomodal').fadeIn();
    abreMascara();
}
$('.abrePortfolio').on('click', function(){
    portfolio($(this).attr('data-imagem'), $(this).attr('data-nome'), $(this).attr('data-texto'));
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
*    Fechar modal com ESC
* --------------------------------------------------------------------------------------*/
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if (!$(".forcamodal")[0]){
            fechaModal();
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
    *    Click capa vídeo
    * --------------------------------------------------------------------------------------*/
    $('.videoclick').click(function(){
        $(this).append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+$(this).attr('video-src')+'?rel=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
        $('img', this).hide();
        $('button', this).hide();
    });
})
