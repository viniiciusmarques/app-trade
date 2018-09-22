import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { ChatProvider } from '../../providers/chat/chat';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-start-chat',
  templateUrl: 'start-chat.html',
})
export class StartChatPage {

  private userProdut;
  private messages;
  public chat;
  private message = '';
  private user = JSON.parse(localStorage.getItem('user'));
  public userId = JSON.parse(localStorage.getItem('user')).id;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socket: Socket,
    private viewCtrl: ViewController,
    private chatProvider: ChatProvider
  ) {
    this.userProdut = this.navParams.get('user');
    this.socket.connect();
    this.socket.emit('join-room', {
      room: `${this.user.userName}.${this.userProdut.username}`,
      userStart: this.user.id,
      userRecept: this.userProdut.id
    });
    this.chatProvider.getChat(`${this.user.userName}.${this.userProdut.username}`).subscribe(result => {
      this.chat = result.data[0];
      this.messages = result.data[0].messages;
      console.log(this.chat);
    });

    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socket.emit('add', { message: this.message, id_userSend: this.user.id, id_chat: this.chat.idRoom });
    this.message = '';
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  leaveRoom() {
    this.socket.emit('disconnect', this.chat.room);
    this.viewCtrl.dismiss();
  }

}
