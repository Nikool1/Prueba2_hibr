import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private _cita:Cita[]=[
    new Cita (1, "No es la especie más fuerte la que sobrevive, ni la más inteligente, sino la que mejor se adapta al cambio.", "Charles Darwin"),
    new Cita (2, "El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene.", "Ralph Waldo Emerson")
  ]
  constructor() { }
  
  agregarCita(c:Cita ){
    this._cita.push(c)
  }
  getCita():Cita[]{
    console.dir(this._cita)
    return this._cita
  }
   private _buscarIndice(cita:Cita):number {
    return this._cita.findIndex(cit => cit.id === cita.id)
  }

  eliminar(cita: Cita) {
    const indice = this._cita.findIndex(c => c.id === cita.id);
    if (indice !== -1) {
      this._cita.splice(indice, 1);
    }
  }
  getCitaAleatoria(): Cita | null {
  const citas = this._cita;
  if (citas.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * citas.length);
    return citas[indiceAleatorio];
  }
  return null;
  }
  eliminarCitaAleatoria(cita: Cita): void {
  this._cita = this._cita.filter((c) => c.id !== cita.id);
  }

}
