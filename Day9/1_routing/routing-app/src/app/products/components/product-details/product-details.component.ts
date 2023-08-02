import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  rSub?: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.rSub = this.route.params.pipe(map(params => params['id'])).subscribe({
      next: (id) => {
        this.product = this.productService.Products.find(p => p.id === parseInt(id));
      }
    });
  }

  ngOnDestroy(): void {
    this.rSub?.unsubscribe();
  }
}
