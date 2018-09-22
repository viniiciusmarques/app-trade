import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  chat;
  messages;
  message = '';

  public userId = JSON.parse(localStorage.getItem('user')).id;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private socket: Socket
  ) {
    this.chat = this.navParams.get('chat');
    this.socket.connect();
    this.messages = this.chat.messages;
    console.log(this.chat);
    this.socket.emit('rejoin', { room: this.chat.room});
    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }



  sendMessage() {
    this.socket.emit('add', { message: this.message, id_userSend: this.userId, id_chat: this.chat.idRoom });
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
