function portfolio(imagem, nome, texto) {
    $('#modal').attr('class','portfoliomodal');

    $('.wrap-portfoliomodal .imagem-portfoliomodal img').attr('src', imagem);
    $('.wrap-portfoliomodal .nome-portfoliomodal').html(nome);
    $('.wrap-portfoliomodal .texto-portfoliomodal p').html(texto);

    $('.wrap-portfoliomodal').fadeIn();
    abreMascara();
}

$(document).ready(function(){

    /* ---------------------------------------------------------------------------------------
   *    Click modal portfolio
   * --------------------------------------------------------------------------------------*/
   $('#testepop').on('click', function(){
       portfolio($(this).attr('data-imagem'), $(this).attr('data-nome'), $(this).attr('data-texto'));
   });

   $('.introslider2 .carousel-cell button').on('click', function(){
       console.log('teste');
   });

   /* ---------------------------------------------------------------------------------------
   *    Slider
   * --------------------------------------------------------------------------------------*/
   $('#carrossel').flexslider({
       animation: "slide",
       slideshow: false,
       animationLoop: false,
       itemWidth: 360,
       itemMargin: 30,
       controlsContainer: $(".slider .paginacao-controlesslider"),
       customDirectionNav: $(".slider .controlesslider > a")
   });
});

$(window).on('load', function(){

    $('.introslider .slider').flexslider({
        selector: ".lista-slider > .item-lista-slider",
        animation: "slide",
        // slideshow: false,
        // move: 1,
        // directionNav: false,
        // controlNav: false,
        animationLoop: false,
        customDirectionNav: $(".introslider .controlesslider > a"),
        controlsContainer: $(".introslider .paginacao-controlesslider")
    });

    /*
    * ----------------------------------------------------------------------------------------
    *    Galeria de fotos
    * ----------------------------------------------------------------------------------------
    */
    criaGaleria = true;
    $('.introgaleria .lista-fotos li').on('click', function(){
        $('.wrap-slidermodal').show();
        if (criaGaleria) {
            $('.wrap-slidermodal .slider').flexslider({
                selector: ".lista-slider > .item-lista-slider",
                animation: "fade",
                slideshow: false,
                animationLoop: false,
                move: 1,
                controlNav: true,
                customDirectionNav: $(".wrap-slidermodal .controlesslider > a"),
                controlsContainer: $(".wrap-slidermodal .paginacao-controlesslider"),
                start: function(){
                    centralizar();
                },
                after: function(){
                    centralizar();
                }
            });
            criaGaleria = false;
        }
        indexGaleria = $('.introgaleria .lista-fotos li').index(this);
        setTimeout(function(){
            $('.wrap-slidermodal .slider').flexslider(indexGaleria);
        })
        $('#modal').attr('class','slidermodal');
        $('.wrap-slidermodal').addClass('centraliza-modal');
        $('.wrap-slidermodal').fadeIn();
        abreMascara();
    });

    $('.introslider2 .carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        groupCells: true,
        draggable: false,
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 65, y2: 45,
            x3: 20
        }
    });
});
