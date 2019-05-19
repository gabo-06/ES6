"use strict";

var promesa = new Promise(function (resolve, reject) {
  // Acción que se ejecutará
  setTimeout(function () {
    var exito = false;
    if (exito) resolve('La operación tuvo éxito');else resolve('La operación no tuvo éxito');
  }, 4000);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});