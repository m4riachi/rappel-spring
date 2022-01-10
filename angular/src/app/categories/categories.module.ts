import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListComponent } from './list/list.component';
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    TableModule
  ]
})
export class CategoriesModule { }
