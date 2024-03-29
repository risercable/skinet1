import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product";
import {ShopService} from "../shop.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product?: Product;
   constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
     this.loadProduct();
  }

  loadProduct() {
     const id = this.activatedRoute.snapshot.params['id'];
     if (id) this.shopService.getProductById(+id).subscribe(({
       next: product => this.product = product,
       error: error => console.log('Something went wrong: ', error)
     }))
  }
}
