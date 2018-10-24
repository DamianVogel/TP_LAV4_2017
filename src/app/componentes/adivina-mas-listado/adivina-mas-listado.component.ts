import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoServiceService} from '../../servicios/juego-service.service';
import { JuegoDB } from '../../clases/juegoDB';



@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor(public servicioJuego:JuegoServiceService) { 
    //this.listadoParaCompartir = new Array<any>()
  }


  ngOnInit() {
  }
   tomarJuegoTerminado(juego: JuegoDB)
  {
    this.listadoParaCompartir = this.servicioJuego.listar();
  }

  


}
