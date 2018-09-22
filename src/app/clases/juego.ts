export abstract class Juego {
  public nombre : string;
  public jugador: string;
  public gano = undefined;

  constructor(nombre?: string, gano?: boolean,jugador?:string) {
    if (nombre)
      this.nombre = nombre;

    if (gano)
      this.gano = gano;
    if(jugador)
      this.jugador=jugador;
    else
     /* this.jugador= "natalia natalia";*/
        this.jugador = "Desconocido";
  }


  

  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
