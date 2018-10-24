import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JuegoDB } from '../../clases/juegoDB';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
   
  @Output() 
    
    enviarJuego :EventEmitter<any>= new EventEmitter<any>();
    nuevoJuego : JuegoAgilidad;
    
    ocultarTabla:     boolean;
    ocultarVerificar: boolean;
    ocultarNuevoJuego: boolean;

    Tiempo: number;
    repetidor:any;
    private subscription: Subscription;
  
  ngOnInit() {
  }
    constructor(private juegoService: JuegoServiceService,
                private datosToken:AuthService) {
    this.ocultarTabla = false;
    this.ocultarVerificar = false;
    this.ocultarNuevoJuego = true;
    console.info("Inicio agilidad");  
    this.nuevoJuego = new JuegoAgilidad();
  }
  
  NuevoJuego() {
    this.ocultarTabla = true;
    this.ocultarNuevoJuego= false;
    this.ocultarVerificar = true;
    
    this.Tiempo=10; 
     
    
    this.repetidor = setInterval( ()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      
        if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.Tiempo=5;
        }
      }, 
    900);

  }

  verificar(){
    this.ocultarVerificar=false;
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

      this.nuevoJuego.perdio = true;
    }

    
    
    let jugador = this.datosToken.getUsuario();

    var juegoDB = new JuegoDB('AgilidadAritmetica',jugador,this.nuevoJuego.gano);

    //console.log(jugador);

    this.juegoService.GuardarPartida(juegoDB).subscribe(data =>
      {
       console.log(data);
      }
      );

    this.ocultarNuevoJuego=true;
    clearInterval(this.repetidor);
  }  

}
