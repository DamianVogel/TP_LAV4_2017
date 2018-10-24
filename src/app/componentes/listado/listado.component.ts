import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  // miServicioJuego:JuegoServiceService
  

  constructor(public servicioJuego:JuegoServiceService) {
   
    // this.miServicioJuego = servicioJuego;
    //this.listadoParaCompartir= this.miServicioJuego.listar();
  }
  
  ngOnInit() {
    //this.TraerTodosLosJugadores();
  }

  


  TraerTodosLosJugadores(){
    //console.log("llamaService");
    this.listadoParaCompartir= this.servicioJuego.listar();
  }

  /* para corregir
  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }
  */
}
