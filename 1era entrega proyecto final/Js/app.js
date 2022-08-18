//Declaracion de variables

let carga;
let id=0;
let productoDescuento=0;

//Funciones
const suma = (a,b) => { return a + b }
const resta = (a,b) => { return a - b }
const multiplicacion = (a,b) => { return a * b }


//Comienzo del algoritmo

alert("Bienvenido, ha ingresado a nuestro sitio.\n")
//Array de usuarios
const listaUsuarios = [];

//Cargo el array de usuarios con el nombre del usuario que va a cargar items a la lista
let usuario = prompt("Ingrese su nombre")
alert("Hola "+ usuario)
listaUsuarios.push(usuario.toUpperCase());
console.log(listaUsuarios)


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
do {
    let carga = prompt("Ingrese nombre de producto o ESC para salir")
    console.log(carga)
    if (carga != 'ESC'){
        let nombreProd = carga;
        let precioProd = prompt("Ingrese el precio del producto");
        let cantProd = prompt("Ingrese la cantidad");
        carrito.push(new Producto(id,nombreProd,precioProd,cantProd))
        id ++;
        if (confirm("Desea seguir cargando mas productos al carrito?")==false){
            break;
        }    
    }
    else{
        break;
    }
}

while(carga != 'ESC') {
//Muestra el array cargado
    console.log(carrito);
//Recorro el array cargado mostrando los objetos y sus elementos
    for (const producto of carrito) {
        console.log("El id del producto ingresado es: " + producto.id);
        console.log("El producto ingresado es: " + producto.nombre);
        console.log("El precio del producto es: " + producto.precio);
        console.log("La cantidad ingresada es de: " + producto.cantidad);
        console.log("El precio total de este producto con IVA es de: " + producto.sumaIva()*producto.cantidad)+ "\n";
    }
}

//Filtro y busco los productos que tienen una cantidad igual o mayor a 10unidades para luego hacer un descuento por venta por mayor.
let ventaMayor = carrito.filter(producto => producto.cantidad >= 10);
console.log(ventaMayor);
console.log("Venta por mayor de los siguientes productos: ");

for (const producto of ventaMayor) {
    console.log("Producto: " + producto.nombre);
    console.log("Cantidad: " + producto.cantidad);
    console.log("Total de descuento por mayor: " +  producto.descuentoMayor()*producto.cantidad);
    productoDescuento+=producto.descuentoMayor()*producto.cantidad;
}

//Creo un array con solo los precios de los productos del array de carrito para luego aplicar el metodo reduce para sumar todos los precios.
const precioCarrito = carrito.map(elemto => elemto.sumaIva()*elemto.cantidad);
console.log(precioCarrito);
//Aplico reduce para sumar el total del carrito
let precioTotal = precioCarrito.reduce((a,b)=>a+b);

//Al total del carrito le quito el descuento que le hice a los productos que superaron o igualaron las 10 unidades, quedandome el precio total y final de venta.
precioTotal-=productoDescuento;

console.log("El total de carrito es de: " + precioTotal);

















