//Declaracion de variables
let continuar = 1;
let cuponContinuar = 0;
let cantProd1 = 0;
let cantProd2 = 0;
let cantProd3 = 0;
let cantProd4 = 0;
let valorProd1 = 100;
let valorProd2 = 200;
let valorProd3 = 300;
let valorProd4 = 400;
let valorTotalP1 = 0;
let valorTotalP2 = 0;
let valorTotalP3 = 0;
let valorTotalP4 = 0;
let valorDescuento = 0.1;
let cupon=0;
//Funciones
const suma =  (a,b) => {return a + b}
const resta =  (a,b) => {return a - b}
const multiplicacion = (a,b) => {return a * b}
const calculariva = valorTotal => valorTotal * 1.21



//Comienzo del algoritmo
    
alert ("Bienvenido, ha ingresado a nuestro sitio.\n")

//Pregunto si tiene un cupon de descuento para hacer un descuento del valor final
while (cuponContinuar!=1) {
    cupon = Number(prompt("Tiene un codigo de descuento?\n Ingrese el codigo"))
    if (cupon == 1234){
        alert("Ha ingresado satisfactoriamente el cupon de descuento!\n Su descuento es del 10%!")
        break;
    }
    else {
        alert("Codigo incorrecto")
        cuponContinuar = prompt("Continuar sin cupon?\n 1- Si\n 2- No")
    }
}

//Muestro una lista de los productos, uso while para preguntar al usuario si quiere seguir agregando items, o si se olvido de agregar mas items

while (continuar == 1 ) { 

    let productos = prompt("Seleccione los productos que desea comprar de la siguiente lista: \n 1- Producto 1.\n 2- Producto 2.\n 3- Producto 3.\n 4- Producto 4.\n")

        if (productos == 1) {
            
            prod1 = Number(prompt("Escriba la cantidad que desee agregar al carrito \n Valor del producto es de " + valorProd1 + "$"))
            cantProd1 = suma(prod1,cantProd1)
            valorTotalP1 = multiplicacion(cantProd1,valorProd1)
        }
        else if (productos == 2){
            prod2 = Number(prompt("Escriba la cantidad que desee agregar al carrito \n Valor del producto es de " + valorProd2 + "$"))
            cantProd2 = suma(prod2,cantProd2)
            valorTotalP2 = multiplicacion(cantProd2,valorProd2)
        }
        else if (productos == 3){
            prod3 = Number(prompt("Escriba la cantidad que desee agregar al carrito \n Valor del producto es de " + valorProd3 + "$"))
            cantProd3 = suma(prod3,cantProd3)
            valorTotalP3 = multiplicacion(cantProd3,valorProd3)
        }
        else if (productos == 4){
            prod4 = Number(prompt("Escriba la cantidad que desee agregar al carrito \n Valor del producto es de " + valorProd4 + "$"))
            cantProd4 = suma(prod4,cantProd4)
            valorTotalP4 = multiplicacion(cantProd4,valorProd4)
        }
        else {
            alert("Ha ingresado un item incorrecto, vuelva a ingresar")
            continue;
        } 
        continuar = prompt("Desea seguir agregando items al carrito?\n Pulsa 1 para Si o cualquier numero para No.")
        
    }

 

    for (let i = 0; i < 4; i++) { 
        if (i==0) {
            alert("Usted tiene en el carrito \n" + cantProd1 + " cantidades del producto " + (i+1))  
        }
        else if (i==1){
            alert("Usted tiene en el carrito \n" + cantProd2 + " cantidades del producto " + (i+1))
        }
        else if (i==2){
            alert("Usted tiene en el carrito \n" + cantProd3 + " cantidades del producto " + (i+1))
        }
        else if (i==3){
            alert("Usted tiene en el carrito \n" + cantProd4 + " cantidades del producto " + (i+1))
        }
    }

    let total= valorTotalP1 + valorTotalP2 + valorTotalP3 + valorTotalP4


//Muestro en pantalla los precios con iva, sin iva y con descuento si el cupon es valido, es decir igual a "1234"
    if (cupon!==1234){
        alert ("No ha utilizado un codigo de descuento. =( \nEl valor total sin iva es de: " + (total) + "$" + "\nEl valor total con iva es de: " + calculariva(total) + "$")  
    }
    else {
        let totalDescuento = (calculariva(total))*valorDescuento

        alert ("Ha utilizado un codigo de descuento!\nEl valor total sin iva es de: " + (total) + "$" + "\nEl valor total con iva es de: " + calculariva(total) + "$" + "\nEl total con descuento es de: " + resta(calculariva(total),totalDescuento) + "$")
    }
    

    

    
