import { Component, OnInit } from '@angular/core';
import { IonList, IonCard, IonCardContent, IonLabel, IonItem } from "@ionic/angular/standalone";
import { CitasService } from '../../servicios/citas.service';
import { Cita } from '../../modelo/cita';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-cita',
  templateUrl: './mostrar-cita.component.html',
  styleUrls: ['./mostrar-cita.component.scss'],
  imports:[CommonModule,  IonList, IonCard, IonCardContent, IonLabel, IonItem],
  standalone: true,
})
export class MostrarCitaComponent  implements OnInit {

  cita:Cita[] = [] 

  constructor(
    private citasService:CitasService

  ) { }

  ngOnInit(): void{
    this.cita  = this.citasService.getCita()
  }

}
