import { Component, inject } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-game-registry-request-created',
  template: `
    <div class="content">
      <span class="title">Request created successfully</span>
      <div class="text-wrapper">
        <span class="text">Your game registry request has been created!</span>
        <span class="text">We will notify you by the informed e-mail the result of the request.</span>
      </div>
      <button type="button" class="confirm" (click)="modal.close()">Continue</button>
    </div>
  `,
  styles: `
    $color-title: #1a1a1a;
    $color-text: #555;
    $color-accent: #2563eb;
    $color-accent-hover: #1d4ed8;

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .title {
      display: block;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.3;
      color: $color-title;
    }

    .text {
      display: block;
      font-size: 0.95rem;
      line-height: 1.5;
      color: $color-text;
    }

    .confirm {
      align-self: flex-end;
      margin-top: 0.5rem;
      padding: 0.5rem 1.25rem;
      border: 0;
      border-radius: 0.5rem;
      background: $color-accent;
      color: #fff;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        background: $color-accent-hover;
      }

      &:focus-visible {
        outline: 2px solid $color-accent;
        outline-offset: 2px;
      }
    }
  `,
})
export class GameRegistryRequestCreatedComponent {
  protected readonly modal = inject(ModalService);
}