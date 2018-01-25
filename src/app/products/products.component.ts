import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	
	products:any;
	productsToDelete:Array<string> = [];
	
	constructor(private tS: ProductService) { }
	
	ngOnInit() {
		this.products = this.tS.getAllProducts();
	}
	
	onDelete(key:string) {
		this.tS.deleteProduct(key);
	}
	
	makeProductsToDelete(key:string) {
		if (this.productsToDelete.indexOf(key) != -1) {
			this.productsToDelete.splice(this.productsToDelete.indexOf(key), 1);
		} else {
			this.productsToDelete.push(key);
		}
		console.log(this.productsToDelete);
	}
	
	onDeleteBunch() {
		console.log('ondeleteBunch');
		// console.log(this.productsToDelete);
		this.tS.deleteProducts(this.productsToDelete);
	}
}