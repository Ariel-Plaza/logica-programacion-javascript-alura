/*Has sido encargado(a) de crear un pequeño programa para gestionar una lista de compras. El programa debe permitir que el usuario agregue elementos a la lista y luego mostrar el contenido de la lista en la pantalla. Además, el usuario debe poder ver un elemento específico de la lista ingresando el índice del elemento deseado.*/

let listaCompras = [];

listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");

function agregarProducto(producto) {
  listaCompras.push(producto);
}

function visualizarLista(productos) {
  for (let producto of productos) {
    console.log(producto)
  }
  // for (i = 0; i <= productos.length; i++)
  // {console.log(productos)}
  
}

visualizarLista(listaCompras);
// console.log(mostrarListado);
