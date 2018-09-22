import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetailProductPage } from './modal-detail-product';
import { SliderComponent } from '../../components/slider/slider';

@NgModule({
  declarations: [
    SliderComponent,
    ModalDetailProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetailProductPage),
  ],
})
export class ModalDetailProductPageModule {}
