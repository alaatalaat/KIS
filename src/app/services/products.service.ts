import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts:Array<object> = [];

  constructor(private http:HttpClient) {}

  getAllProducts(){
    return this.http.get<any>('http://localhost:3000/products').pipe(map((res:any)=>{
      return res ;
    }));
  }

  getAllExploreProd(){
    return this.http.get<any>('http://localhost:3001/explore').pipe(map((res:any)=>{
      return res ;
    }));
  }


}
