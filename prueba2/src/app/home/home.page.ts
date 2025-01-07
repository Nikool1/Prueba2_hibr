import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { RouterModule } from '@angular/router'
import { CitaAleatoriaComponent } from "../componentes/cita-aleatoria/cita-aleatoria.component";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterModule, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButtons, IonButton, CitaAleatoriaComponent],
})
export class HomePage {
  constructor() {}
}
export class ExampleComponent {
  constructor() {
    addIcons({ add });
  }
}

