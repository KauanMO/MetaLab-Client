import { Component } from '@angular/core';
import { GameRegistryFormComponent } from '../../components/form/game-registry-form/game-registry-form';

@Component({
  selector: 'app-register-game',
  imports: [GameRegistryFormComponent],
  templateUrl: './register-game.component.html',
  styleUrl: './register-game.component.scss',
})
export class RegisterGameComponent { }
