function Calcular() {

    var fechaInicio = document.getElementsByName("fechaRetiro")[0].value;
    var fechaFin = document.getElementsByName("fechadevolucion")[0].value;

    if (fechaInicio == "" || fechaFin == "") {

        alert("Debe seleccionar ambas fechas.");
        return;

    }

    var tarifaVehiculo = document.getElementById("tipoVehiculo").value;
    var tarifaSeguro = document.getElementById("seguro").value;

    var f1 = new Date(fechaInicio);
    var f2 = new Date(fechaFin);

    var dias = Math.ceil((f2 - f1) / (1000 * 60 * 60 * 24));

    if (dias < 3 || dias > 365) {

        alert("Los días deben estar entre 3 y 365 días.");
        return;

    }

    document.getElementsByName("dias")[0].value = dias;

    var TD = parseFloat(tarifaVehiculo) +
             parseFloat(tarifaSeguro);

    var descuentoTD = 0;

    if (dias > 30 && dias < 120) {

        descuentoTD = 0.15;

    }
    else if (dias >= 120 && dias <= 365) {

        descuentoTD = 0.25;

    }

    TD = TD - (TD * descuentoTD);

    document.getElementsByName("td")[0].value =
        TD.toFixed(2);

    CalcularTotal(TD, dias);

}

function CalcularTotal(TD, dias) {

    var Desc = 0;

    var total = (TD * dias) - ((TD * dias) * Desc);

    document.getElementsByName("totalPagar")[0].value =
        total.toFixed(2);

}

function Guardar() {

    // Obtener valores
    var fechaInicio = document.getElementsByName("fechaRetiro")[0].value;
    var fechaFin = document.getElementsByName("fechadevolucion")[0].value;

    var dias = document.getElementsByName("dias")[0].value;
    var td = document.getElementsByName("td")[0].value;
    var total = document.getElementsByName("totalPagar")[0].value;

    var vehiculo = document.getElementById("tipoVehiculo").selectedOptions[0].text;
    var seguro = document.getElementById("seguro").selectedOptions[0].text;

    var pais = document.getElementById("nacionalidad").selectedOptions[0].text;

    // Crear objeto cotización
    var cotizacion = {

        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        dias: dias,
        tarifaDiaria: td,
        totalPagar: total,
        vehiculo: vehiculo,
        seguro: seguro,
        pais: pais

    };

    // Guardar en LocalStorage
    localStorage.setItem(
        "ultimaCotizacion",
        JSON.stringify(cotizacion)
    );

    alert("Cotización guardada correctamente.");

}

window.onload = function () {

    MostrarUltimaCotizacion();

};

function MostrarUltimaCotizacion() {

    var datos = localStorage.getItem("ultimaCotizacion");

    if (datos != null) {

        var cotizacion = JSON.parse(datos);

        document.getElementsByName("fechaRetiro")[0].value =
            cotizacion.fechaInicio;

        document.getElementsByName("fechadevolucion")[0].value =
            cotizacion.fechaFin;

        document.getElementsByName("dias")[0].value =
            cotizacion.dias;

        document.getElementsByName("td")[0].value =
            cotizacion.tarifaDiaria;

        document.getElementsByName("totalPagar")[0].value =
            cotizacion.totalPagar;

    }

}