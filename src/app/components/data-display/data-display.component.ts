import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';

type DataType = 'string' | 'number' | 'boolean';

@Component({
  selector: 'data-display',
  templateUrl: './data-display.component.html',
  styles: [
  ]
})
export class DataDisplayComponent implements OnInit {
  types: string[] = ['string', 'number', 'boolean'];
  selectedType: string = '';
  data: any;

  constructor(private mockService: MockService) { }
  ngOnInit(): void {
  }

  fetchData(type: string): void {
    this.mockService.getData(type as DataType).subscribe(
      response => {
        this.data = response;
      },
      error => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }


  consultar(): void {
    if (this.selectedType) {
      this.fetchData(this.selectedType);
    } else {
      console.error('Tipo de dato no seleccionado');
    }
  }


}
