
//************************************************ LOGEO ***************************************************************
let formulario = document.getElementById("login")
let registro = document.getElementById("registro")
let resultado = document.getElementById("error");
//Alerta de bienvenida!
swal({
    title:"Bienvenido",
    timer: "3000",
})
// Constructor de usuario
    class Usuario {
        constructor(user, pass) {
            this.user = user;
            this.pass = pass;
        }
    }

    // Array de usuarios donde voy a cargar los registrados
    let usuarios  = [];
    
    //************************************ "base de datos" ************************************
    // Esto simula una base de datos ya precargada
    
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
    //Carga de base de datos al local storage. Si el ls esta vacio y queremos logear con x usuario sin registrar da null por ende va a tomar la "base de datos" ya predefinida  y lo va a subir al ls
    //Esto nos evita que nos de un error de null al utilizar el metodo find en un array vacio. A su vez evitamos que se pise la "base de datos" con los usuarios registrados.
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || usuarios;
    let usuariosAlmacenados = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", usuariosAlmacenados);

    // Prueba operadores ternarios
    const permiso = (userLogin == "") ? true : false
    permiso ? console.log("No puso usuario") : console.log("Si puso usuario")
         // Utilizacion del metodo find, en vez de usar un for of, con el find es mucho mas eficiente       
        let usuarioEncontrado = usuarios.find(user => user.user === userLogin && user.pass === passLogin);
            const bandera  =  (usuarioEncontrado) ? true : false;  
            bandera ?  swal({
                title: "Bien hecho!",
                text: "Te has logeado con éxito!",
                icon: "success",
                button: "Continuar",
            }).then(res => {if(res)(window.location.href = "compra.html")}) : resultado.innerHTML = `<p> Usuario o contraseña incorrecto </p>`            
    })
//************************************************************** Evento de registro de usuario **************************************************************
registro.addEventListener("click", (e) => {
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passLogin = document.getElementById("pass").value;
    //Aplicacion de OR por si el ls esta vacio como explique en la linea 41/42
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || usuarios;
    // Prueba operadores ternarios
    const permiso = (userLogin == "") ? true : false
    permiso ? console.log("No puso usuario") : console.log("Si puso usuario")
        //Utilizacion del metodo find para evitar re-registros de usuarios ya creados con el mismo nombre.
        if (usuarios.find(user => user.user === userLogin)) {
            // alert("Usuario existente");*********
            swal({
                title: "Usuario existente",
                text: "El nombre de usuario que usted ha ingresado ya esta en uso, si usted es el dueño de la cuenta inicie sesion!",
                icon: "error",
                button: "Continuar",
            })

        }else if( userLogin != "" && passLogin != "") {    //Con este else if evitamos que el usuario ponga en blanco las casillas del registro
            let nuevoUsuario = new Usuario (userLogin, passLogin);
            usuarios.push(nuevoUsuario);
            console.log(usuarios)
            let usuariosAlmacenados = JSON.stringify(usuarios);
            localStorage.setItem("usuarios", usuariosAlmacenados);
            // alert("Te has registrado con exito!"); **********
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
// Uso de fetch
const fetchData = position => {
    const { latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
    }

// Manejo de los datos de la api.    
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
//Setear fecha
const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${ ('0' + (date.getMonth()+ 1)).slice(-2)}-${date.getFullYear()}`;
}

//Geolocalizador de usuario
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}



