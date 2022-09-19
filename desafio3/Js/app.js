    
//Constructor para luego cargar productos.
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.cantidad = cantidad;
    }
    sumaIva() {
        return this.precio * 1.21;
    }
    descuentoMayor() {
        return this.precio * 1.21 * 0.1;
    }
}
function sumaIva(precio) {
    return precio * 1.21;
}

let carga;
let bandera = false;
let productoDescuento = 0;
let carrito = [];
let form = document.getElementById("formProductos");
let mostrarCarrito1 = document.getElementById("mostrarCarrito");
let btnMostrar = document.getElementById("btnMostrar");
let nombreProducto = form.children[1].value;
let precioProducto = form.children[3].value;
let cantidadProducto = form.children[5].value;


function validarDatos() {
    nombreProducto = form.children[1].value;
    precioProducto = form.children[3].value;
    cantidadProducto = form.children[5].value;

    if (nombreProducto == '' || precioProducto == '' || cantidadProducto == '') {
        //alert("Complete todos los campos para continuar!")
        //******************************************* Uso libreria SweetAlert
        swal({
            title: "Error",
            text: "Complete todos los campos para continuar!",
            icon: "error",
            button: "Continuar",
          });
        bandera = false;
    } else {
        bandera = true;
    }
}
const mostrarProd = () => {
    // ****************************************** Uso de libreria Toastify
    Toastify({
        text: `Producto agregado x ${cantidadProducto} uds`,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#052',
    }).showToast();
    mostrarCarrito1.innerHTML =
        `<h3>Nuevo producto agregado!</h3>
        <li>El producto ingresado es: ${nombreProducto}</li>
            <li>La cantidad ingresada es de: ${cantidadProducto}</li>     
            <li>El precio del producto es: ${precioProducto}</li>
            <li>El total con IVA es de: ${(precioProducto*cantidadProducto*1.21)}</li>`;
}


function agregarProd(e) {
    e.preventDefault()
    validarDatos();
    if (bandera == true) {
        swal ({
            text: "Desea agregar producto a carrito?",
            icon: "info"
        }).then(res => {
            if(res){ 
                let datos = e.target
                carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                carrito.push(new Producto(nombreProducto, precioProducto, cantidadProducto));
                const productosAlmacenados = JSON.stringify(carrito);
                localStorage.setItem("carrito", productosAlmacenados);
                datos.children[1].value = "";
                datos.children[3].value = "";
                datos.children[5].value = "";
                mostrarCarrito1.innerHTML = "";
                mostrarProd();
            }})  
    }else {
        //alert("No se agrego producto a carrito")
        //******************************************* Uso libreria SweetAlert
        swal({
            title: "No se agrego producto",
            timer: "3000",
            icon: "warning",
            button: "Continuar",
          });
    }
}

const filtroMayor = () => {
      
      let ventaMayor = carrito.filter(producto => producto.cantidad >= 10);
      if (ventaMayor.length > 0) {
          mostrarCarrito1.innerHTML += "<h3>Venta por mayor de los siguientes productos</h3>";
          for (const producto of ventaMayor) {
              mostrarCarrito1.innerHTML +=
                  `<p>Producto: ${producto.nombre}</p>
             <p>Cantidad: ${producto.cantidad}</p>
             <p>Total de descuento por mayor: ${(producto.precio*1.21*0.1) * producto.cantidad}</p>`
              productoDescuento += (producto.precio*1.21*0.1) * producto.cantidad
          }
      }
}

const mostrarCarrito = (e) => {
    //aplique un OR ya que si en el localstorage no tengo un valor, este me va a dar indefinido por lo cual el OR me a elegir el array [] ********************************************************************
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    productoDescuento = 0;
    e.preventDefault();
    mostrarCarrito1.innerHTML = "<h3>Carrito</h3>";
    if(carrito.length>0){
        
    for (const producto of carrito) {
        mostrarCarrito1.innerHTML += `
            <p>Producto: ${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Total del producto con IVA: ${producto.cantidad*producto.precio*1.21}</p>`;
    }
        filtroMayor()
        const precioCarrito = carrito.map(elemto => elemto.precio * 1.21 * elemto.cantidad);
        let precioTotal = precioCarrito.reduce((a, b) => a + b);
        precioTotal -= productoDescuento;
        mostrarCarrito1.innerHTML +=
            `<h4>El total de carrito es de: ${precioTotal}</h4>`;
    }else {
        mostrarCarrito1.innerHTML +=
            `<h4>No hay productos en el carrito</h4>`;
    }
}


form.addEventListener("submit", agregarProd);
btnMostrar.addEventListener("click", mostrarCarrito)


