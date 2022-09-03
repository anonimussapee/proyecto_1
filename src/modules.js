/*esta parte del codigo permite desplegar los datos que  hay al cargar el html*/
var table_products=document.getElementById("tabla_productos")
window.addEventListener('load', async function(){
var see= await import("./main.js");
see.show_in_html(table_products);
});
/*esta funcion desplegara los resultados de la busqueda por nombre y id*/
var table_search_for_name=document.getElementById("tabla_busqueda");
var btn_search=document.getElementById("btn_buscar");

btn_search.addEventListener('click',async function(){
    var check_id_ref=document.getElementById("check_id");
    var word=document.getElementById("buscar_nombre");
    var word_d=word.value;
    var search=await import("./main.js");
    search.search_for_name_id(table_search_for_name,word_d,check_id_ref);
});