import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any
  miJugadoresServicio:JugadoresService
  
    constructor(serviceJugadores:JugadoresService) {
      this.miJugadoresServicio = serviceJugadores;
      
    }
    


  ngOnInit() {
  }


  TraerTodos(){
    //alert("totos");
    
    this.miJugadoresServicio.traertodos('traerpartidas','todos').then(data=>{
      //console.info("jugadores listado",(data));
      //this.listado= data;
      this.listado = data;

    })
    
  }
  TraerGanadores(){
    
    this.miJugadoresServicio.traertodos('traerpartidas','ganadores').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;

    });
    
  }
  TraerPerdedores(){
    
    this.miJugadoresServicio.traertodos('traerpartidas','perdedores').then(data=>{
      //console.info("jugadores listado",(data));
      this.listado= data;

    })
    
  }

}
