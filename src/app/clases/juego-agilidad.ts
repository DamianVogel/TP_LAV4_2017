import { Operator } from "rxjs";

export class JuegoAgilidad {

    numeroRandom1:   number;
    numeroRandom2:   number;
    numeroIngresado:    number;
    operadores=         ["*","/","+","-"];  
    operador:           string;
    gano:               boolean;

    constructor() {
        this.operador = this.operadores[(Math.floor(Math.random()*4))];
        this.numeroRandom1 = (Math.floor(Math.random()*10));
        this.numeroRandom2 = (Math.floor(Math.random()*10));
       
        //console.info("operador: "+this.operador);  
        //console.info("n1: "+this.numeroIngresado1);  
    }

}
