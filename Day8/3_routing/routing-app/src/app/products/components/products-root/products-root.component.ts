import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products-root',
  templateUrl: './products-root.component.html',
  styleUrls: ['./products-root.component.css'],
  providers: [ProductService]
})
export class ProductsRootComponent {
  productsList?: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsList = this.productService.Products;
  }
}
