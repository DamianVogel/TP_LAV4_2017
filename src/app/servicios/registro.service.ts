import { Injectable } from '@angular/core';
import { MiHttpService} from '../servicios/mi-http/mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public _generico: MiHttpService) { }



  public Registro(datos){
    console.log(datos);

    return this._generico.httpPost("altaUsuarioJuegos",datos)
        .pipe(data =>{return data;}); 
    
  }
  





}
