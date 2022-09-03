/*fucntion para generar numeros de 3 digitos para el stock*/
var valor_bd=100;
function num_stock(){
valor_bd=valor_bd+1;
return valor_bd;
}
/*funcion para mostrar la tabla en html*/
export function show_in_html(donde){
    let etiquetas=`<th>PRODUCTO</th><th>CANTIDAD</th><th>COSTO</th><th>ID</th><th>OFERTA</th>`;
    for(var items of stock){
        etiquetas+=`<tr><td>${items.producto}</td><td>${items.cant}</td><td>${items.costo}</td><td>${items.id}</td><td>${items?.oferta}</td></tr>`;
    }
    donde.innerHTML=etiquetas;
}
/*esta función busca los productos por el nombre*/
export function search_for_name_id(where,word,checki){
    var data=`<th>PRODUCTO</th><th>CANTIDAD</th><th>COSTO</th><th>ID</th><th>OFERTA</th>`;
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
