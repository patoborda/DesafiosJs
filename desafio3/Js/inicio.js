
//************************************************ LOGEO ***************************************************************
let formulario = document.getElementById("login")
let registro = document.getElementById("registro")
let resultado = document.getElementById("error");

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

//************************************************************** Evento de logeo de usuario **************************************************************
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passLogin = document.getElementById("pass").value;

    const permiso = (userLogin == "") ? true : false
    permiso ? console.log("No puso usuario") : console.log("Si puso usuario")
                
        let usuarioEncontrado = usuarios.find(user => user.user === userLogin && user.pass === passLogin);
            const bandera  =  (usuarioEncontrado) ? true : false;  
            bandera ?  swal({
                title: "Bien hecho!",
                text: "Te has logeado con éxito!",
                icon: "success",
                button: "Continuar",
                timer: "3000",
            }).then(res => {if(res)(window.location.href = "compra.html")}) : resultado.innerHTML = `<p> Usuario o contraseña incorrecto </p>`            
    })
//************************************************************** Evento de registro de usuario **************************************************************
registro.addEventListener("click", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passLogin = document.getElementById("pass").value;

    const permiso = (userLogin == "") ? true : false
    permiso ? console.log("No puso usuario") : console.log("Si puso usuario")
    
        if (usuarios.find(user => user.user === userLogin)) {
            // alert("Usuario existente");**************************************************
            swal({
                title: "Usuario existente",
                text: "El nombre de usuario que usted ha ingresado ya esta en uso, si usted es el dueño de la cuenta inicie sesion!",
                icon: "error",
                button: "Continuar",
            })

        }else if( userLogin != "" && passLogin != "") {
            let nuevoUsuario = new Usuario (userLogin, passLogin);
            usuarios.push(nuevoUsuario);
            // alert("Te has registrado con exito!"); **************************************
            swal({
                title: "Bien hecho!",
                text: "Te has registrado con éxito!",
                icon: "success",
                button: "Continuar",
                timer: "3000",
              }).then(res => {
                console.log(res)
                if(res)(window.location.href = "compra.html");
              })
        }else {
            resultado.innerHTML = `<p> Completa todos los campos </p>`
        }
    
})

//******************************* API **********************************/


const log = position => {
    console.log(position);
}

const API_KEY = 'ebe9a7d6692142e664e6d16014cc1adc';

const fetchData = position => {
    const { latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
    }
const setWeatherData = data =>{
    console.log(data)
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity+'%' ,
        temperature: data.main.temp+'°C ',
        date: getDate(),
    }
    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key]
    });
}
const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${ ('0' + (date.getMonth()+ 1)).slice(-2)}-${date.getFullYear()}`;
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}

    
// //Prueba desctructuring
// const {user, pass} = usuario1
// console.log(user)
// console.log(pass)

// //Prueba de spread
// const datos = {
//     ...usuario1
// }
// console.log(datos)


