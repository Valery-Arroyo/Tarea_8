$(document).ready(function () {
  $.getJSON("https://www.restcountries.com/v3.1/all?fields=name", function (data) {

    const $select = $("#nacionalidad");

    $.each(data, function (i, country) {
      $select.append(
        `<option value="${country.cca3}">${country.name.common}</option>`
      );
    });

  }).fail(function () {
    alert("No se pudo cargar la lista de países.");
  });
});
