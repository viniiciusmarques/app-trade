import { NgModule } from '@angular/core';
import { ListProductsComponent } from './list-products/list-products';
import { SliderComponent } from './slider/slider';
import { MenuComponent } from './menu/menu';
import { InfoComponent } from './info/info';
import { MySliderComponent } from './my_slider/slider';
@NgModule({
	declarations: [ListProductsComponent,
    SliderComponent,
    MySliderComponent,
    MenuComponent,
    InfoComponent],
	imports: [],
	exports: [ListProductsComponent,
    SliderComponent,
    MySliderComponent,
    MenuComponent,
    InfoComponent]
})
export class ComponentsModule {}
