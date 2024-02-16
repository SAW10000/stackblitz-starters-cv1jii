import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  public getData(): any {
    const res = this.http.get('https://dummyjson.com/products');
    return res;
  }
}
