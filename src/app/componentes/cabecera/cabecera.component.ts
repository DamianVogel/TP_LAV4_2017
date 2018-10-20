import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Navegar(tipo: string) {
    switch (tipo) {
      case 'Principal':
          this.router.navigate(['/Principal']);
        break;
      
      case 'QuienSoy':
          this.router.navigate(['/QuienSoy']);
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
