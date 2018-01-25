import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

const routes: Routes = [
	{path: '', component: ProductsComponent},
	{path: 'create', component: ProductFormComponent},
	{path: 'edit/:key', component: ProductFormComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
