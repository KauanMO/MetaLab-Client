import { Component } from '@angular/core';
import { GameRegistryFormComponent } from './components/form/game-registry-form/game-registry-form';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameRegistryFormComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }