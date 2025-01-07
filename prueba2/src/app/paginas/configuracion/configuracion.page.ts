import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonList, IonItem, IonToggle } from '@ionic/angular/standalone';
import { ConfiguracionService } from '../../servicios/configuracion.service';



@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonToggle, IonItem, IonList, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {


  ngOnInit() {
  }
  constructor(public configuracionService: ConfiguracionService) {}

  toggleEliminar(estado: boolean) {
    this.configuracionService.setPermitirEliminar(estado);
  }

}
