import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoDB } from '../../clases/juegoDB';
import { JuegoServiceService} from '../../servicios/juego-service.service';

@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor(public servicioJuego:JuegoServiceService) { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }

  

  tomarJuegoTerminado(juego: JuegoDB)
  {
    this.listadoParaCompartir = this.servicioJuego.listar();
    
    //this.listadoParaCompartir.push(juego);
    //console.info("en app",this.listadoParaCompartir);
  }
}
