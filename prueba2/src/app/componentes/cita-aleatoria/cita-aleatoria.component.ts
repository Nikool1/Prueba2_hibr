import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../servicios/citas.service';
import { Cita } from '../../modelo/cita';
import { IonList, IonCard, IonCardContent, IonItem, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita-aleatoria',
  templateUrl: './cita-aleatoria.component.html',
  styleUrls: ['./cita-aleatoria.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonCardContent, IonCard, IonList, CommonModule]
})
export class CitaAleatoriaComponent implements OnInit {
  citaAleatoria: Cita | null = null;

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.obtenerCitaAleatoria(); // Llama al método cuando se cargue el componente
  }

  obtenerCitaAleatoria(): void {
    this.citaAleatoria = this.citasService.getCitaAleatoria(); // Obtén una cita aleatoria
  }
}
