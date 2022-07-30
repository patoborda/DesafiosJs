    let secuencia = 1
    alert("Hola!")
    while (secuencia == 1) {
                    let repetir = prompt("Queres repetir algo?\n Escribe 1 para si.\n Escribe 2 para no")
                    if(repetir==1){
                        let pregunta = prompt('Cuantas veces quieres que se repita "papas fritas"')
                        let palabras = "papas fritas"
                            if (pregunta>0){
                                for(i=0;i<pregunta;i++){
                                    alert("Has repetido "+ palabras + "\n" + (i+1) + " veces")           
                                }
                                secuencia=prompt("Quieres repetir de nuevo?\n Escribe 1 para si.\n Escribe cualquier numero para no.")
                            }
                        }
                        
                        else if (repetir==2) {
                            alert("Que aburrido..."); break
                        }
                        else {
                            alert("Valor incorrecto.\n 1 Si\n 2 No")
                        }
        }      
                        
    