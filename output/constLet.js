"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(nombre, edad, correo) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre, this.edad = edad, this.correo = correo;
  }

  _createClass(Usuario, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n\t\t\t<b>Nombre: </b> ".concat(this.nombre, " <br />\n\t\t\t<b>Edad: </b> ").concat(this.edad, " <br />\n\t\t\t<b>Correo: </b> ").concat(this.correo, " <br />\n\t\t\t<hr />\n\t\t");
    }
  }]);

  return Usuario;
}();

var Estudiante =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Estudiante, _Usuario);

  function Estudiante(nombre, edad, correo, carrera) {
    var _this;

    _classCallCheck(this, Estudiante);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Estudiante).call(this, nombre, edad, correo));
    _this.carrera = carrera;
    return _this;
  }

  _createClass(Estudiante, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      return "\n\t\t\t<b>Nombre: </b> ".concat(this.nombre, " <br />\n\t\t\t<b>Edad: </b> ").concat(this.edad, " <br />\n\t\t\t<b>Correo: </b> ").concat(this.correo, " <br />\n\t\t\t<b>Carrera: </b> ").concat(this.carrera, " <br />\n\t\t\t<hr />\n\t\t");
    }
  }]);

  return Estudiante;
}(Usuario);

var carlos = new Estudiante('Carlos', 23, 'charly@charly.com', 'Desarrollador Web');
document.write(carlos.mostrarInfo());
var alejandro = new Usuario('Alejandro', 30, 'alex@alex.com');
document.write(alejandro.mostrarInfo());