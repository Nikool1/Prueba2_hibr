import { Component, OnInit, Input } from '@angular/core';
import { IonList, IonCard, IonCardContent, IonButton, IonLabel, IonItem, IonIcon } from "@ionic/angular/standalone";
import { CitasService } from '../../servicios/citas.service';
import { Cita } from '../../modelo/cita';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss'],
  imports:[IonList, CommonModule, IonCard, IonCardContent, IonButton, IonLabel, IonItem, IonIcon ],
  standalone: true,
})
export class ListaCitasComponent  implements OnInit {
  @Input() citas: Cita[] = [];

  cita:Cita[] = [] 

  constructor(
    private citasService:CitasService

  ) { }

  ngOnInit(): void{
    this.cita  = this.citasService.getCita()
  }
  eliminarCita(cita: Cita) {
    this.citasService.eliminar(cita); // Llama al servicio para eliminar la cita
    this.cita = this.citasService.getCita(); // Actualiza la lista local
  }
  

}
