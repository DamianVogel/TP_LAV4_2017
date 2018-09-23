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

    //this.tirarNuevamente = this.nuevoJuego.verificar();

    /*
    while(this.tirarNuevamente)
    {
      this.plantarse = true;
    }
   */
    
  }

  Desarrollo(){
    this.nuevoJuego.TirarDadosUsuario();
    
    if(this.nuevoJuego.verificar()){  
      this.tirarDados= true;
      this.plantarse = true;
    }
    else{
      this.tirarDados =  false;
      this.plantarse =  false;
      console.log("Perdiste, te pasaste");
    }  
   
    
  

  }

  Resolucion(){
    this.tirarDados =  false;
    this.plantarse =  false;     
    

    if(this.nuevoJuego.verificarIA())
      {
        console.log("Perdiste! Gano SkyNet");
      }
        else
        {
          console.log("Ganaste!")
        }

    this.constructor();
  }




  ngOnInit() {
    
  }

  


  
  public Mensajes(){}




}
