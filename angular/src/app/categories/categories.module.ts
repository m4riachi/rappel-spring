import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListComponent } from './list/list.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { DetailComponent } from './detail/detail.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ]
})
export class CategoriesModule { }
