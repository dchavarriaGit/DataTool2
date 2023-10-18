import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

interface MockData {
  string: string;
  number: number;
  boolean: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private mockData: MockData = {
    string: 'Este es un string',
    number: 42,
    boolean: true
  };

  getData(type: keyof MockData): Observable<any> {
    if (!Object.keys(this.mockData).includes(type)) {
      return throwError(new Error('Tipo de dato no soportado'));
    }
    return of(this.mockData[type]);
  }
}
