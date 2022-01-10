import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label:'Catégories',
        icon:'pi pi-fw pi-th-large'
      }
    ];
  }
}
