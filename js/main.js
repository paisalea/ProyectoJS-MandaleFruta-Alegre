const containerCards = document.querySelector("section#contenedorCards")
const inputSearch = document.querySelector("input#buscador")
let carrito = recuperarCarrito()

function crearCard(producto) {
    return `
        <div class="card">
            <div class="smallIcon">
            <div class="Icon">${producto.imagen}</div>
            <div class="Roles">ARS</div>
            <div class="Name">${producto.precio}</div>
            <div class="Name1">${producto.nombre}</div>
            <button type="button" class="btn btn-outline-warning Roles1">+</button>
            </div>
        </div>`
}

function cargarCards(array) {
    containerCards.innerHTML = ""
    array.forEach(producto => {
        containerCards.innerHTML += crearCard(producto)
    });
    accionarBotones()
}

inputSearch.addEventListener("keyup", (input)=> {
    filtrarProductos(input.target.value)
})

function filtrarProductos(valor) {
    let resultado = productos.filter((producto => producto.nombre.toLowerCase().includes(valor.toLowerCase())))
        if (resultado.length > 0) {
            cargarCards(resultado)
        }
}

function accionarBotones() {
    const botones = document.querySelectorAll(".btn.btn-outline-warning.Roles1")
          for (let boton of botones) {
            console.log(boton.id)
            /* boton.addEventListener("click", ()=> {
                let resultado = productos.find(producto => producto.codigo === parseInt(boton.codigo))
                    carrito.push(resultado)
                    guardarCarrito() 
            })*/
          }
          
}

function guardarCarrito() {
    localStorage.setItem("CarritoCompras", JSON.stringify(carrito))
}

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("CarritoCompras")) || []
}


cargarCards(productos)
recuperarCarrito()