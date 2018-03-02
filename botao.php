<?php include 'includes/site-metas.php';?>
    <title>Flutuante - Framework</title>
</head>
<body class="inicioaberto introducao">
    <?php include 'includes/site-cabecalho.php';?>

    <main>
        <div class="container">
            <img class="rolar1" width="300" src="assets/img/banner.jpg">
            <img class="rolar2" width="300" src="assets/img/banner.jpg">
            <div class="caixa">
                <div id="caixa">

                </div>
            </div>
            <div class="botoezes">
                <button class="button button1">Modelagem</button>
                <button class="button button2">Modelagem</button>
            </div>
            <div class="efeito">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="meumenu">
                <div id="meumenu" class="ativo">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="sketch">
                <span class="obj1"></span>
                <span class="obj2"></span>
            </div>
        </div>
    </main>

    <?php include 'includes/site-rodape.php';?>

    <link rel="stylesheet" href="assets/css/botoes.css">
    <script>
        $('#meumenu').on('click', function(){
            $(this).toggleClass('ativo inativo');
        });
        $('#meumenu').on('mouseenter', function(){
            $(this).toggleClass('girar');
        });
        $(document).ready(function(){
            console.log($('.rolar1').offset().top);
            console.log($('.rolar2').offset().top);
        });

        var lastScrollTop = 0;
        $(window).scroll(function(){
            var scrollTop     = $(window).scrollTop()
            // elementOffset = $('.rolar1').offset().top,
            // distance      = (elementOffset - scrollTop);

            var obj1 = 500 - (scrollTop * 2);
            var obj2 = 400 - (scrollTop * 3);
            // mudar o * X para ir mais rapido

            // console.log('distancia do topo do window para o topo do document '+scrollTop);
            // console.log('distancia da imagem para o topo do document '+elementOffset);
            // console.log('distancia da imagem para o topo do window '+distance);
            // console.log('---------------');

            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                // downscroll code
                $('.rolar1').css('top', obj1)
                $('.rolar2').css('top', obj2)
            } else {
                // upscroll code
                $('.rolar1').css('top', obj1)
                $('.rolar2').css('top', obj2)
            }
            lastScrollTop = st;
        });
    </script>
</body>
</html>
