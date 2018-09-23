import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailMyProductPage } from './detail-my-product';
import { MySliderComponent } from '../../components/my_slider/slider';

@NgModule({
  declarations: [
    DetailMyProductPage,
    MySliderComponent
  ],
  imports: [
    IonicPageModule.forChild(DetailMyProductPage),
  ],
})
export class DetailMyProductPageModule {}
