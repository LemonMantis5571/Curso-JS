
var vp = document.getElementById("villaplatzi");

document.addEventListener("keyup", dibujar_teclado);

var papel = vp.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

var vaca = {
    url: "vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false

}

var pollo = {
    url: "pollo.png",
    cargaOk: false

}

var fondo = {
    url: "tile.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);


cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);


pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

function cargarFondo() {
    
    fondo.cargaOk = true;
    dibujar();
    
}

function cargarVaca() {
    
    vaca.cargaOk = true;
    dibujar();
    
}

function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar();

}

function cargarPollo() {
    
    pollo.cargaOk = true;
    dibujar();
    
}

function dibujar() {

   if (fondo.cargaOk) {
    papel.drawImage(fondo.imagen, 0, 0);
   }
    
   if (vaca.cargaOk) {
    var cantidad = aleatorio(1,5);
    for (var i = 0; i < cantidad; i++) {
        var x = aleatorio(0,420);
        var y = aleatorio(0,420);
        papel.drawImage(vaca.objeto, x+20, y+20);
        }
    }

    if (cerdo.cargaOk) {
     var cantidad = aleatorio(1,5);
     for (var i = 0; i < cantidad; i++) {
        var x = aleatorio(0,420);
        var y = aleatorio(0,420);
        papel.drawImage(cerdo.objeto, x+20, y+20);
        }
    }

    if (pollo.cargaOk) {
     var cantidad = aleatorio(1,5);
     for (var i = 0; i < cantidad; i++) {
        var x = aleatorio(0,420);
        var y = aleatorio(0,420);
        papel.drawImage(pollo.objeto, x+20, y+20);
        }
    }
}

function dibujar_teclado(e) {
    var movimiento = 50;
    var x = aleatorio(0,420);
    var y = aleatorio(0,420);

    switch (e.keyCode) {
        case teclas.UP:

            papel.drawImage(fondo.imagen, 0, 0);

            papel.drawImage(pollo.objeto, x, y-movimiento);
            y = y - movimiento;
            return y;
            break;
    
        case teclas.DOWN:
            papel.drawImage(fondo.imagen, 0, 0);
            papel.drawImage(pollo.objeto, x, y+movimiento);
            y = y + movimiento;
            return y;
            break;

        case teclas.RIGHT:
            papel.drawImage(fondo.imagen, 0, 0);
            papel.drawImage(pollo.objeto, x+movimiento, y);
            
            x = x + movimiento;
            return x;
            break;
        
        case teclas.LEFT:
            papel.drawImage(fondo.imagen, 0, 0);
            papel.drawImage(pollo.objeto, x-movimiento, y);
            x = x - movimiento;
            return x;
            break;
        default:
            break;
    }


}
    




function aleatorio(min,max)
{

   var resultado;
   resultado = Math.floor((max - min + 1) * Math.random()) + min;
   return resultado;
}