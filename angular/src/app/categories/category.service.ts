import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from "./category";
import { API_BASE_URL } from "../config.constants";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = API_BASE_URL + 'stock/categories/';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any>(this.url)
      .toPromise()
      .then(res => <Category[]>res.data);
  }

  getCategory(id: number){
    return this.http.get<any>(this.url + id)
      .toPromise()
      .then(res => <Category>res.data);
  }

  save(category: Category) {
    if (category.id) {
      return this.put(category);
    }
    return this.post(category);
  }

  delete(id: number) {
    return this.http
      .delete(this.url + id)
      .toPromise();
  }

  private post(category: Category) {
    return this.http
      .post<any>(this.url, category)
      .toPromise();
  }

  private put(category: Category) {
    return this.http
      .put<any>(this.url + category.id, category)
      .toPromise();
  }
}
