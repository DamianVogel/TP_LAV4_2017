import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public miHttp: MiHttpService) { }



  public Registro(datos){
    //console.log("entro Registro" + datos.email);
    


    /*
    //CAMBIAR
    return this._generico.httpPost("validarusuario",datos)
        .pipe(data =>{return data;}); 
    */
  }
  





}
