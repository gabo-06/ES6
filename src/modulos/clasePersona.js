export class Persona
{
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo()
    {
        // document.write(`${this.nombre} tiene ${this.edad} años`);
        return `${this.nombre} ama a su mujer`;
    }    
}