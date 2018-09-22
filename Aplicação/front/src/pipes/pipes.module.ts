import { NgModule } from '@angular/core';
import { SliceStringPipe } from './slice-string/slice-string';
@NgModule({
	declarations: [SliceStringPipe],
	imports: [],
	exports: [SliceStringPipe]
})
export class PipesModule {}
