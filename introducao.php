<?php
    include 'includes/site-metas.php';
?>
    <title>Introdução - Framework</title>
</head>
<body class="inicioaberto introducao">
    <?php
        include 'includes/site-cabecalho.php';
    ?>

    <main>
        <div class="introbanner intropadrao">
            <div class="container">
                <p>Função para transformar a altura da div para a mesma altura da tela. (Mínimo 500px)</p>
                <div class="botoes-intropadrao">
                    <button id="testeBanner" class="botao1" type="button" name="button">Testar</button>
                </div>
            </div>
        </div>

        <div class="introslider intropadrao">
            <div class="slider-lista-reservas">
                <div class="slider">
                    <ul class="lista-slider">
                        <?php for($i = 0; $i < 3; $i++) { ?>

                        <li class="item-lista-slider">
                            <img src="assets/img/foto1.jpg" alt="" style="width: 100%;">
                        </li>

                        <li class="item-lista-slider">
                            <img src="assets/img/foto2.jpg" alt="" style="width: 100%;">
                        </li>

                        <?php } ?>
                    </ul>
                </div>
                <div class="controlesslider">
                    <a href="#" class="anterior-controlesslider flex-prev"><?= file_get_contents('assets/img/icones/seta2.svg') ?></a>
                    <div class="paginacao-controlesslider"></div>
                    <a href="#" class="proximo-controlesslider flex-next"><?= file_get_contents('assets/img/icones/seta2.svg') ?></a>
                </div>
            </div>
        </div>

        <div class="container">
            <div id="verificaBrowser">

            </div>
        </div>

        <section class="">
            <div class="container">
                <button id="testeMensagem" class="botao1" type="button" name="button">Mensagem</button>
                <button class="botao1 abreVideo" type="button" name="button" data-video="VOa4XcXN0r0">Vídeo</button>
                <button id="testeCarregar" class="botao1" type="button" name="button">Carregar</button>
            </div>
        </section>


        <div class="secao1 espacamento1">
            <div class="container">
                <hr style="border: none; border-top: 1px solid #DDD; margin: 50px 0">
                <div class="row">
                    <div class="desk4 pad-row">
                        <figure>
                            <img src="assets/img/foto1.jpg" class="abreimagem" alt="" data-imagem="assets/img/foto1.jpg" data-classes="testeclass" data-legenda="Este texto é a <em>legenda</em> da imagem">
                            <figcaption>Imagem <strong>com</strong> legenda no modal</figcaption>
                        </figure>
                    </div>
                    <div class="desk4 pad-row">
                        <figure>
                            <img src="assets/img/foto2.jpg" class="abreimagem" alt="" data-imagem="assets/img/foto2.jpg">
                            <figcaption>Imagem <strong>sem</strong> legenda no modal</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <section class="introformulario" id="contato">
            <div class="container">
                <hr style="border: none; border-top: 1px solid #DDD; margin: 50px 0">
                <div class="campos placeholder1">
                    <form action="">
                        <div class="grupo-campos">
                            <input class="inputtext" placeholder="Nome*" type="text">
                        </div>
                        <div class="grupo-campos">
                            <input class="inputtext spmask" placeholder="Telefone*" type="text">
                        </div>
                        <div class="grupo-campos erro">
                            <input class="inputtext" placeholder="E-mail*" type="text">
                        </div>
                        <div class="grupo-campos">
                            <div class="select placeholder">
                                <select name="" id="">
                                    <option value="" disabled selected>Assunto*</option>
                                    <option value="">Primeira opção</option>
                                    <option value="">Segunda opção</option>
                                    <option value="">Terceira opção</option>
                                </select>
                                <span class="campo-select inputtext">
                                    <span class="texto-campo-select">Assunto*</span>
                                    <span class="seta-campo-select"><?= file_get_contents('assets/img/icones/seta.svg') ?></span>
                                </span>
                            </div>
                        </div>
                        <div class="grupo-campos">
                            <textarea class="inputtext" placeholder="Mensagem*"></textarea>
                        </div>
                        <div class="grupo-campos">
                            <div class="inputcheck">
                                <h3 class="titulo-inputcheck">Selecione a(s) opções que desejar. (Seleção multipla)</h3>
                                <div class="item-inputcheck">
                                    <input type="checkbox" value="Capim-amargoso">
                                    <b></b><span>Primeira opção</span>
                                </div>
                                <div class="item-inputcheck">
                                    <input type="checkbox" value="Capim-massambará">
                                    <b></b><span>Segunda opção</span>
                                </div>
                                <div class="item-inputcheck">
                                    <input type="checkbox" value="Leiteiro">
                                    <b></b><span>Terceira opção</span>
                                </div>
                                <div class="item-inputcheck">
                                    <input type="checkbox" value="Azevém">
                                    <b></b><span>Quarta opção</span>
                                </div>
                            </div>
                        </div>

                        <div class="grupo-campos">
                            <fieldset class="inputradio erro" id="radio">
                                <h3 class="titulo-inputradio">Selecione uma única opção. (Seleção simples)</h3>
                                <div class="item-inputradio">
                                    <label>
                                        <input type="radio" value="opcao1" name="item_radio" checked><b class="ativo"></b><span class="">Primeira opção</span>
                                    </label>
                                </div>
                                <div class="item-inputradio">
                                    <label>
                                        <input type="radio" value="opcao2" name="item_radio"><b></b><span class="">Segunda opção</span>
                                    </label>
                                </div>
                                <div class="item-inputradio">
                                    <label>
                                        <input type="radio" value="opcao3" name="item_radio"><b></b><span class="">Outra opção (especifique)</span>
                                    </label>
                                </div>
                            </fieldset>
                            <input class="inputtext" id="outro_radio" placeholder="Outro" type="text" disabled>
                        </div>

                        <div class="grupo-campos">
                            <button class="botao1 cor1 tamanho1">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <section class="secao5 espacamento1">
            <div class="container">
                <hr style="border: none; border-top: 1px solid #DDD; margin: 50px 0">
                <div class="abas">
                    <ul class="menu-abas">
                        <li data-aba="aba1" class="ativo"><button class="botao1 cor1 tamanho1">Primeiro</button></li>
                        <li data-aba="aba2"><button class="botao1 cor1 tamanho1">Segundo</button></li>
                        <li data-aba="aba3"><button class="botao1 cor1 tamanho1">Terceiro</button></li>
                        <li data-aba="aba4"><button class="botao1 cor1 tamanho1">Quarto</button></li>
                    </ul>
                    <ul class="conteudo-abas texto1">
                        <li id="aba1" style="display: list-item;">
                            <p>Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.</p>
                        </li>
                        <li id="aba2">
                            <p>Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>
                        </li>
                        <li id="aba3">
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                        </li>
                        <li id="aba4">
                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        <!-- <section class="secao6 espacamento1">
            <div class="container">
                <div class="slider">
                    <div class="conteudo-slider" id="carrossel">
                        <ul class="slides lista-conteudo-slider">
                            <li class="item-lista-conteudo-slider">
                                <img src="assets/img/foto1.jpg" alt="">
                            </li>
                            <li class="item-lista-conteudo-slider">
                                <img src="assets/img/foto2.jpg" alt="">
                            </li>
                            <li class="item-lista-conteudo-slider">
                                <img src="assets/img/foto1.jpg" alt="">
                            </li>
                            <li class="item-lista-conteudo-slider">
                                <img src="assets/img/foto2.jpg" alt="">
                            </li>
                            <li class="item-lista-conteudo-slider">
                                <img src="assets/img/foto1.jpg" alt="">
                            </li>
                            <li class="item-lista-conteudo-slider">
                                <img src="assets/img/foto2.jpg" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="controlesslider">
                        <a href="#" class="anterior-controlesslider flex-prev"><?= file_get_contents('assets/img/icones/seta.svg') ?></a>
                                    <div class="paginacao-controlesslider"></div>
                                    <a href="#" class="proximo-controlesslider flex-next"><?= file_get_contents('assets/img/icones/seta.svg') ?></a>
                    </div>
                </div>
            </div>
        </section> -->

        <section class="secao7 espacamento1">
            <div class="container">
                <div class="select select1 placeholder inativo">
                    <select name="" id="" disabled>
                        <option value="" disabled selected>Assunto*</option>
                        <option value="">Opção 1</option>
                        <option value="">Opção 2</option>
                        <option value="">Opção 3</option>
                    </select>
                    <span class="campo-select">
                        <span class="texto-campo-select">Assunto*</span>
                        <span class="seta-campo-select"><?= file_get_contents('assets/img/icones/seta.svg') ?></span>
                    </span>
                </div>
            </div>
        </section>

        <section class="fotos" id="fotos">
            <div class="container">
                <h2>Galeria de fotos do evento</h2>
                <div class="lista-fotos">
                    <ul class="row">
                        <li class="pad-row desk4 note4 tabl6 celh6 celu6">
                            <div class="box-lista-fotos">
                                <img src="assets/img/foto01t.jpg" alt="">
                            </div>
                        </li>
                        <li class="pad-row desk4 note4 tabl6 celh6 celu6">
                            <div class="box-lista-fotos">
                                <img src="assets/img/foto02t.jpg" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>

    <?php
        include 'includes/site-rodape.php';
    ?>

    <link rel="stylesheet" href="assets/css/introducao.css">
    <script src="assets/js/introducao.js"></script>
</body>
</html>
