//Exemplo mensagem
$('#testeMensagem').on('click', function(){
    mensagem('Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.', iconeCuidado, '', '', '')
    // mensagem('Sit amet aliquam vel, ullamcorper sit amet ligula.', iconeCuidado, '', '', '')
})

//Exemplo carregar
$('#testeCarregar').on('click', function(){
    carregar();
});

//Exemplo banner altura
$('#testeBanner').on('click', function(){
    if ($( ".banneraltura" ).length) {
        $('.banner').removeClass('banneraltura');
        $('.banner').css('height', '');
    }else{
        $('.banner').addClass('banneraltura');
        alturaBanner();
    }
});

//Exemplo radio change
$('input:radio[name="item_radio"]').on('change', function(){
    if($(this).val() == 'opcao3'){
        $('#outro_radio').prop('disabled', false);
    }else {
        $('#outro_radio').prop('disabled', true);
    }
});
