import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Category} from "../category";
import {CategoryService} from "../category.service";
import {NOT_FOUND_STATUS} from "../../config.constants";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() category: Category;
  notFound: Boolean = false;
  loading: Boolean = true;
  errors: Array<any>;
  success: Boolean = false;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.category = new Category();

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this
          .categoryService
          .getCategory(params['id'])
          .then(category => this.category = category)
          .catch(e => {
            if (e.status == NOT_FOUND_STATUS)
              this.notFound = true;
          })
          .finally(() => this.loading = false);
      }
      else {
        this.loading = false;
      }
    });
  }

  save(): void {
    this.loading = true;
    this.errors = [];
    this.success = false;

    this
      .categoryService
      .save(this.category)
      .then(() => {
        this.success = true;

        if (this.category.id == undefined)
          this.category = new Category();
      })
      .catch(e => this.errors = <Array<any>>e.error.messages)
      .finally(() => this.loading = false); // TODO: Display error message
  }

  goBack(): void {
    window.history.back();
  }

}
