//Constructor para luego cargar productos.
class Producto {
    constructor(nombre,precio,cantidad) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.cantidad = cantidad;
    }
    sumaIva() {
        return this.precio *1.21;
    }
    descuentoMayor() {
        return this.precio *1.21 * 0.1;
    }
}
function sumaIva(precio) {
    return precio*1.21;
}

    let carga;
    let productoDescuento=0;
    const carrito = [];

    let form = document.getElementById("formProductos");
    let mostrarProducto1 = document.getElementById("mostrarProducto"); 
    let mostrarCarrito1 = document.getElementById("mostrarCarrito"); 
    let btnMostrar = document.getElementById("btnMostrar");
    let bandera = false;

    let nombreProducto = form.children[1].value;
    let precioProducto = form.children[3].value;
    let cantidadProducto = form.children[5].value;

    
    function validarDatos() {
        nombreProducto  = form.children[1].value;
        precioProducto = form.children[3].value;
        cantidadProducto = form.children[5].value;

        if(nombreProducto == '' || precioProducto == '' || cantidadProducto == ''){
            alert("Complete todos los campos para continuar")
            bandera = false;
        } else {
            bandera = true;
        }
    }

    function agregarProd(e){
        e.preventDefault()
        validarDatos();
        if(bandera == true){
            if(confirm("Desea agregar el producto al carrito?") == true){
                let datos = e.target
                carrito.push(new Producto(nombreProducto,precioProducto,cantidadProducto));
                datos.children[1].value = "";
                datos.children[3].value = "";
                datos.children[5].value = "";
                mostrarProducto1.innerHTML = "";
                mostrarProd()
            } else {
                alert("No se agrego producto a carrito")
            } 
            } 
    }

    const mostrarProd = () => {
            mostrarProducto1.innerHTML = 
            `<li>El producto ingresado es: ${nombreProducto}</li>
            <li>La cantidad ingresada es de: ${cantidadProducto}</li>     
            <li>El precio del producto es: ${precioProducto}</li>
            <li>El total con IVA es de: ${sumaIva(precioProducto)}</li>`;
        }
    
        
    const mostrarCarrito = (e) => {
        productoDescuento=0; 
        e.preventDefault();
        mostrarCarrito1.innerHTML = "<h3>Carrito</h3>";
       for (const producto of carrito) {
            mostrarCarrito1.innerHTML += `
            <p>Producto: ${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>`;
       }
       //Filtro y busco los productos que tienen una cantidad igual o mayor a 10unidades para luego hacer un descuento por venta por mayor.
       let ventaMayor = carrito.filter(producto => producto.cantidad >= 10);
       if(ventaMayor.length>0){  
         mostrarCarrito1.innerHTML += "<h3>Venta por mayor de los siguientes productos</h3>";
           for (const producto of ventaMayor) {
           mostrarCarrito1.innerHTML += 
           `<p>Producto: ${producto.nombre}</p>
           <p>Cantidad: ${producto.cantidad}</p>
           <p>Total de descuento por mayor: ${producto.descuentoMayor()*producto.cantidad}</p>`
           productoDescuento+=producto.descuentoMayor()*producto.cantidad
           }
       }
        //Creo un array con solo los precios de los productos del array de carrito para luego aplicar el metodo reduce para sumar todos los precios.
        const precioCarrito = carrito.map(elemto => elemto.sumaIva()*elemto.cantidad);
        //Aplico reduce para sumar el total del carrito
        let precioTotal = precioCarrito.reduce((a,b)=>a+b);
        //Al total del carrito le quito el descuento que le hice a los productos que superaron o igualaron las 10 unidades, quedandome el precio total y final de venta.
        precioTotal-=productoDescuento;
        mostrarCarrito1.innerHTML += 
        `<h4>El total de carrito es de: ${precioTotal}</h4>`;
            }
    console.log(carrito)
    
    form.addEventListener("submit", agregarProd);
    btnMostrar.addEventListener("click", mostrarCarrito)
    
