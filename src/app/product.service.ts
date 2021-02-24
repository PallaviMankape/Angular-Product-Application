import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  bSubject = new BehaviorSubject(''); 

  constructor() { }

  setProduct(product: any){
    this.bSubject.next(product);
  }

  getProduct(): Observable<any>{
    return this.bSubject.asObservable();
  }

}
