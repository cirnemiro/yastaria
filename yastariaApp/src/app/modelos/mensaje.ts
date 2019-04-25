export class Mensage{    
    constructor(
        public idMsg: number,
        public idOrig: number,
        public idDest: number,
        public texto: string,
        public msgHora: number    
    ){}
}