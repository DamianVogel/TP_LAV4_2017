import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
   
  @Output() 
    
    enviarJuego :EventEmitter<any>= new EventEmitter<any>();
    nuevoJuego : JuegoAgilidad;
    ocultarVerificar: boolean;
    Tiempo: number;
    repetidor:any;
    private subscription: Subscription;
  
  ngOnInit() {
  }
    constructor() {
    this.ocultarVerificar=true;
    console.info("Inicio agilidad");  
  }
  
  NuevoJuego() {
    //console.log(this.nuevoJuego.gano);
    this.Tiempo=15; 
    this.nuevoJuego = new JuegoAgilidad(); 
    this.ocultarVerificar= false;
    this.repetidor = setInterval( ()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      
        if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
        }
      }, 
    900);

  }

  verificar(){
    
    var numeroVerifica : number;

    switch(this.nuevoJuego.operador){
      
      case '+':
        numeroVerifica = this.nuevoJuego.numeroRandom1 + this.nuevoJuego.numeroRandom2;
        break;
      case '-':
        numeroVerifica = this.nuevoJuego.numeroRandom1 - this.nuevoJuego.numeroRandom2;
        break;
      case '/':
        numeroVerifica = this.nuevoJuego.numeroRandom1 / this.nuevoJuego.numeroRandom2;
        break;
      case '*':
        numeroVerifica = this.nuevoJuego.numeroRandom1 * this.nuevoJuego.numeroRandom2;
        break;
    }
    
    if(numeroVerifica == this.nuevoJuego.numeroIngresado){

      this.nuevoJuego.gano = true;

    }else{

      this.nuevoJuego.gano = false;
    }

    console.log(this.nuevoJuego.gano);
    this.ocultarVerificar=false;    
    clearInterval(this.repetidor);
  }  

}
