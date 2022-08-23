//Declaracion de variables

let carga;
let id=0;
let productoDescuento=0;

//Funciones
const suma = (a,b) => { return a + b };
const resta = (a,b) => { return a - b };
const multiplicacion = (a,b) => { return a * b };

//Comienzo del algoritmo

alert("Bienvenido, ha ingresado a nuestro sitio.\n");
//Array de usuarios
const listaUsuarios = [];

//Cargo el array de usuarios con el nombre del usuario que va a cargar items a la lista
let usuario = prompt("Ingrese su nombre");
alert("Hola "+ usuario);
listaUsuarios.push(usuario.toUpperCase());
console.log(listaUsuarios);


//Constructor para luego cargar productos.
class Producto {
    constructor(id,nombre,precio,cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = Number(precio);
        this.cantidad = cantidad;
    }
    sumaIva() {
        return this.precio*1.21;
    }
    descuentoMayor() {
        return this.precio *1.21 * 0.1;
    }
}
//Array vacio
const carrito = [];

//Carga de array
    if(confirm("Desea cargar productos?")==false) carga= 'ESC';
while(carga != 'ESC') {
    let nombreProd = prompt("Ingrese nombre de producto");
    let precioProd = prompt("Ingrese el precio del producto");
    let cantProd = prompt("Ingrese la cantidad");
    carrito.push(new Producto(id,nombreProd,precioProd,cantProd));
    id ++;
//Muestra el array cargado
    console.log(carrito);
    if (confirm("Desea seguir cargando mas productos al carrito?")==false) break;
}
//Recorro el array cargado mostrando los objetos y sus elementos
    let carritoLista = document.createElement("h3");
    carritoLista.innerHTML = "<h3>Carrito</h3>";
    document.body.append(carritoLista);

    for (const producto of carrito) {
        let items = document.createElement("ul");
        items.innerHTML = 
        `<li>El id del producto ingresado es:  ${producto.id}</li>
        <li>El producto ingresado es: ${producto.nombre}</li>
        <li>El precio del producto es: ${producto.precio}</li>
        <li>La cantidad ingresada es de: ${producto.cantidad}</li>
        <li>El precio total de este producto con IVA es de: ${producto.sumaIva()*producto.cantidad}</li>`;
        document.body.appendChild(items);
    }

//Filtro y busco los productos que tienen una cantidad igual o mayor a 10unidades para luego hacer un descuento por venta por mayor.
let ventaMayor = carrito.filter(producto => producto.cantidad >= 10);
if(ventaMayor.length>0){

    let ventaporMayor = document.createElement("h3");
    ventaporMayor.innerHTML = "<h3>Venta por mayor de los siguientes productos</h3>";
    document.body.append(ventaporMayor);


    for (const producto of ventaMayor) {
        let items = document.createElement("ul");
        items.innerHTML = 
        `<li>Producto: ${producto.nombre}</li>
        <li>Cantidad: ${producto.cantidad}</li>
        <li>Total de descuento por mayor: ${producto.descuentoMayor()*producto.cantidad}</li>`
        document.body.appendChild(items);
        productoDescuento+=producto.descuentoMayor()*producto.cantidad
    }
}

//Creo un array con solo los precios de los productos del array de carrito para luego aplicar el metodo reduce para sumar todos los precios.
const precioCarrito = carrito.map(elemto => elemto.sumaIva()*elemto.cantidad);
console.log(precioCarrito);
//Aplico reduce para sumar el total del carrito
let precioTotal = precioCarrito.reduce((a,b)=>a+b);

//Al total del carrito le quito el descuento que le hice a los productos que superaron o igualaron las 10 unidades, quedandome el precio total y final de venta.
precioTotal-=productoDescuento;

let precioCarritop = document.createElement("h4");
precioCarritop.innerHTML = 
`<h4>El total de carrito es de: ${precioTotal}</h4>`;
document.body.append(precioCarritop);

















