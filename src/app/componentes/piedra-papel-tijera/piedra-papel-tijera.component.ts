import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  seleccion = '';

  constructor() {
    //this.seleccion = '';

   }

  ngOnInit() {
    this.Juego();
  }

  Juego(){
      
    
    //Primera parte del juego, pide al usuario que elija entre piedra, papel o tijera.
    var decisionUsuario = this.seleccion;

    console.log(decisionUsuario);
    //Segunda parte del juego. El ordenador "decide" su elección de forma aleatoria.
      var aleatorio = function() {
      var numero =  Math.floor((Math.random()*3)+1); 
      
      var respuesta;
      
        if (numero == 1) {
          respuesta = "Piedra";
        } else if (numero == 2) {
          respuesta = "Papel";
        } else {
          respuesta = "Tijera";
        }
          return respuesta;
      };

    var decisionOrdenador = aleatorio();
    
    console.log ("Usuario: " +decisionUsuario + ", Ordenador: " +decisionOrdenador);

    
    //Tercera parte del juego. Se decide quién es el ganador
    var logicaJuego = function(decisionUsuario, decisionOrdenador) {
        if (decisionUsuario == decisionOrdenador) {
            return console.log("Empate, los dos eligieron " +decisionUsuario);
        } else {
            if (decisionUsuario == "Piedra" && decisionOrdenador == "Papel") {
                console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
            } 
            if (decisionUsuario == "Piedra" && decisionOrdenador == "Tijera") {
                console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
            } 
            if (decisionUsuario == "Papel" && decisionOrdenador == "Tijera") { 
                console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
            }
            if (decisionUsuario == "Papel" && decisionOrdenador == "Piedra"){
                console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
            }
            if (decisionUsuario == "Tijera" && decisionOrdenador == "Piedra") {
                console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
                }
            if (decisionUsuario == "Tijera" && decisionOrdenador == "Papel") {
                console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
            }
        }
      };

    logicaJuego(decisionUsuario, decisionOrdenador);

  }

}
