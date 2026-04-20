// Tabla de imágenes y descripciones

var vehiculos = {

    "Compacto": [
        { img: "Compacto1.png", desc: "KIA PICANTO, Año 2016" },
        { img: "Compacto2.png", desc: "FORD FIESTA ST, Año 2015" },
        { img: "Compacto3.png", desc: "PEUGEOT 308, Año 2018" }
    ],

    "Mediano": [
        { img: "Mediano1.png", desc: "HONDA CITY CAR, Año 2017" },
        { img: "Mediano2.png", desc: "MERCEDES SLS, Año 2015" },
        { img: "Mediano3.png", desc: "FORD FIESTA ST, Año 2016" }
    ],

    "Todo Terreno": [
        { img: "TodoTerreno1.png", desc: "TOYOTA FJ CRUISER, Año 2016" },
        { img: "TodoTerreno2.png", desc: "TOYOTA Prado, Año 2018" },
        { img: "TodoTerreno3.png", desc: "NISSAN JUKE, Año 2017" }
    ],

    "Familiar": [
        { img: "Familiar1.png", desc: "TOYOTA SIENNA, Año 2018" },
        { img: "Familiar2.png", desc: "DODGE GRAND CARAVANE, Año 2015" },
        { img: "Familiar3.png", desc: "HYUNDAI ELANTRA, Año 2016" }
    ]

};

function mostrarTodo() {

    var tipo = document.getElementById("tipoVehiculo");
    var tipoSeleccionado = tipo.options[tipo.selectedIndex].text;

    var lista = vehiculos[tipoSeleccionado];

    document.getElementById("img1").src = "images/" + lista[0].img;
    document.getElementById("img2").src = "images/" + lista[1].img;
    document.getElementById("img3").src = "images/" + lista[2].img;
    document.getElementById("imgVista").src =
        "images/" + lista[0].img;


    document.getElementById("infTCar").innerHTML =
        lista[0].desc;
}

function mostrarImagen(num) {

    var tipo = document.getElementById("tipoVehiculo");
    var tipoSeleccionado = tipo.options[tipo.selectedIndex].text;

    var lista = vehiculos[tipoSeleccionado];

    var indice = num - 1;

    document.getElementById("imgVista").src =
        "images/" + lista[indice].img;

    document.getElementById("infTCar").innerHTML =
        lista[indice].desc;
}