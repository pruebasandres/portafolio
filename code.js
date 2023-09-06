function edad(){
    var edad = prompt("¿Cuántos años tienes?: ");

    if(Number(edad)==edad){
        if(edad>18){
            document.getElementById("respuesta1").innerHTML = "Tiene la edad para conducir";
        }
        else{
            document.getElementById("respuesta1").innerHTML = "La persona NO tiene la edad para conducir";
        }
    }
    else{
        alert("Inserte un valor numérico");
    }
}

function nota(){
    do{
        var nota=prompt("Ingrese la nota");
        if (Number(nota)==nota){
            if(nota>0&&nota<=10){
                if(nota<3){
                    alert("Muy deficiente");
                }
                else if(nota<5){
                    alert("Deficiente");
                }
                else if(nota<6){
                    alert("Suficiente");
                }
                else if(nota<7){
                    alert("Bien");
                }
                else if(nota<9){
                    alert("Notable");
                }
                else if(nota>=9){
                    alert("Sobresaliente");
                }

            }
            else{
            alert("Nota errada, debe ser entre 0 y 10");} 
        }
        else{
            if(nota!=undefined){
                alert("Introduce un valor valido");
            }
        }
       
    } 

    while(nota!=undefined);

}

function cadena(){
    
        var resultado="";

        do{
            var cadena=prompt("Introduzca una palabra");

            if(resultado==""){
                resultado = resultado + cadena;
            }
            else{
                resultado = resultado + " - " + cadena;
            }
        }
        while(confirm("¿Desea continuar?"));

       // document.write(resultado);
        document.getElementById("respuesta3").innerHTML = resultado;
    

}

function suma(){

    var suma = 0;

        do{
            var numero = prompt("Introduzca el número");

            if(Number(numero)==numero){
                numero = Number(numero);
                suma = suma + numero;
            }
            else{
                if(numero!=undefined){
                    alert(numero + " no es un número válido");
                }
            }
        }
        while(numero!=undefined);

        document.getElementById("respuesta4").innerHTML = suma;

}