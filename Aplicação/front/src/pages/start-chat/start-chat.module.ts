import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartChatPage } from './start-chat';

@NgModule({
  declarations: [
    StartChatPage,
  ],
  imports: [
    IonicPageModule.forChild(StartChatPage),
  ],
})
export class StartChatPageModule {}
