import { Component, OnInit } from '@angular/core';
import { JuegoDados } from '../../clases/juego-dados';

@Component({
  selector: 'app-juego-dados',
  templateUrl: './juego-dados.component.html',
  styleUrls: ['./juego-dados.component.css']
})
export class JuegoDadosComponent implements OnInit {

  nuevoJuego: JuegoDados;
  ocultarVerificar: Boolean;
  
  tirarNuevamente: boolean;
  

  constructor() {
    this.nuevoJuego = new JuegoDados();
    this.tirarNuevamente = false;
  }

  Comenzar(){
    
    this.nuevoJuego.TirarDadosUsuario();
    
    while(this.nuevoJuego.verificar())
    {
      this.tirarNuevamente = true;
    }
    
    this.tirarNuevamente = false;





  }



  ngOnInit() {
    
  }

  


  
  public Mensajes(){}




}
