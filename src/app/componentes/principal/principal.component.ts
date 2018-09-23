import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css',
              './css/animate.css',
              './css/bootstrap.css',
              './css/icomoon.css',
              './css/style.css',
              './css/superfish.css',
              './sass/style.scss',
              './sass/bootstrap.scss'
              

             ]
            })



export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
  constructor(private route: ActivatedRoute,
    private router: Router) {  }


  ngOnInit() {
  }

  Navegar(tipo: string) {
    switch (tipo) {
      case 'QuienSoy':
          this.router.navigate(['/QuienSoy']);
        break;
      
      case 'Juegos':
          this.router.navigate(['/Juegos']);
        break;
      
      case 'Listado':
          this.router.navigate(['/Listado']);
        break;
      
      case 'Configuracion':
          this.router.navigate(['/Configuracion']);
        break;
      
      case 'Jugadores':
          this.router.navigate(['/Jugadores']); 
        break;
        
    }
  }
 

}
