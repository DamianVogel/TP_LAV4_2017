import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { RegistroService} from '../../servicios/registro.service';




function copiaClave(input: FormControl) {

      if (input.root.get('clave') == null) {
        return null;
      }

      const verificar = input.root.get('clave').value === input.value;
      return verificar ? null : { mismaClave : true };
  }

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  constructor(private builder: FormBuilder,
              private _registro: RegistroService
    ) { }

  email = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.email
  ]);
  
  clave = new FormControl('', [
    Validators.required,
   Validators.minLength(4)
  ]);
  
  copiaClave = new FormControl('', [
    Validators.required,
    copiaClave
  ]);

  registroForm: FormGroup = this.builder.group({
    email: this.email,
    clave: this.clave,
    copiaClave: this.copiaClave,
  });

  ngOnInit() {
  }

  Registrar(){
    
    var usuario = new Usuario(this.registroForm.get('email').value, this.registroForm.get('clave').value);
   // console.log(usuario);
    
    this._registro.Registro(usuario)
    .subscribe(data =>{
      //alert(data._body);
    });

    alert("Usuario Registrado");
    //console.log(this.registroForm.get('email').value); 
    
  }

}