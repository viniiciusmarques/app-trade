import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProductsEditPage } from './my-products-edit';

@NgModule({
  declarations: [
    MyProductsEditPage
  ],
  imports: [
    IonicPageModule.forChild(MyProductsEditPage),
  ],
})
export class MyProductsEditPageModule {}
