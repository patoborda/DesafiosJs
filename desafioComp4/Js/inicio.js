let formulario = document.getElementById("login")
let registro = document.getElementById("registro")
let resultado = document.getElementById("error");

    class Usuario {
        constructor(user, pass) {
            this.user = user;
            this.pass = pass;
        }
    }

//"base de datos"
let usuarios = [];
let usuario1 = new Usuario("PATO", "123");
let usuario2 = new Usuario("LUCIO", "321");
let usuario3 = new Usuario("LEANDRO", "111");
usuarios.push(usuario1, usuario2, usuario3);


console.log(usuarios)

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passLogin = document.getElementById("pass").value;

    // Uso de operador ternario *************************************************************************************************************
    const permiso = (userLogin == "") ? true : false
    permiso ? console.log("No puso usuario") : console.log("Si puso usuario")

    for (let usuario of usuarios) {
        if (usuario.user == userLogin && usuario.pass == passLogin) {
            alert("Has ingresado correctamente");
            window.location.href = "compra.html";
            break;
        }else {
            resultado.innerHTML = `<p> Usuario o contraseña incorrecto </p>`
        }
    }
})
registro.addEventListener("click", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passLogin = document.getElementById("pass").value;
// Uso de operador ternario *************************************************************************************************************
    const permiso = (userLogin == "") ? true : false
    permiso ? console.log("No puso usuario") : console.log("Si puso usuario")

    for (let usuario  of usuarios) {
        if (userLogin == usuario.user ) {
            alert("Usuario existente");
            break;
        }else if( userLogin != "" && passLogin != "") {
            let nuevoUsuario = new Usuario (userLogin, passLogin);
            usuarios.push(nuevoUsuario);
            alert("Te has registrado con exito!");
            break;
        }
        else {
            resultado.innerHTML = `<p> Completa todos los campos </p>`
        }
    }
})



//Practicando  Destructuring y Spread *************************************************************************************************************

//Prueba desctructuring
const {user, pass} = usuario1
console.log(user)
console.log(pass)

//Prueba de spread
const datos = {
    ...usuario1
}
console.log(datos)


