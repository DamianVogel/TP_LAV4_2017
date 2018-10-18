import { Injectable } from '@angular/core';
import { MiHttpService } from '../servicios/mi-http/mi-http.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public miHttp: MiHttpService) { }

  public ServiceLogin(datosLogin):Observable<any> {
    console.log("entro LoginService" + datosLogin);
    
    return this.miHttp.httpPost("validarusuario",datosLogin)
        .pipe(data =>{return data;}); 

  }





}
