import { Component, OnInit } from '@angular/core';
import { AgregarCitaComponent } from "../../componentes/agregar-cita/agregar-cita.component";
import { ListaCitasComponent } from "../../componentes/lista-citas/lista-citas.component";
import { Cita } from '../../modelo/cita';
import { CitasService } from '../../servicios/citas.service';

@Component({
  selector: 'app-agregar-lista',
  templateUrl: './agregar-lista.component.html',
  styleUrls: ['./agregar-lista.component.scss'],
  standalone: true,
  imports: [AgregarCitaComponent, ListaCitasComponent]
})
export class AgregarListaComponent implements OnInit {
  citas: Cita[] = []; // Lista de citas

  constructor(private citasService: CitasService) {
    this.citas = this.citasService.getCita();
  }

  ngOnInit() {}
  onCitaRecibida(cita: Cita) {
    this.citasService.agregarCita(cita); // Agregar al servicio
    this.citas = this.citasService.getCita(); // Actualizar lista local
  }

}