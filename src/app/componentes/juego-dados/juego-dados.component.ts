import { Component, OnInit } from '@angular/core';
import { JuegoDados } from '../../clases/juego-dados';

@Component({
  selector: 'app-juego-dados',
  templateUrl: './juego-dados.component.html',
  styleUrls: ['./juego-dados.component.css']
})
export class JuegoDadosComponent implements OnInit {

  nuevoJuego: JuegoDados;
  
  //Variables de control de html
  comenzar: Boolean;
  tirarDados: boolean;
  plantarse: boolean;
  

  constructor() {
    this.nuevoJuego = new JuegoDados();
    this.comenzar = true;
    //this.tirarDados = false;
    
  }

  Comenzar(){
    this.comenzar = false;

    this.Desarrollo();
      
  }

  Desarrollo(){
    this.nuevoJuego.TirarDadosUsuario();
    
    /*Se debera controlar 3 estados:
      -Continua
          -Tira de nuevo.
      
      -Se planta (decision o se queda sin tiros)
          -Aca debera llamar a jugar contra la IA.
      
      -Pierde
          -Llama a la funcion que indica que el usuario pierde.   
    */
  }

  Resolucion(){
      
    this.tirarDados =  false;
    this.plantarse =  false;     
    
    //aca juega la ia contra la resolucion del usuario
    
  }

  PerdioUsuario(){
    console.log("Perdio el usuario");

  }


  ngOnInit() {
    
  }

  


  
  public Mensajes(){}




}
