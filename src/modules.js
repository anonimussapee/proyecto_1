var table_products=document.getElementById("tabla_productos")
window.addEventListener('load', async function(){
var see= await import("./main.js");
see.show_in_html(table_products);
})