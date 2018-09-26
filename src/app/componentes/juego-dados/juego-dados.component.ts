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
  deNuevo: Boolean;
  tirarDados: boolean;
  plantarse: boolean;

  estadoJugador: string;
  

  constructor() {
    this.nuevoJuego = new JuegoDados();
    this.deNuevo = false
    this.tirarDados = true;
    
  }

    

  Desarrollo(){
    
    
    this.nuevoJuego.TirarDadosUsuario();
    
    if(this.nuevoJuego.verificar() )
    {
        //Aca puede seguir tirando o se planta por decision.
        this.plantarse = true;
        console.log("puede seguir jugando");
    }
    else
        {
            switch(this.nuevoJuego.estadoUsuario)
            {
                    case "sinTiros":            
            //      -Aca debera llamar a jugar contra la IA.
                    this.tirarDados = false;
                    this.Resolucion();
                    
                    break;

                    case "perdio":
                    this.PerdioUsuario();      
                    break;
              } 
        }
    
    /*  
      -Pierde
          -Llama a la funcion que indica que el usuario pierde.   
    */
  }

  Resolucion(){
     
    if(this.nuevoJuego.verificarIA() )
    {
        //Aca gana SKYNET
        this.PerdioUsuario();    
    }
    else
        {
            switch(this.nuevoJuego.estadoIA)
            {
                    case "sinTiros":            
                    this.GanoUsuario();
                    break;

                    case "IA perdio":
                    this.GanoUsuario();      
                    break;
            } 
   
          }
    }

  PerdioUsuario(){
    
    console.log("Perdio el usuario");
    this.plantarse = false;
    this.tirarDados = false;
    this.deNuevo = true;
    
  }

  GanoUsuario(){
    
    console.log("Gano el usuario");
    this.plantarse = false;
    this.tirarDados = false;
    this.deNuevo = true;
    
  }


  ngOnInit() {
    
  }

  


  
  public Mensajes(){}




}
