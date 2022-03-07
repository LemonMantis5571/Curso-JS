var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;

var colorsote  = "#AAF";

var i = 0;

var yi, xf;

while( i < lineas){
    yi = i * 10;
    xf = (i+1) * 10;
    dibujarLinea(colorsote, 0, yi, xf, 300);
    console.log("Linea " + i);
    i++;
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

