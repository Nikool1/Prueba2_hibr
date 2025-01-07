import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionService {
  private permitirEliminar = false;

  setPermitirEliminar(valor: boolean) {
    this.permitirEliminar = valor;
  }

  getPermitirEliminar(): boolean {
    return this.permitirEliminar;
  }
}
