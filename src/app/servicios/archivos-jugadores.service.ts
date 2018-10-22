import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 

@Injectable()
export class ArchivosJugadoresService {

  
  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    //this.miHttp.httpGet("traerpartidas", {}).subscribe(data => { this.peticion = JSON.parse(data._body);});
  }


  public   traerJugadores(ruta) {
    
    
    return this.miHttp.httpGet(ruta,'')
    .toPromise()
    .then( data => {
      //console.log("Archivo jugadores");
      //console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
    

  
  }



}
