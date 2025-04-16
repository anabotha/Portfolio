/*El título de la página (tag <title>).
La altura y el ancho de la página.
El contenido de un objeto que creemos. */
function main(){
    document.title="Mi primera pagina web con javascript";
    var num=6;
    console.log("el numero es ",num)
    console.log("el ancho de la ventana es",window.innerWidth);
    console.log("el largo de la ventana es",window.innerHeight);
    const ancho=window.innerWidth
    const largo=window.innerHeight
}
main();