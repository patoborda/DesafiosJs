//Declaracion de variables

let carga;
let id=0;

// let valorTotalP1 = 0;
// let valorTotalP2 = 0;
// let valorTotalP3 = 0;
// let valorTotalP4 = 0;
// let valorDescuento = 0.1;

//Funciones
// const suma = (a,b) => { return a + b }
// const resta = (a,b) => { return a - b }
// const multiplicacion = (a,b) => { return a * b }


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
        return this.precio = this.precio *1.21;
    }
}
//Array vacio
const productos = [];

//Carga de array
do {
    let carga = prompt("Ingrese nombre de producto o ESC para salir")
    console.log(carga)
    if (carga != 'ESC'){
        let nombreProd = carga;
        let precioProd = prompt("Ingrese el precio del producto");
        let cantProd = prompt("Ingrese la cantidad de stock del producto");
        productos.push(new Producto(id,nombreProd,precioProd,cantProd))
        id ++;
        if (confirm("Desea seguir cargando mas productos a la lista?")==false){
            break;
        }    
    }
    else{
        break;
    }
}

while(carga != 'ESC') {
//Muestra el array cargado
    console.log(productos);
//Recorro el array cargado mostrando los objetos y sus elementos
    for (const producto of productos) {
        console.log("El id del producto ingresado es: " + producto.id);
        console.log("El producto ingresado es: " + producto.nombre);
        console.log("El precio del producto es: " + producto.precio);
        console.log("La cantidad de stock del producto ingresado es de: " + producto.cantidad);
        console.log("El precio del producto con IVA es de: " + producto.sumaIva());
    }
}


















