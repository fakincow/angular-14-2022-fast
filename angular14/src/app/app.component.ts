import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {products, products as data} from "./data/products";
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ANGULAR 14  2022';
  products: IProduct[] = [];
  loading = false;
  term ='';
  //products$: Observable<IProduct[]>
  constructor(public productsService: ProductsService,
  public modalService: ModalService
  ) {
  }
  ngOnInit(): void {
    this.loading = true;
   /* this.products$ = this.productsService.getAll().pipe(
      tap(()=> this.loading = false)
    );*/
    this.productsService.getAll().subscribe(() => {
    //  this.products = products;
      this.loading = false;
    })
  }

}
