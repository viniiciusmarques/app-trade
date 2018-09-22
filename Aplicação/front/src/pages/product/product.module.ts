import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPage } from './product';
import { ListProductsComponent } from '../../components/list-products/list-products';

@NgModule({
  declarations: [
    ProductPage,
    ListProductsComponent
  ],
  imports: [
    IonicPageModule.forChild(ProductPage),
  ],
})
export class ProductPageModule {}
