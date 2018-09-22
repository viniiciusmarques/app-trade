import { NgModule } from '@angular/core';
import { ListProductsComponent } from './list-products/list-products';
import { SliderComponent } from './slider/slider';
import { MenuComponent } from './menu/menu';
import { InfoComponent } from './info/info';
@NgModule({
	declarations: [ListProductsComponent,
    SliderComponent,
    MenuComponent,
    InfoComponent],
	imports: [],
	exports: [ListProductsComponent,
    SliderComponent,
    MenuComponent,
    InfoComponent]
})
export class ComponentsModule {}
