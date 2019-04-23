export class Usuario {
  constructor(
    public id: number, 
    public nombre: string, 
    public apellidos: string, 
    public genero: string,
    public fechaNacimiento: string,
    public descripcion: string, 
    public foto: string, 
    public puntuacion: number,
    public ofrece: string[],
    public necesita: string[],
    public correo: string,
    public contra:string,
    public poblacion: string,
    public barrio: string) {
  }
}
