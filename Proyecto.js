/*Usuario escoja uno de los productos de la pagina de merch
*/

/*Propiedades de los productos

productos
{
    nombre
    id
    precio1
    precio2
    precio3
}
*/

// creacion de clase producto

class Producto {
    constructor(nombre, id, precio) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
};

const playeras = new Producto("playeras", 1, 300);
const figuras = new Producto("figuras", 2, 800);
const accesorios = new Producto("accesorios", 3, 500);
const tazas = new Producto("tazas", 4, 50);

// Guardar productos en un arreglo

const Productos = [playeras,figuras,accesorios,tazas]
console.log (Productos);

// Se realiza promt para conseguir información del usuario

let productoDeseado = prompt( 
 ("Escoje el producto que desees comprar 1.playeras - 2.figuras - 3.accesorios - 4-tazas")
);

//Variable para el ciclo de compra

let escojeProducto = true
const carrito = []


while (escojeProducto === true) {
const producto = Productos.find(Producto=>Producto.nombre === productoDeseado.toLowerCase().trim())
console.log (producto);
if (producto) {
    carrito.push(producto)
}   else {
    productoDeseado = prompt("Escoje un producto de la lista: playeras - figuras - accesorios - tazas ")
    continue
}

const continuar = prompt ("Deseas seguir comprando? si-no")
if (continuar === "si") {
    productoDeseado = prompt(
    "Escoje un producto de la lista: playeras - figuras - accesorios - tazas"
    )
}   else {
    escojeProducto = false
}
}
console.log(carrito);
// Calcular el total de productos comprados
let compraTotal = 0
for (const producto of carrito){
    compraTotal = compraTotal + producto.precio
}
alert("El total de tu compra es:" +compraTotal)


    
    




    
