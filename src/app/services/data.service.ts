import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(type:string): Observable<any>{
    return of({message: `Datos para tipo ${type}`})
  }

  constructor() { }
}
