import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
    readonly event = signal<string | null>(null);

    open(event: string): void {
        this.event.set(event);
    }

    close(): void {
        this.event.set(null);
    }
}