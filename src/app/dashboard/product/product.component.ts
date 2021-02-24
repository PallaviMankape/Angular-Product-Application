/* import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProduct } from '../../constants/storage';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData: any = [];
  product: any[] = [1,2,3,4];

  constructor(private httpClient: HttpClient,
              private router: Router ) {
               }

  ngOnInit(): void {
    this.httpClient.get('assets/product.json').subscribe((data) => {
      console.log(data);
      this.productData = data;
      if(!localStorage.getItem(AddProduct.PRODUCTDATA)) {
        localStorage.setItem(AddProduct.PRODUCTDATA,JSON.stringify(this.productData));
      }
      console.log(JSON.parse((localStorage.getItem(AddProduct.PRODUCTDATA))));
      this.productData = JSON.parse(localStorage.getItem(AddProduct.PRODUCTDATA));
      console.log(this.productData + 'ccccccccc');

      this.router.navigate(['dashboard/product']);
    });
  }

  onAddProduct() {
    this.router.navigate(['add-product']);
  }
 
}
 */


 // app.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddProductModalComponent } from '../../add-product-modal/add-product-modal.component';
import { AddProduct } from '../../constants/storage';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData: any = [];

  city: string;
  name: string;
  food_from_modal: string;

  constructor(public dialog: MatDialog, private httpClient: HttpClient, private commonService: ProductService) { }

  ngOnInit(): void {
    this.httpClient.get('assets/product.json').subscribe((data) => {
      console.log(data);
      this.productData = data;
    /*   if(!localStorage.getItem(AddProduct.PRODUCTDATA)) {
        localStorage.setItem(AddProduct.PRODUCTDATA,JSON.stringify(this.productData));
      }
      console.log(JSON.parse((localStorage.getItem(AddProduct.PRODUCTDATA))));
      this.productData = JSON.parse(localStorage.getItem(AddProduct.PRODUCTDATA));
      console.log(this.productData + 'ccccccccc');
 */
    });

    this.commonService.getProduct().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.productData.push(result);
        console.log(this.productData);
      }

    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      width: '350px',
      // data: { name: this.name}
    });

/*     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.productData.push(result.productData);
        console.log(this.productData);
      }

    }); */
  }


}
