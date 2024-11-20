import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {name: "nombre", category: "indumntaria", rating: 1, price: 1000, inventoryStatus: true},
    {name: "zZAPATILLAS", category: "indumntaria", rating: 1, price: 1000, inventoryStatus: true}
    
  ];

  getSeverity (product: any) {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  };
}
