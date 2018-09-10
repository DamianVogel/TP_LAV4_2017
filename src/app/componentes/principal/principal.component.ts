import { Component, OnInit } from '@angular/core';



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
  constructor() {  }

  ngOnInit() {
  }

 

}
