const carrito = []

const productos = [{imagen: '🥔', codigo: 1, tipo: 'Papa', precio: 200},
                 {imagen: '🥬', codigo: 2, tipo: 'Lechuga', precio: 450},
                 {imagen: '🍅', codigo: 3, tipo: 'Tomate', precio: 600},
                 {imagen: '🥕', codigo: 4, tipo: 'Zanahoria', precio: 150},
                 {imagen: '🧅', codigo: 5, tipo: 'Cebolla', precio: 275},
                 {imagen: '🫑', codigo: 6, tipo: 'Morron', precio: 780},
                 {imagen: '🧄', codigo: 7, tipo: 'Ajo', precio: 100},
                 {imagen: '🍆', codigo: 8, tipo: 'Berenjena', precio: 200},
                 {imagen: '🌶️', codigo: 9, tipo: 'Aji', precio: 1500},
                 {imagen: '🥦', codigo: 10, tipo: 'Brocoli', precio: 250},
                 {imagen: '🌽', codigo: 11, tipo: 'Choclo', precio: 80},
                 {imagen: '🥑', codigo: 12, tipo: 'Palta', precio: 1280},
                 {imagen: '🥒', codigo: 13, tipo: 'Pepino', precio: 460},
                 {imagen: '🍑', codigo: 14, tipo: 'Durazno', precio: 650},
                 {imagen: '🍎', codigo: 15, tipo: 'Manzana Roja', precio: 810},
                 {imagen: '🍌', codigo: 16, tipo: 'Banana', precio: 500},
                 {imagen: '🍊', codigo: 17, tipo: 'Naranja', precio: 320},
                 {imagen: '🍓', codigo: 18, tipo: 'Frutilla', precio: 600},
                 {imagen: '🍍', codigo: 19, tipo: 'Anana en Piña', precio: 540},
                 {imagen: '🍐', codigo: 20, tipo: 'Pera', precio: 320},
                 {imagen: '🍒', codigo: 21, tipo: 'Cereza', precio: 780},
                 {imagen: '🍋', codigo: 22, tipo: 'Limón', precio: 950},
                 {imagen: '🍇', codigo: 23, tipo: 'Uva', precio: 650},
                 {imagen: '🥝', codigo: 24, tipo: 'Kiwi', precio: 430},
                 {imagen: '🍉', codigo: 25, tipo: 'Sandia', precio: 300}]
  
/*let contenedor = document.getElementById("contenedor-tarjetas");

for (let i = 0; i < productos.length; i++) {
let tarjeta = document.createElement("div");
tarjeta.classList.add("tarjeta");

let titulo = document.createElement("h2");
titulo.innerText = productos[i].codigo;

let img = document.createElement("p");
img.innerText = productos[i].imagen;

let contenido = document.createElement("p");
contenido.innerText = productos[i].tipo;

let precio = document.createElement("p");
precio.innerText = "$" + productos[i].precio;

tarjeta.appendChild(titulo);
tarjeta.appendChild(img);
tarjeta.appendChild(contenido);
tarjeta.appendChild(precio);
contenedor.appendChild(tarjeta);
}
*/
const mensajeInicial = "Indicanos que producto deseas sumar al carrito:"

function buscarProducto(codigo) {
    let resultado = productos.find((producto)=> producto.codigo === parseInt(codigo))
    return resultado
}

function finalizarCompra() {
    if (carrito.length === 0) {
        let vacio = confirm("El carrito está vacío. ¿Quieres agregar algo a tu compra?")
        comprar() 
    } 

    const shopping = new Compra(carrito)
    verCarrito()
    alert(' El total de su compra es de $ ' + shopping.subtotalCompra())



    let respuesta = confirm("¿Deseas confirmar tu pago?")
        if (respuesta === true) {
            alert('✅ Confirmamos tu pago de: $ ' + shopping.subtotalCompra() + "\n Muchas gracias por la compra :)")
            carrito.length = 0
        }
}

function verCarrito() {
    console.table(carrito)
}

function comprar() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("⛔️ Error en el código ingresado.")
            let respuesta = confirm("¿Deseas intentar de nuevo?")
                if (respuesta === true) {
                    comprar()
                }
                return
        }

    let productoSeleccionado = buscarProducto(codigo)
        if (productoSeleccionado === undefined) {
            alert("El codigo de producto no es valido.")
            comprar()
        }

        alert(productoSeleccionado.imagen + ' ' + productoSeleccionado.tipo + ' - ha sido agregado al carrito.')
        carrito.push(productoSeleccionado)

        let respuesta = confirm("¿Deseas seguir comprando?")
            if (respuesta === true) {
                comprar()
            } else {
                finalizarCompra()
            }
}