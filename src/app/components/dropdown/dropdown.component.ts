import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styles: [
  ]
})
export class DropdownComponent {
  types = ['Costos Llantas', 'Precios Accesorios Vigentes', 'Otro tipo de variable.'];
  @Output() typeSelected = new EventEmitter<string>();

  onSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement !== null) {
      const type = selectElement.value;
      this.typeSelected.emit(type);
      console.log('Emitiendo evento:', type)
    }

  }


}
