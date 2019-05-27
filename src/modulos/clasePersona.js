export class Persona
{
    constructor(nombres, apellidos, edad)
    {
        debugger
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    obtenerNombreCompleto()
    {
        return `${this.nombres} ${this.apellidos}`;
    }

    mostrarInfo()
    {
        return `${this.nombres} ${this.apellidos} ama a su mujer`;
    }    
}