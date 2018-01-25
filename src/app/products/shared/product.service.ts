import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {
	productRow:any;
	constructor(private afd: AngularFireDatabase) { 
		this.productRow = afd.list('product'); //path to db table
	}

	getAllProducts() {
		return this.productRow.snapshotChanges().map(changes => {
			return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
		});
	}

	getOneProduct(key:string) {
		const productPath = `product/${key}`;
		return this.afd.object(productPath);
	}

	createProduct(form:any) {
		this.productRow.push(form);
	}

	updateProduct(key: string, form: any) {
		this.productRow.update(key, form);
	}
}
