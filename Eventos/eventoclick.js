var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,    
    LEFT: 37

};

var x = 150;
var y = 150;

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var c = document.getElementById("area_canvas")
var papel = c.getContext("2d");

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarTeclado(e) {
    var movimiento = 10;
    var colorsote = "blue";
    switch (e.keyCode) {
        case teclas.UP:
            dibujarLinea(colorsote, x, y, x, y-movimiento, papel);
            y = y - movimiento;
            break;
    
        case teclas.DOWN:
            dibujarLinea(colorsote, x, y, x, y+movimiento, papel);
            y = y + movimiento;
            break;
        
        case teclas.RIGHT:
            dibujarLinea(colorsote, x, y, x+movimiento, y, papel);
            x = x + movimiento;
            break;

        case teclas.LEFT:
            dibujarLinea(colorsote, x, y, x-movimiento, y, papel);
            x = x - movimiento;
            break;
        default:
            break;
    }

}



function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();

    lienzo.strokeStyle = color;

    lienzo.lineWidth = 3;

    lienzo.moveTo(x_inicial,y_inicial);

    lienzo.lineTo(x_final,y_final);

    lienzo.stroke();
    lienzo.closePath();


}