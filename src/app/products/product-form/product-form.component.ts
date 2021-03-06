import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';

import { NgForm } from '@angular/forms';
import { ProductService } from '../shared/product.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

	product:Product = new Product();
	key:any;
	upload:any;
	fileUploaded:string = '';
	filePickerMessage:string = "Choose image...";

	constructor(
		private tS: ProductService, 
		private router:Router, 
		private activatedRoute:ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe( params => {
			this.key = params['key'];
			if (!this.key){
				return;
			}
			this.tS.getOneProduct(this.key).snapshotChanges().subscribe(
				result => {this.product = result.payload.val();},
				err => {console.log(err)}
				);
		});
	}
	onChange(event) {
		this.upload = event.target.files;
		this.fileUploaded = event.target.files[0].name;
		this.filePickerMessage = "Image chosen";
	}

	onSubmit(pav:any) {
		if(!this.key) {
			this.tS.createProduct(pav.value, this.upload);
		} else {
			this.tS.updateProduct(this.key, pav.value, this.upload);
		}		
		this.router.navigate(['/']);
	}

}
