import { Juego } from '../clases/juego';

export class JuegoDados extends Juego {
    
    primerDadoUsuario: number;
    segundoDadoUsuario: number;

    primerDadoIA: number;
    segundoDadoIA: number;

    acumUsuario:number;
    acumIA:number;

    cantDadosTiradosUsuario:number;
    cantDadosTiradosIA:number;

    constructor()
    {
        super("Juego 21 con Dados")
        this.acumUsuario=0;
        this.acumIA = 0;
    
        this.cantDadosTiradosUsuario = 0;
        this.cantDadosTiradosIA = 0;

    }


    TirarDadosUsuario(){
        this.cantDadosTiradosUsuario++;

        this.primerDadoUsuario = Math.floor((Math.random() * 6) + 1);
        this.segundoDadoUsuario = Math.floor((Math.random()* 6) + 1);
    
        this.acumUsuario = this.acumUsuario + this.primerDadoUsuario+this.segundoDadoUsuario;
        console.log("primer dado: "+this.primerDadoUsuario+" "
                    +"segundo dado: "+this.segundoDadoUsuario+" "
                    +"El acumulador va: "+this.acumUsuario+" "
                    +"El usuario tiro: "+this.cantDadosTiradosUsuario
                    +" veces");
            
    }

    TirarDadosIA(){
        this.cantDadosTiradosIA++;

        this.primerDadoIA = Math.floor((Math.random() * 6) + 1);
        this.segundoDadoIA = Math.floor((Math.random()* 6) + 1);
    
        this.acumIA = this.acumIA + this.primerDadoIA+this.segundoDadoIA;
        console.log("primer dado IA: "+this.primerDadoIA+" "
                    +"segundo dado IA: "+this.segundoDadoIA+" "
                    +"El acumulador va: "+this.acumIA+" "
                    +"IA tiro: "+this.cantDadosTiradosIA
                    +" veces");
            
    }




    private Mensajes(){}


    public verificar() {
    
        if(this.acumUsuario<21 && this.cantDadosTiradosUsuario <3)
            {
                return true;    
            }

            return false;       
    }

    public verificarIA(){
        
        this.TirarDadosIA();

        if((this.acumIA <21 && this.cantDadosTiradosIA < 3) && (this.acumIA <= this.acumUsuario))
        {   
            this.verificarIA();                            
        } 
        
        if((this.acumIA <21 && this.cantDadosTiradosIA < 3) && (this.acumIA > this.acumUsuario)){            
                return true;
        }
        else{    
                return false;
            }    
        
        
    }


}
