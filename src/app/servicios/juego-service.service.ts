import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { MiHttpService } from './mi-http/mi-http.service'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JuegoServiceService {

  peticion:any;
  
  constructor( public miHttp: MiHttpService ) {
    
    this.miHttp.httpGet("traertodosjugadores", {}).subscribe(data => { this.peticion = JSON.parse(data._body);});
   
  }

 

  public listar():Array<Juego>  {
     
      //console.log(this.peticion);
      
      let miArray: Array<Juego> = new Array<Juego>();

      for (let entry of this.peticion) {
        
        //console.log(entry); 
          
          switch(entry.Juego){
            case 'JuegoAdivina':
              miArray.push(new JuegoAdivina(undefined,entry.Gano,entry.Jugador));
              break;
          
          
          
          }
            
          
    
      }
  
      return miArray;
  
    }



 
 
  /*
  public listar(): Array<Juego> {
    
    this.miHttp.httpGetP("traertodosjugadores")
   
   .then( data => {
      console.log( data );
      
    })
    .catch( err => {
      console.log( err );
    });
   
  
    this.peticion
    .subscribe( data => {
      console.log("En listar");
      console.log( data );
      
    
    }, err => {
      console.info("error: " ,err );
    })
    
    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Juego 1", false));
    miArray.push(new JuegoAdivina("Pepe", true));
    miArray.push(new JuegoAdivina("Juego 3", false));
    miArray.push(new JuegoAdivina("Juego 4", false));
    miArray.push(new JuegoAdivina("Juego 5", false));
    miArray.push(new JuegoAdivina("Juego 6", false));
   
    return miArray;
    
  }




  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
    .subscribe( data => {
      console.log("En listarPromesa");
      console.log( data );
    }, err => {
      console.log( err );
    })
    
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", true));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }
  */
}
