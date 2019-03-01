<footer class="rodape">
    <div class="container">
        <a href="#" class="logo-rodape"><?= file_get_contents('assets/img/logo.svg') ?></a>
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
    <span class="close-modal"><?= file_get_contents('assets/img/icons/close.svg') ?></span>

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
            <div class="image-portfoliomodal">
                <img src="" alt="">
            </div>
            <h2 class="name-portfoliomodal"></h2>
            <div class="text-portfoliomodal">
                <p></p>
            </div>
        </div>

        <div class="wrap-messagemodal wrap-modal">
            <div class="text-modal">
                <div class="icon-text-modal"></div><p></p>
            </div>
            <div class="button-messagemodal">
                <a class="button2" href=""></a>
            </div>
        </div>

        <div class="wrap-imagemmodal wrap-modal">
            <div class="imagem-imagemmodal">
                <img src="" alt="">
            </div>
            <div class="legenda-imagemmodal"></div>
        </div>

        <div class="wrap-loadingmodal wrap-modal">
            <span class="icon-loadingmodal"></span>
        </div>

        <div class="wrap-videomodal wrap-modal">
            <div class="videoresponsive">
            </div>
        </div>

    </div>
</div>

<div class="mask"></div>

<script src="assets/js/libs/jquery.js"></script>
<script async src="assets/js/libs/mask.js"></script>
<script async src="assets/js/libs/SmoothScroll.js"></script>
<script async src="assets/js/libs/flickity.pkgd.min.js"></script>
<script async src="assets/js/libs/mCustomScrollbar.js"></script>
<script refer src="assets/js/modal.js"></script>
<script refer src="assets/js/framework.js"></script>
<script refer src="assets/js/geral.js"></script>
