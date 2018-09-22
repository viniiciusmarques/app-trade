import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  public chats:Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private chatProvider: ChatProvider,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    this.chatProvider.getChats().subscribe(result => {
      this.chats = result.data;
    })
  }

  openChat(chat) {
    this.modalCtrl.create('MessagesPage', { chat: chat }).present();
  }

}
