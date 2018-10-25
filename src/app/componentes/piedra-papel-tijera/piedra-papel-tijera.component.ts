import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JuegoDB } from '../../clases/juegoDB';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  eleccion : string;
  botonNuevoJuego : boolean;
  divEleccionUsuario : boolean;
  decisionOrdenador : string;
  resultado: string;
  Mensajes: string;
  ganador: boolean = false;
  empate: boolean;

  constructor(private juegoService: JuegoServiceService,
    private datosToken:AuthService) {
    this.botonNuevoJuego = true;
    this.divEleccionUsuario = false;

   }

  ngOnInit() {
  
  }

  Seleccion (eleccion){ 
    this.divEleccionUsuario = false;
    
    switch(eleccion){
        case 'piedra':
          this.eleccion = eleccion;
          break;

        case 'papel':
          this.eleccion = eleccion;
          break;

        case 'tijera':
          this.eleccion = eleccion;
          break;
    }
    
    this.Definicion();
  }


  DecisionOrdenador() {
    var numero =  Math.floor((Math.random()*3)+1); 
    
    var respuesta;
    
      if (numero == 1) {
        respuesta = "piedra";
      } else if (numero == 2) {
        respuesta = "papel";
      } else {
        respuesta = "tijera";
      }
        return respuesta;
    };


  NuevoJuego(){
    this.botonNuevoJuego = false;  
    this.divEleccionUsuario = true;
    this.resultado = undefined;
  };
      

  Definicion(){ 

        this.decisionOrdenador = this.DecisionOrdenador();

    
        if (this.eleccion == this.decisionOrdenador) {
            this.resultado= "Empate, los dos eligieron " +this.eleccion;
            this.ganador =false;
            this.empate = true;
        } else {
            if (this.eleccion == "piedra" && this.decisionOrdenador == "papel") {
              this.resultado= ""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el ordenador.";
              this.ganador =false;
            } 
            if (this.eleccion == "piedra" && this.decisionOrdenador == "tijera") {
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el usuario";
              this.ganador = true;
            } 
            if (this.eleccion == "papel" && this.decisionOrdenador == "tijera") { 
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el ordenador.";
              this.ganador =false;
            }
            if (this.eleccion == "papel" && this.decisionOrdenador == "piedra"){
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el usuario";
              this.ganador = true;
            }
            if (this.eleccion == "tijera" && this.decisionOrdenador == "piedra") {
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el ordenador.";
                }
            if (this.eleccion == "tijera" && this.decisionOrdenador == "papel") {
              this.resultado=""+this.eleccion +" vs " +this.decisionOrdenador + ", gana el usuario";
              this.ganador = true;
            }
        }
        
        //console.log(this.resultado);
        this.MostarMensaje(this.resultado, this.ganador);

        if(this.ganador && this.empate != true)
        {
          let jugador = this.datosToken.getUsuario();

          var juegoDB = new JuegoDB('PPT',jugador,this.ganador);
 
          this.juegoService.GuardarPartida(juegoDB).subscribe(data =>{});

        }else{

          let jugador = this.datosToken.getUsuario();

          var juegoDB = new JuegoDB('PPT',jugador,this.ganador);
 
          this.juegoService.GuardarPartida(juegoDB).subscribe(data =>{});

        }

        this.botonNuevoJuego = true;
     
      }  

      MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
        // this.tirarDados = false;
         this.Mensajes=mensaje;    
         var x = document.getElementById("snackbar");
         if(ganador)
           {
             x.className = "show Ganador";
           }else if(ganador == false && this.empate==true ){
            x.className = "show Empate";
           }
           else
           {
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


    //logicaJuego(this.eleccion, this.decisionOrdenador);
};
    
  
 
 
 
 
 
 
 
 
  

  

