export class Usuario {
  constructor(
    public id: number, 
    public nombre: string, 
    public descripcion: string, 
    public foto: string, 
    public puntuacion: number,
    public apellidos : string,
    public correo: string,
    public profesion: string,
    public distrito: string,
    public contra:string,
    
    public repitecontra:string) {

  }
}
