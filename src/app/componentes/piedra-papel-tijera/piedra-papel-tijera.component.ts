import { Component, OnInit } from '@angular/core';


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


  constructor() {
    this.botonNuevoJuego = true;
    this.divEleccionUsuario = false;

   }

  ngOnInit() {
  
  }

  Seleccion (eleccion){ 
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
    return this.eleccion;
  }




  NuevoJuego(){
    this.botonNuevoJuego = false;  
    this.divEleccionUsuario = true;
    
    //Primera parte del juego, pide al usuario que elija entre piedra, papel o tijera.
    
    
    
    
    
    //var this.eleccion = this.seleccion;

    //console.log(this.eleccion);
    //Segunda parte del juego. El ordenador "decide" su elección de forma aleatoria.
      var aleatorio = function() {
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

    var decisionOrdenador = aleatorio();
    
    //console.log ("Usuario: " +this.eleccion + ", Ordenador: " +decisionOrdenador);

    
    //Tercera parte del juego. Se decide quién es el ganador
    
        if (this.eleccion == decisionOrdenador) {
            return console.log("Empate, los dos eligieron " +this.eleccion);
        } else {
            if (this.eleccion == "piedra" && decisionOrdenador == "papel") {
                console.log(""+this.eleccion +" vs " +decisionOrdenador + ", gana el ordenador.");
            } 
            if (this.eleccion == "piedra" && decisionOrdenador == "tijera") {
                console.log(""+this.eleccion +" vs " +decisionOrdenador + ", gana el usuario");
            } 
            if (this.eleccion == "papel" && decisionOrdenador == "tijera") { 
                console.log(""+this.eleccion +" vs " +decisionOrdenador + ", gana el ordenador.");
            }
            if (this.eleccion == "papel" && decisionOrdenador == "piedra"){
                console.log(""+this.eleccion +" vs " +decisionOrdenador + ", gana el usuario");
            }
            if (this.eleccion == "tijera" && decisionOrdenador == "piedra") {
                console.log(""+this.eleccion +" vs " +decisionOrdenador + ", gana el ordenador.");
                }
            if (this.eleccion == "tijera" && decisionOrdenador == "papel") {
                console.log(""+this.eleccion +" vs " +decisionOrdenador + ", gana el usuario");
            }
        }
      };

    //logicaJuego(this.eleccion, decisionOrdenador);
};
    
  
 
 
 
 
 
 
 
 
  

  

