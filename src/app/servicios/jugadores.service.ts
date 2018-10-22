import { Injectable } from '@angular/core';
import { ArchivosJugadoresService}from './archivos-jugadores.service'
@Injectable()
export class JugadoresService {

  peticion:any;
  
  constructor( public miHttp: ArchivosJugadoresService ) {
   //this.peticion = this.miHttp.traerJugadores();
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
      //this.miHttp.httpGet("traertodosjugadores", {}).subscribe(data => { this.peticion = JSON.parse(data._body);});
}


filtrado:any;
  
  traertodos(ruta : string,filtro: string) 
  { 
    return this.miHttp.traerJugadores(ruta).then(data=>{
            

      this.filtrado=JSON.parse(data._body);

      console.info(this.filtrado);

     //let  ganador: boolean;
      let ganador: number;

      if(filtro=="ganadores")
      {
        //ganador= true;
        ganador= 1;
      }
      else
      {
        //ganador= false;
        ganador = 0;
      }

      this.filtrado =this.filtrado
      .filter(
        data => data.Gano === ganador  || filtro=="todos" ); return this.filtrado}
      )
      .catch(errror=>{
        console.log("error");
        return this.filtrado;
     
      });  
  }
}
