import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  { path: 'categories',  component: ListComponent },
  { path: 'category/create',  component: DetailComponent },
  { path: 'category/:id/edit',  component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
