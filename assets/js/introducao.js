$(window).on('load', function(){
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

    var createGallery = true;
    $('#testeSlideThumbs').on('click', function(){
        $('#modal').attr('class','slider2modal');

        $('.wrap-slider2modal').fadeIn(500, function(){
            if (createGallery) {
                $('#galleryModal .carousel').flickity({
                    cellAlign: 'left',
                    arrowShape: {
                        x0: 10,
                        x1: 60, y1: 50,
                        x2: 65, y2: 45,
                        x3: 20
                    }
                });

                $('#galleryModalNav .carousel').flickity({
                    asNavFor: '#galleryModal .carousel',
                    cellAlign: 'left',
                    arrowShape: {
                        x0: 10,
                        x1: 60, y1: 50,
                        x2: 65, y2: 45,
                        x3: 20
                    }
                });

                $('.wrap-slider2modal').addClass('active');
                createGallery = false
            }

        });
        abreMascara();
    });
});
