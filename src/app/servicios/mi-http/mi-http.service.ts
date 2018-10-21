import { log } from 'util';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiHttpService {


  api="http://localhost/Programacion-3-2017/TP_ESTACIONAMIENTO_DV/";

  //api="http://localhost/tpjuegos/";


  constructor( public http: Http ) { }

  public httpGet(metodo:string, objeto:any):Observable<any>{
  

    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));
    
  }

 
  public httpPost(metodo:string, objeto:any):Observable<any>
  {
    
    //var array = new Array(objeto,this.token);

    console.log(metodo,objeto);

    return this.http.post(this.api + metodo, objeto
                          
                          //,this.httpOptions  
                        )
    .pipe(catchError(this.handleError));
  }

  
  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }







  /*
  public httpGetP ( url: string)
  {
    console.log(this.api+url);
    
    return this.http
    .get(this.api+url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpPost(metodo:string, objeto:any)
  {
    console.log("en http post" +objeto)
    return this.http.post(this.api + metodo, objeto
                          
                          //,this.httpOptions  
                        )
    .pipe(catchError(this.handleError));
  }



  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }

  */
}
