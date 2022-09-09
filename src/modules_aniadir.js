/*funcion del boton añadir productos*/

var btn_aniadir=document.getElementById("btn_aniadir");
btn_aniadir.addEventListener("click",async function(e){
    e.preventDefault();
    var producto_a_aniadir=document.getElementById("producto_aniadir").value;
    var costo_d_producto=document.getElementById("costo_aniadir").value;
    var cant_d_producto=document.getElementById("cant_aniadir").value;
    var oferta_d_producto=document.getElementById("oferta_aniadir").value;
    var aniadir=await import("./main.js");
    aniadir.aniadir_a_stock(producto_a_aniadir,costo_d_producto,cant_d_producto,oferta_d_producto);
});