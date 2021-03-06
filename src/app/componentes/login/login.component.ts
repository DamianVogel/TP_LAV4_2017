import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {LoginService} from '../../servicios/login.service';
import {Usuario} from '../../clases/usuario';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  mail = 'asd@asd.com';
  clave= '1234';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  respuesta: any;


  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _servicio:LoginService
    
    ) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
     
  }

  ngOnInit() {
  }


  Entrar(){
    
    
    
    var loginDatos = new Usuario(this.mail, this.clave);


    //console.log(loginDatos);

    this._servicio.ServiceLogin(loginDatos).subscribe(data =>{
      
      this.respuesta = JSON.parse(data._body);
      
     console.log("dentro del login"+this.respuesta);     
     if ( this.respuesta.status)
     {
       //console.log(this.datosToken.token);
       localStorage.setItem('token', this.respuesta.token);
       //this.router.navigateByUrl("/Principal");
       this.router.navigate(['/Principal']);
     }
     else
         {
           alert("Error intente de nuevo");
           //this.router.navigateByUrl("/Login");
           this.router.navigate(['/Login']);
         }  
            // if ( this.respuesta.status)
            //   {
            //     //console.log(this.datosToken.token);
            //     localStorage.setItem('token', this.respuesta.token);
            //     this.router.navigateByUrl("/Principal");
            //   }
            //   else
            //       {
            //         alert("Error intente de nuevo");
            //         this.router.navigateByUrl("/Login");
            //       }
      /*        
      const helper = new JwtHelperService();
  
      const decodedToken = helper.decodeToken(this.datosToken.token);
      const expirationDate = helper.getTokenExpirationDate(this.datosToken.token);
      const isExpired = helper.isTokenExpired(this.datosToken.token);
  
      console.log(decodedToken);
      console.log(expirationDate);
      console.log(isExpired);
      */
    
    
    });
      
    
  
  }
  
  
  MoverBarraDeProgreso() {
    this.Entrar();
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
        
        console.log("final");
          this.subscription.unsubscribe();      
          // this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
    
        
        

 
  }

}
