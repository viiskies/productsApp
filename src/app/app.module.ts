import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

import { ProductService } from './products/shared/product.service';

@NgModule({
	declarations: [
		AppComponent,
		ProductsComponent,
		ProductFormComponent
	],
	imports: [
		AngularFireDatabaseModule,
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase)
	],
	providers: [ProductService],
	bootstrap: [AppComponent]
})
export class AppModule { }
