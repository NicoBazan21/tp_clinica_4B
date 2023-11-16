export class Especialista
{
  id: string;
  nombre: string;
  apellido: string;
  edad: number;
  dni: number;
  mail: string;
  especialidad: string;
  clave: string;
  habilitado: boolean;
  imagenUno: string;
  rol: string;

  constructor(id: string,
    nombre: string,
    apellido: string,
    mail: string,
    especialidad: string,
    edad: number,
    dni: number,
    clave: string,
    habilitado: boolean,
    imagenUno: string,
    rol:string)
  {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.especialidad = especialidad;
    this.edad = edad;
    this.dni = dni;
    this.clave = clave;
    this.habilitado = habilitado;
    this.imagenUno = imagenUno;
    this.rol = rol;
  }
}
