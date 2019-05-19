"use strict";

var frutas = ['manzana', 'pepino', 'naranja', 'zandia', 'piña', 'arandano', 'mango'];
var search = frutas.find(function (fruta) {
  return fruta.length > 7;
});
console.log(search);