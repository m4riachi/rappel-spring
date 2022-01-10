import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from "./category";
import { API_BASE_URL } from "../config.constants";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(API_BASE_URL + 'stock/categories/')
      .toPromise()
      .then(res => <Category[]>res.data);
  }
}
