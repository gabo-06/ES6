import * as $ from 'jquery';
import { Persona } from './modulos/clasePersona';

function inicio()
{
    debugger
    const objPersona = new Persona('Gabriel Angel', 'Gil Fernandez', 32);
    const nombreCompleto = objPersona.obtenerNombreCompleto();
    const profesion = $("#profesion").text();
    
    alert(`${nombreCompleto} estudió ${profesion}`);
}

$(inicio);