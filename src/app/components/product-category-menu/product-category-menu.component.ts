import { ProductService } from './../../services/product.service';
import { ProductCategory } from './../../common/product-category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css'],
})
export class ProductCategoryMenuComponent implements OnInit {
  ProductCategories: ProductCategory[];

  constructor(private ProductService: ProductService) {}

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.ProductService.getProductCategories().subscribe((data) => {
      console.log('product Categories=' + JSON.stringify(data));
      this.ProductCategories = data;
    });
  }
}
