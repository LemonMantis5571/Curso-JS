
var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Huelin"] = "pollo.png";
imagenes ["DrarKon"] = "cerdo.png";

class Pokemon {

    constructor(nombre,tipo,vida,ataque){
        this.imagen = new Image();
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;


        this.imagen.src = imagenes[this.nombre];

    }
    mostrar (){
        document.write("<p>");
        document.body.appendChild(this.imagen)
        document.write("<strong>" + this.nombre + "</strong>");
        document.write("<br>");
    }


}

var cauchin = new Pokemon("Cauchin", "normal", 100, 30);

var huelin = new Pokemon("Huelin", "Dragon", 80, 30);

var DrarKon = new Pokemon("DrarKon", "Agua / Dragon", 90, 30);


DrarKon.mostrar();