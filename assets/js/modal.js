/* ---------------------------------------------------------------------------------------
*    Mask
* --------------------------------------------------------------------------------------*/
//Open
function openMask() {
    $('body').addClass('maskopen');
    $('.mask').stop(false, false).fadeIn();
    $('#modal').css('display', 'flex');
}
//Close
function fechaMask() {
    $('.mask').fadeOut();
    $('body').removeClass('maskopen');
    $('#modal').css('padding-top', 0);
}


/* ---------------------------------------------------------------------------------------
*    Modal: menu mobile
* --------------------------------------------------------------------------------------*/
function closeMmodal() {
    $('#mmenu, #mmodal').toggleClass('active');
}

$('#mmodal .anchor a').on('click', function(){
    closeMmodal();
});

$('#mmenu').on('click', function(){
    closeMmodal();
});


/* ---------------------------------------------------------------------------------------
*    Modal: general resources
* --------------------------------------------------------------------------------------*/
//Close
function closeModal() {
    $('#modal, #modal .wrap-modal').hide();
    $('.videomodal .videoresponsive, .imagemodal .label-imagemodal').empty();
    fechaMask();
}

$('#modal .close-modal').click(function(){
    closeModal();
});



/* ---------------------------------------------------------------------------------------
*    Modal: Message
* --------------------------------------------------------------------------------------*/
function message(text, icon, link, button, classes) {
    $('#modal').attr('class','messagemodal ' + classes);
    $('.wrap-messagemodal p').html(text);
    $('.wrap-messagemodal .icon-text-modal').html(icon);
    if (button){
        $('.button-messagemodal').show();
        $('.button-messagemodal a').html(button).attr('href', link);
    }else{
        $('.button-messagemodal').hide();
    }
    $('.wrap-messagemodal').fadeIn();
    openMask();
}

//Icons
$.get('./assets/img/icons/error.svg', function(svg){ iconWarning = svg; }, 'text');
$.get('./assets/img/icons/correct.svg', function(svg){ iconSuccess = svg; }, 'text');



/* ---------------------------------------------------------------------------------------
*    Modal: Image
* --------------------------------------------------------------------------------------*/
function image(src, label, classes) {
    $('#modal').attr('class','imagemodal ' + classes);
    $('.wrap-imagemodal img').attr('src', src);
    if (label){
        $('.wrap-imagemodal .label-imagemodal').html('<p>' + label + '</p>');
    }
    $('.wrap-imagemodal').fadeIn();
    openMask();
}
//Click padrão
$('.openimage').click(function(){
    image($(this).attr('data-image'), $(this).attr('data-label'), $(this).attr('data-classes'));
});



/* ---------------------------------------------------------------------------------------
*    Modal: Video
* --------------------------------------------------------------------------------------*/
function video(url){
    $('#modal').attr('class','videomodal');
    $('.wrap-videomodal .videoresponsive').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '?rel=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen=""></iframe>');
    $('.wrap-videomodal').fadeIn();
    openMask();
}
//Click default
$('.openVideo').click(function(){
    video($(this).attr('data-video'));
});


/* ---------------------------------------------------------------------------------------
*    Modal: Portfolio
* --------------------------------------------------------------------------------------*/
function portfolio(image, name, text) {
    $('#modal').attr('class','portfoliomodal');

    $('.wrap-portfoliomodal .image-portfoliomodal img').attr('src', image);
    $('.wrap-portfoliomodal .name-portfoliomodal').html(name);
    $('.wrap-portfoliomodal .text-portfoliomodal p').html(text);

    $('.wrap-portfoliomodal').fadeIn();
    openMask();
}
$('.openPortfolio').on('click', function(){
    portfolio($(this).attr('data-image'), $(this).attr('data-name'), $(this).attr('data-text'));
});



/* ---------------------------------------------------------------------------------------
*    Modal: Loading
* --------------------------------------------------------------------------------------*/
function loading(){
    $('#modal').attr('class','loadingmodal forcemodal');
    $('.wrap-loadingmodal').fadeIn();
    openMask();
}


/* ---------------------------------------------------------------------------------------
*    Fechar modal com ESC
* --------------------------------------------------------------------------------------*/
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if (!$(".forcemodal")[0]){
            closeModal();
        }
    }
});



/* ---------------------------------------------------------------------------------------
*    Menu mobile
* --------------------------------------------------------------------------------------*/
function menuMobile(){
    $('#modal').attr('class','menumodal');
    $('.wrap-menumodal').fadeIn();
    $('.header').css('z-index','15');
    openMask();
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
