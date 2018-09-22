import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { SliceStringPipe } from '../../pipes/slice-string/slice-string';

@NgModule({
  declarations: [
    ChatPage,
    SliceStringPipe
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
  ],

})
export class ChatPageModule {}
