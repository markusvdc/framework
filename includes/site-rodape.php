<footer class="rodape">
    <div class="container">
    </div>
</footer>

<div id="modal">
    <span class="fechar-modal"><?= file_get_contents('assets/img/icones/fechar-circulo.svg') ?></span>

    <div class="container">
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

        <div class="wrap-menumodal wrap-modal">
            <nav class="menu-menumodal">
                <?php
                    include 'site-menu.php';
                ?>
            </nav>
        </div>

        <div class="wrap-slidermodal wrap-modal">
            <div class="slider-videos">
                <div class="slider">
                    <ul class="lista-slider">
                        <li class="item-lista-slider">
                            <div class="imagem-slidermodal">
                                <img src="assets/img/foto01.jpg" alt="">
                            </div>
                        </li>
                        <li class="item-lista-slider">
                            <div class="imagem-slidermodal">
                                <img src="assets/img/foto02.jpg" alt="">
                            </div>
                            <!-- <div class="legenda-slidermodal">
                                <p>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus</p>
                            </div> -->
                        </li>
                    </ul>
                </div>
                <div class="controlesslider">
                    <a href="#" class="anterior-controlesslider flex-prev"><img src="assets/img/icones/seta2.svg" alt=""></a>
                    <div class="paginacao-controlesslider"></div>
                    <a href="#" class="proximo-controlesslider flex-next"><img src="assets/img/icones/seta2.svg" alt=""></a>
                </div>
            </div>
        </div>

    </div>
</div>

<div class="mascara"></div>

<script src="assets/js/libs/jquery.js"></script>
<script src="assets/js/libs/mask.js"></script>
<script src="assets/js/libs/SmoothScroll.js"></script>
<script src="assets/js/libs/flexslider.js"></script>
<script src="assets/js/framework.js"></script>
<script src="assets/js/geral.js"></script>
