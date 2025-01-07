import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonText } from "@ionic/angular/standalone";
import { Cita } from '../../modelo/cita';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.scss'],
  imports: [IonText, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonText],
  standalone: true,
})
export class AgregarCitaComponent  implements OnInit {

  cita: Cita = new Cita(0, '', ''); 

  @Output() onCitaAgregado = new EventEmitter<Cita>();

  constructor() { }

  ngOnInit() {}

  agregarProducto() {
    this.onCitaAgregado.emit(this.cita);
    this.cita = new Cita(0, '', '');
  }

}
