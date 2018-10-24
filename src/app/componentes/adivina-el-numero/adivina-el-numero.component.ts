
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { JuegoDB } from '../../clases/juegoDB';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  

  constructor(private juegoService: JuegoServiceService,
              private datosToken:AuthService) { 
    
    this.nuevoJuego = new JuegoAdivina();
    this.contador=0;
    this.nuevoJuego.generarnumero();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto +" - Contador: "+this.contador);  
    this.ocultarVerificar=false;
  }
  

  generarnumero()
  {
    this.constructor();
  }

  verificar()
  {
    this.contador++;
    console.log("El contador va: "+this.contador);
    this.ocultarVerificar=true;
    //console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    if (this.nuevoJuego.verificar()){
      
      let jugador = this.datosToken.getUsuario();

      var juegoDB = new JuegoDB('JuegoAdivina',jugador,this.nuevoJuego.gano);

    //console.log(jugador);

      this.juegoService.GuardarPartida(juegoDB).subscribe(data =>
        {
          console.log(data);
          let respuesta = JSON.parse(data._body);
          if(respuesta)
            {
              this.enviarJuego.emit(juegoDB);
            }
            else 
              {
                console.log("no se pudo guardar la partida");
              }

        }
      
      
      );



      this.enviarJuego.emit(this.nuevoJuego); 
      this.MostarMensaje("Sos un Genio!!!",true);
      this.contador = 0;
      //this.nuevoJuego.numeroSecreto=0;

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo.";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="Afortunado en el amor.";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces.";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" Ayuda: "+this.nuevoJuego.retornarAyuda());
     

    }
    console.info("Gano?:",this.nuevoJuego.gano);  
    return this.nuevoJuego.gano;
  }  



  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    //console.info("objeto",x);
  
  }  
  
  ngOnInit() {
  
  }

}
