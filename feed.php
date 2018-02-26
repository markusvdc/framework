<?php include 'includes/site-metas.php';?>
    <title>Feed - Framework</title>
</head>
<body class="inicioaberto introducao">
    <?php include 'includes/site-cabecalho.php';?>

    <main>
        <div class="feed">
            <div class="container">
                <div class="box-feed">
                    <?php for($i = 1; $i < 10; $i++) { ?>
                    <div class="desk4 note4 tabl6 celh6 item-feed"><?php echo $i ?></div>
                <?php } ?>
                </div>
            </div>
        </div>
    </main>

    <?php include 'includes/site-rodape.php';?>

    <link rel="stylesheet" href="assets/css/feed.css">
    <!-- <script defer src="assets/js/feed.js"></script> -->
</body>
</html>
