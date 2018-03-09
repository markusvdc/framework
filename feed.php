<?php include 'includes/site-metas.php';?>
    <title>Feed - Framework</title>
</head>
<body class="inicioaberto introducao">
    <?php include 'includes/site-cabecalho.php';?>

    <main>
        <div class="categorias">
            <div class="container">
                <ul>
                    <li>
                        <span class="icone-categorias tam1"><?= file_get_contents('assets/img/icones/artigos3.svg') ?></span>
                        <span class="nome-categorias">Artigos</span>
                    </li>
                    <li>
                        <span class="icone-categorias tam1"><?= file_get_contents('assets/img/icones/monitor.svg') ?></span>
                        <span class="nome-categorias">Portfólio</span>
                    </li>
                    <li>
                        <span class="icone-categorias tam2"><?= file_get_contents('assets/img/icones/codigo4.svg') ?></span>
                        <span class="nome-categorias">Código</span>
                    </li>
                    <li class="ativo">
                        <span class="icone-categorias tam2"><?= file_get_contents('assets/img/icones/infinito.svg') ?></span>
                        <span class="nome-categorias">Todos</span>
                    </li>
                </ul>
                <button class="pesquisar-categorias"><?= file_get_contents('assets/img/icones/lupa.svg') ?></button>
            </div>
        </div>

        <div class="feed">
            <div class="container">
                <div class="box-feed">
                    <?php for($i = 1; $i < 6; $i++) { ?>
                    <div class="desk3 note3 tabl4 celh6 item-feed medium">
                        <?php // echo $i ?>
                        <span class="icone-feed"><?= file_get_contents('assets/img/icones/medium.svg') ?></span>
                        <h3>Usando FTP profissionalmente no Atom com o Remote-FTP</h3>
                        <div class="tags">Medium, Artigo</div>
                        <date>07.12.17</date>
                    </div>
                    <div class="desk3 note3 tabl4 celh6 item-feed tableless">
                        <?php // echo $i ?>
                        <span class="icone-feed"><?= file_get_contents('assets/img/icones/tableless.svg') ?></span>
                        <!-- <h3>Dicas de front-end para designers</h3> -->
                        <h3>Dicas de front-end para designers front-end para designers front-end para designers</h3>
                        <div class="tags">Tableless, Artigo</div>
                        <date>07.12.17</date>
                    </div>
                    <div class="desk3 note3 tabl4 celh6 item-feed autonomo">
                        <?php // echo $i ?>
                        <span class="icone-feed"><?= file_get_contents('assets/img/icones/estrela.svg') ?></span>
                        <h3>Chef Di Sério - Desenvolvimento front-end e Wordpress</h3>
                        <div class="tags">Tableless, Artigo</div>
                        <date>07.12.17</date>
                    </div>
                <?php } ?>
                </div>
            </div>
        </div>

        <div class="pesquisar">
            <div class="container">
                <form class="" action="index.html" method="post">
                    <input type="text" name="" value=""><button type="button" name="button">Pesquisar</button>
                </form>
            </div>
        </div>
    </main>

    <?php include 'includes/site-rodape.php';?>

    <link rel="stylesheet" href="assets/css/feed.css">
    <!-- <script defer src="assets/js/feed.js"></script> -->
</body>
</html>
