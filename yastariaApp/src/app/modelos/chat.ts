export class Chat{
    constructor(
        public usuarioEmisor:string,
        public hora: string, 
        public usuarioReceptor:string, 
        public mensaje:string){
    }
}