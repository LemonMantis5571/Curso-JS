var text  = document.getElementById("texto_lineas");
var boton = document.getElementById("boton_lineas"); 
var d = document.getElementById("dibujito");
boton.addEventListener("click", dibujoPorclick);


var lienzo = d.getContext("2d");


var ancho = d.width;
var alto = d.height;
var yi, xf;
var colorsote = "#AAF";



function dibujoPorclick(){

    var lineas = parseInt(text.value);
    var espacio  = ancho / lineas;
    alert("Si funciona el codigo " + lineas);

    for (var i = 0; i < lineas; i++) {
        yi = i * espacio;
        xf = (i+1) * espacio;
        dibujarLinea(colorsote, 0, yi, xf, 300);
        console.log("Linea " + i);
    }


}



function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();

    lienzo.strokeStyle = color;

    lienzo.moveTo(x_inicial,y_inicial);

    lienzo.lineTo(x_final,y_final);

    lienzo.stroke();
    lienzo.closePath();


}
