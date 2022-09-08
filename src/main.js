/*fucntion para generar numeros de 3 digitos para el stock*/
var valor_bd=100;
function num_stock(){
valor_bd=valor_bd+1;
return valor_bd;
}
/*funcion para mostrar la tabla en html*/
export function show_in_html(donde){
    let etiquetas=`<caption>todos los productos </caption><th>PRODUCTO</th><th>CANTIDAD</th><th>COSTO</th><th>ID</th><th>OFERTA</th>`;
    for(var items of stock){
        etiquetas+=`<tr><td>${items.producto}</td><td>${items.cant}</td><td>${items.costo}</td><td>${items.id}</td><td>${items?.oferta}</td></tr>`;
    }
    donde.innerHTML=etiquetas;
}
/*en esta funcion se habre una tabla para añadir productos*/
export function abrir_aniadir(donde){
let etiqueta=`<h3 class="h3_aniadir">Añadir productos</h3><form><label for="nombre_aniadir">Ingresa el nombre del producto</label><input id="nombre_aniadir" type="text" place holder="...."><br><label for="precio_aniadir">Ingresa el precio</label><input id="precio_aniadir" type="text" placeholder="0.00"><br><label for="cant_aniadir">Ingresa la cantidad</label><input id="cant_aniadir" type="text" placeholder="0"><br><input type="button" value="añadir" id="btn_añadir_productos"></form>`;
donde.innerHTML=etiqueta;
} 
/*esta función busca los productos por el nombre*/
export function search_for_name_id(where,word,checki){
    var data=`<caption>Tú busqueda esta lista</caption><th>PRODUCTO</th><th>CANTIDAD</th><th>COSTO</th><th>ID</th><th>OFERTA</th>`;
    if(checki.checked){
        for(var items of stock){
            if(word==items.id){
                data+=`<tr><td>${items.producto}</td><td>${items.cant}</td><td>${items.costo}</td><td>${items.id}</td><td>${items.oferta}</td></tr>`
            }
        }
        where.innerHTML=data;
    }else{
    for(var items of stock){
        if(items.producto.includes(word)){
            data+=`<tr><td>${items.producto}</td><td>${items.cant}</td><td>${items.costo}</td><td>${items.id}</td><td>${items.oferta}</td></tr>`
        }
    }
    where.innerHTML=data;
}}
/*esta es la variable donde se guardaran los datos de los productos */
var stock=[{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},{producto:"plastico transparente 5x6",id:num_stock(),costo:0.60, cant:7, oferta:""},];
