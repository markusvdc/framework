<footer class="rodape">
    <div class="container">
        <a href="#" class="labcom-rodape"><?= file_get_contents('assets/img/labcom.svg') ?></a>
        <div class="social-rodape">
            <?php include 'site-social.php';?>
        </div>
    </div>
</footer>

<div id="mmodal">
    <nav class="menu-mmodal">
        <?php include 'site-menu.php';?>
    </nav>
    <div class="social-mmodal">
        <?php include 'site-social.php';?>
    </div>
</div>

<div id="modal">
    <span class="fechar-modal"><?= file_get_contents('assets/img/icones/fechar-circulo.svg') ?></span>

    <div class="container">
        <div class="wrap-slider2modal wrap-modal">
            <div id="galleryModal">
                <div class="carousel">
                    <div class="carousel-cell"><button></button></div>
                    <div class="carousel-cell"><button></button></div>
                    <div class="carousel-cell"><button></button></div>
                    <div class="carousel-cell"><button></button></div>
                    <div class="carousel-cell"><button></button></div>
                </div>
            </div>

            <div id="galleryModalNav">
                <div class="carousel">
                    <div class="carousel-cell"><button></button></div>
                    <div class="carousel-cell"><button></button></div>
                    <div class="carousel-cell"><button></button></div>
                    <div class="carousel-cell"><button></button></div>
                    <div class="carousel-cell"><button></button></div>
                </div>
            </div>
        </div>

        <div class="wrap-portfoliomodal wrap-modal">
            <div class="imagem-portfoliomodal">
                <img src="" alt="">
            </div>
            <h2 class="nome-portfoliomodal"></h2>
            <div class="texto-portfoliomodal">
                <p></p>
            </div>
        </div>

        <div class="wrap-mensagemmodal wrap-modal">
            <div class="texto-modal">
                <div class="icone-texto-modal"></div><p></p>
            </div>
            <div class="botao-mensagemmodal">
                <a class="botao2" href=""></a>
            </div>
        </div>

        <div class="wrap-imagemmodal wrap-modal">
            <div class="imagem-imagemmodal">
                <img src="" alt="">
            </div>
            <div class="legenda-imagemmodal"></div>
        </div>

        <div class="wrap-carregarmodal wrap-modal">
            <span class="icone-carregarmodal"></span>
        </div>

        <div class="wrap-videomodal wrap-modal">
            <div class="videoresponsivo">
            </div>
        </div>

    </div>
</div>

<div class="mascara"></div>

<script src="assets/js/libs/jquery.js"></script>
<script async src="assets/js/libs/mask.js"></script>
<script async src="assets/js/libs/SmoothScroll.js"></script>
<script async src="assets/js/libs/flickity.pkgd.min.js"></script>
<script async src="assets/js/libs/mCustomScrollbar.js"></script>
<script refer src="assets/js/modal.js"></script>
<script refer src="assets/js/framework.js"></script>
<script refer src="assets/js/geral.js"></script>
