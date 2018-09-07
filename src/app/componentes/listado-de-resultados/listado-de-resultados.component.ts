
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { ListadosComponent } from '../listados/listados.component';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;

 prueba: string; 

  constructor() {  
    this.listado;
   
  }

  ngOnInit() {

  }

  ver() {
    console.info(this.listado);
  }

}
