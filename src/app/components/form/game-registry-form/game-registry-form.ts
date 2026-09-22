import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../input/input.component';
import { TextareaComponent } from '../../textarea/textarea.component';
import { GameService } from '../../../services/game.service';
import { ButtonComponent } from '../../button/button.component';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-game-registry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, TextareaComponent, ButtonComponent],
  templateUrl: './game-registry-form.component.html',
  styleUrl: './game-registry-form.component.scss',
})
export class GameRegistryFormComponent {
  form: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private gameService: GameService, private modalService: ModalService) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.gameService.registerGame(
      this.form.value['email'],
      this.form.value['name'],
      this.form.value['description'],
    ).subscribe({
      next: (game) => {
        this.isLoading = false;
        this.modalService.open('gameRegistryRequestCreated');
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}