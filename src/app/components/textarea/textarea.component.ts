import { Component, Input, Optional, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() rows = 4;
  @Input() maxLength: number | null = null;

  value: string = '';

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get control() {
    return this.ngControl?.control;
  }

  get hasError(): boolean {
    return !!this.control && this.control.invalid && (this.control.touched || this.control.dirty);
  }

  get errorText(): string {
    if (!this.control?.errors) return '';

    if (this.control.errors['required']) return 'This field is required';
    if (this.control.errors['minlength']) {
      return `Minimum ${this.control.errors['minlength'].requiredLength} characters`;
    }

    return 'Invalid value';
  }
}