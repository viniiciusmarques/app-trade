import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailMyProductPage } from './detail-my-product';
import { SliderComponent } from '../../components/slider/slider';

@NgModule({
  declarations: [
    DetailMyProductPage,
    SliderComponent
  ],
  imports: [
    IonicPageModule.forChild(DetailMyProductPage),
  ],
})
export class DetailMyProductPageModule {}
