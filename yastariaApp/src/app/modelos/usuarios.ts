export class Usuario {
  constructor(
    public id: number,   
    public nombre: string, 
    public apellidos: string, 
    public fechaNacimiento: string,  
    public correo: string,
    public telefono: number,
    public barrio: string,
    public contra:string,
    public ofrece: string[],
    public necesita: string[], 
    public tiempo: string,
    public tema: string,
    public descripcion: string,
    public foto: string,
    public puntuacion: number
    
  ) 

    {
  }
}
