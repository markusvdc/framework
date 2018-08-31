<div class="inicio">
    <div class="wrap-inicio">
    </div>
</div>
<div class="logo-inicio">
    <?= file_get_contents('assets/img/logo.svg') ?>
</div>
<span class="icone-inicio"></span>
<button id="mmenu">
    <span></span><span></span><span></span><span></span>
</button>
<header class="cabecalho">
    <div class="container">
        <a href="." class="logo-cabecalho">
            <?= file_get_contents('assets/img/logo.svg') ?>
        </a>
        <div class="social-cabecalho">
            <?php include 'site-social.php';?>
        </div>
        <nav class="menu-cabecalho">
            <?php include 'site-menu.php';?>
        </nav>
    </div>
</header>
<header class="mcabecalho">
    <div class="container">
        <a href="." class="logo-cabecalho">
            <?= file_get_contents('assets/img/logo.svg') ?>
        </a>
    </div>
</header>

<!-- <header class="hcabecalho">
    <div class="container"></div>
</header> -->
