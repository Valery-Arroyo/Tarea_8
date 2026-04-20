function MensajeTipoSeguro() {

    var seguro = document.getElementById("seguro").value;

    if (seguro == "5.45") {

        alert(
            "Protección Básica Obligatoria (PBO)\n\n" +
            "Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito.\n" +
            "Costo de alquiler diario: $ 5.45 por día."
        );

    }
    else if (seguro == "9.50") {

        alert(
            "Protección Extendida de Daños (PED)\n\n" +
            "Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones.\n" +
            "Costo de alquiler diario: $ 9.50 por día."
        );

    }
    else if (seguro == "11.25") {

        alert(
            "Protección Gasto Médicos (PGM)\n\n" +
            "Cubre la Protección Extendida de Daños (PED) más gastos médicos para los ocupantes del vehículo.\n" +
            "Costo de alquiler diario: $ 11.25 por día."
        );

    }

}