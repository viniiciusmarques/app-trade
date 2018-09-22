import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelatoriosPage } from './relatorios';
import { InfoComponent } from '../../components/info/info';

@NgModule({
  declarations: [
    RelatoriosPage,
    InfoComponent
  ],
  imports: [
    IonicPageModule.forChild(RelatoriosPage),
  ],
})
export class RelatoriosPageModule {}
