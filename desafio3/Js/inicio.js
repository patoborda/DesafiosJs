let formulario = document.getElementById("login")
let registro = document.getElementById("registro")
let resultado = document.getElementById("error");

//***************************************************************************************************************
swal({
    title:"Bienvenido",
    timer: "3000",
})



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

    const permiso = (userLogin == "") ? true : false
    permiso ? console.log("No puso usuario") : console.log("Si puso usuario")
    
    // ******************** Probe varias formas y no se como hacer que aparezca la alerta swal y que luego me cambie de pagina con `window.location.href = "compra.html"`
    // ******************** siempre me pasa que hace o una o la otra. Tambien abajo es el codigo viejo que tenia y reemplace por el de arriba y de ninguna forma pude lograrlo.
    // ******************** Ademas cuando se logea, por un instante me aparece `Usuario o contraseña incorrecto` y se ve medio raro eso.
    // ******************** Te dejo Mati las formas que probe, te dejo esas 2 formas que intente arreglarlo pero no pude.
    for (let usuario of usuarios) {
        const bandera  =  (usuario.user == userLogin && usuario.pass == passLogin) ? true : false;  
        bandera ?  swal({
            title: "Bien hecho!",
            text: "Te has logeado con éxito!",
            icon: "success",
            button: "Continuar",
            timer: "3000",
        }) (window.location.href = "compra.html") : resultado.innerHTML = `<p> Usuario o contraseña incorrecto </p>`
        if (userLogin != "" && passLogin != "") resultado.innerHTML = `<p> Completa todos los campos </p>`;
//PRUEBA 1 **********************************************************************************************
        // for (let usuario of usuarios) {
        //     if (usuario.user == userLogin && usuario.pass == passLogin) {
        //      //alert("Has ingresado correctamente");
        //      swal({
        //          title: "Bien hecho!",
        //          text: "Te has logeado con éxito!",
        //          icon: "success",
        //          button: "Continuar",
        //      }) 
        //         window.location.href = "compra.html";
               
        //     }else {
        //         resultado.innerHTML = `<p> Usuario o contraseña incorrecto </p>`
        //     }
        // }
    
        }  
        
//PRUEBA 2 **********************************************************************************************
    // cambiarPagina= false;

    // for (let usuario of usuarios) {
    //     if ((usuario.user == userLogin && usuario.pass == passLogin) == true) {
    //         cambiarPagina = true;
    //         window.location.href = "compra.html";    
    //     // } else {
    //     //     resultado.innerHTML = `<p> Usuario o contraseña incorrecto </p>`;
    //     // }
    // }
    // if (cambiarPagina == true) {
    //     swal({
    //                 title: "Bien hecho!",
    //                 text: "Te has logeado con éxito!",
    //                 icon: "success",
    //                 button: "Continuar",
    //                 timer: "3000",
    //             })
    // }else {
    //     resultado.innerHTML = `<p> Usuario o contraseña incorrecto </p>`;
    // }

    // if (cambiarPagina == true) window.location.href = "compra.html";

})


registro.addEventListener("click", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passLogin = document.getElementById("pass").value;

    const permiso = (userLogin == "") ? true : false
    permiso ? console.log("No puso usuario") : console.log("Si puso usuario")

    for (let usuario  of usuarios) {
        if (userLogin == usuario.user ) {
            // alert("Usuario existente");***************************************************************************************************************
            swal({
                title: "Usuario existente",
                text: "El nombre de usuario que usted ha ingresado ya esta en uso, si usted es el dueño de la cuenta inicie sesion!",
                icon: "error",
                button: "Continuar",
              });
        }else if( userLogin != "" && passLogin != "") {
            let nuevoUsuario = new Usuario (userLogin, passLogin);
            usuarios.push(nuevoUsuario);
            // alert("Te has registrado con exito!"); ***************************************************************************************************************
            swal({
                title: "Bien hecho!",
                text: "Te has registrado con éxito!",
                icon: "success",
                button: "Continuar",
                timer: "3000",
              }); 
        }else {
            resultado.innerHTML = `<p> Completa todos los campos </p>`
        }
    }
})




//Prueba desctructuring
const {user, pass} = usuario1
console.log(user)
console.log(pass)

//Prueba de spread
const datos = {
    ...usuario1
}
console.log(datos)


