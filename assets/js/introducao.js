$(document).ready(function(){
    $('.introslider .slider').flexslider({
        selector: ".lista-slider > .item-lista-slider",
        animation: "slide",
        slideshow: false,
        animationLoop: false,
        move: 1,
        // directionNav: false,
        // controlNav: false,
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
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 65, y2: 45,
            x3: 20
        }
    });

});
