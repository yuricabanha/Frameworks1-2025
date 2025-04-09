$( "#menu" ).load( "./componentes/menu.html");
$( "#rodape" ).load( "./componentes/rodape.html");
function menu(link) {
    $( "#conteudo" ).load(`./pages/${link}.html`);
    
}