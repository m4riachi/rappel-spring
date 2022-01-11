import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../category";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().then(data => this.categories = data);
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
      this.categoryService.delete(id).then(() => {
        this.categoryService.getCategories().then(data => this.categories = data);
      });
    }
  }
}
