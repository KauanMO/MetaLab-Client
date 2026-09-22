import { NgComponentOutlet } from '@angular/common';
import { Component, Type, computed, inject } from '@angular/core';
import { GameRegistryRequestCreatedComponent } from './bodies/game-registry-request-created.component';
import { ModalService } from './modal.service';

const BODIES: Record<string, Type<unknown>> = {
    gameRegistryRequestCreated: GameRegistryRequestCreatedComponent,
};

@Component({
    selector: 'app-modal',
    imports: [NgComponentOutlet],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
    host: { '(document:keydown.escape)': 'modal.close()' },
})
export class ModalComponent {
    protected readonly modal = inject(ModalService);

    protected readonly body = computed(() => {
        const event = this.modal.event();
        if (!event) return null;

        const component = BODIES[event];
        if (!component) {
            console.warn(`[Modal] Nenhum corpo registrado para o evento "${event}".`);
            return null;
        }
        return component;
    });
}