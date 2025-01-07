import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons, IonBackButton, IonTextarea, IonItem, IonList, IonInput } from '@ionic/angular/standalone';
import { AgregarListaComponent } from "../../componentes/agregar-lista/agregar-lista.component";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, AgregarListaComponent]
})
export class AgregarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
