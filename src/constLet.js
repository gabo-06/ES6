class Usuario
{
	constructor(nombre,edad,correo)
	{
		this.nombre=nombre,
		this.edad = edad,
		this.correo = correo
	}
	
	mostrarInfo()
	{
		return `
			<b>Nombre: </b> ${this.nombre} <br />
			<b>Edad: </b> ${this.edad} <br />
			<b>Correo: </b> ${this.correo} <br />
			<hr />
		`;
	}
	
}

class Estudiante extends Usuario
{
	constructor(nombre, edad, correo, carrera)
	{
		super(nombre, edad, correo);
		this.carrera = carrera;
	}
	
	mostrarInfo()
	{
		return `
			<b>Nombre: </b> ${this.nombre} <br />
			<b>Edad: </b> ${this.edad} <br />
			<b>Correo: </b> ${this.correo} <br />
			<b>Carrera: </b> ${this.carrera} <br />
			<hr />
		`;
	}
}

const carlos = new Estudiante('Carlos', 23, 'charly@charly.com', 'Desarrollador Web');
document.write(carlos.mostrarInfo());

const alejandro = new Usuario('Alejandro', 30, 'alex@alex.com');
document.write(alejandro.mostrarInfo());
