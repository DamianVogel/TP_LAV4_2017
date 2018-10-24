import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Tateti } from '../../clases/tateti';
import { NgIf } from '@angular/common';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JuegoDB } from '../../clases/juegoDB';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  miJuego:Tateti;
  valorUsuario:string;
  turno:string;
  ganador:string;
  Mensajes:string;
  

  constructor(
        private juegoService: JuegoServiceService,
        private datosToken:AuthService 
    ) {
    this.miJuego=new Tateti("jug");
   let r= Math.round(Math.random()); 

   if(r==0)
   {
     this.turno="pc";

    this.JugadaPc();   

   }
   else{
     this.turno="jugador";
   }

    
   }

  ngOnInit() {
    
   
    
  }

  MarcarCasilla(x,y, valor){

   if(this.miJuego.MarcarCasilla(x,y,valor))
   {
    this.turno="pc";
   }
    
      if(this.miJuego.gano && this.ganador != "pc")
      {
        this.ganador="jugador";
        
        this.miJuego.gano=true;
        

        let jugador = this.datosToken.getUsuario();

        var juegoDB = new JuegoDB('Tateti',jugador,this.miJuego.gano);
    
        //console.log(jugador);
    
        this.juegoService.GuardarPartida(juegoDB).subscribe(data =>
          {
           //console.log(data);
          }
          );

        this.MostarMensaje("Ganaste",this.miJuego.gano);
     
      }

      if(!this.miJuego.gano)
      {
        this.JugadaPc();
      }
      
    
  
  }

  JugadaPc(){
    do{
      let x= Math.round(Math.random() * (2 - 0)) + 0;
      let y= Math.round(Math.random() * (2 - 0)) + 0;
     
      if(this.miJuego.HayLugar() && !this.miJuego.gano)
      {
        if(this.miJuego.MarcarCasilla(x,y,this.turno))
        {
          this.turno="jugador";
          
        }

      }
      if(this.miJuego.gano){
        this.ganador="pc";
        console.log("perdiste");
        this.turno="jugador";

        this.miJuego.gano=false;
        

        let jugador = this.datosToken.getUsuario();

        var juegoDB = new JuegoDB('Tateti',jugador,this.miJuego.gano);
    
        //console.log(jugador);
    
        this.juegoService.GuardarPartida(juegoDB).subscribe(data =>
          {
           //console.log(data);
          }
          );



        this.MostarMensaje("Perdiste",this.miJuego.gano);




      }

     //console.log(x,y, " no entro en el if, turno: ",this.turno);
    }while(this.turno=="pc");

    

  }

  ReiniciarJuego()
  {
    this.miJuego=new Tateti("jug");
    let r= Math.round(Math.random()); 
 
    if(r==0)
    {
      this.turno="pc";
 
     this.JugadaPc();   
 
    }
    else{
      this.turno="jugador";
    }

  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    // this.tirarDados = false;
     this.Mensajes=mensaje;    
     var x = document.getElementById("snackbar");
     if(ganador)
       {
         x.className = "show Ganador";
       }else{
         x.className = "show Perdedor";
       }
     var modelo=this;
     setTimeout(function(){ 
       x.className = x.className.replace("show", "");
      // this.tirarDados = true;
       //this.deNuevo = false;
      }, 3000);
     //console.info("objeto",x);
   
   }




}