import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { MiHttpService } from './mi-http/mi-http.service'; 
import { Observable } from 'rxjs/Observable';
import { JuegoAgilidad } from '../clases/juego-agilidad';

@Injectable()
export class JuegoServiceService {

  peticion:any;
  
  constructor( public miHttp: MiHttpService ) {
    
    this.miHttp.httpGet("traerpartidas", {}).subscribe(data => { this.peticion = JSON.parse(data._body);});
   
  }

 

  public listar():Array<Juego>  {
     
      //console.log(this.peticion);
      
      let miArray: Array<Juego> = new Array<Juego>();

      for (let entry of this.peticion) {
        
        //console.log(entry); 
          
          switch(entry.juego){
            case 'JuegoAdivina':
              miArray.push(new JuegoAdivina(undefined,entry.gano,entry.jugador));
              break;

            case 'AgilidadAritmetica':
              miArray.push(new JuegoAdivina('AgilidadAritmetica',entry.gano,entry.jugador));
              break;
          
          
          
          }
            
          
    
      }
  
      return miArray;
  
    }

    public GuardarPartida(datos): Observable<any>
  {
    
   // console.log(datos);

    return this.miHttp.httpPost("altaJuegos",datos)
        .pipe(data =>{return data;}); 
    
  }


 
 
 
  
}
