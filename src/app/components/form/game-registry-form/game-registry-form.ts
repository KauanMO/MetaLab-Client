import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../input/input.component';
import { TextareaComponent } from '../../textarea/textarea.component';
import { GameService } from '../../../services/game.service';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-game-registry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, TextareaComponent, ButtonComponent],
  templateUrl: './game-registry-form.component.html',
  styleUrl: './game-registry-form.component.scss',
})
export class GameRegistryFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private gameService: GameService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.gameService.registerGame(
      this.form.value['email'],
      this.form.value['name'],
      this.form.value['description'],
    ).subscribe(game => {
      game
    })
  }
}
