import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { GameRegistryFormComponent } from './components/form/game-registry-form/game-registry-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameRegistryFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }