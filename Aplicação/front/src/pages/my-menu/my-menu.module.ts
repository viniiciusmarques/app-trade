import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMenuPage } from './my-menu';

@NgModule({
  declarations: [
    MyMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MyMenuPage),
  ],
})
export class MyMenuPageModule {}
